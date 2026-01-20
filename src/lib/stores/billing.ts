import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

export interface InvoiceItem {
  description: string;
  quantity: number;
  unit_price: number;
}

export interface SendEvent {
  date: string;
  type: 'created' | 'sent' | 'reminder' | 'updated' | 'paid';
  note?: string;
}

export interface Invoice {
  id: string;
  type: 'quote' | 'invoice';
  invoice_number: string;
  client_name: string;
  client_email: string;
  client_address: string;
  items: InvoiceItem[];
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'unpaid';
  created_at: string;
  due_date?: string;
  send_history: SendEvent[];
  notes?: string;
}

const STORAGE_KEY = 'billing_invoices';

function loadInvoices(): Invoice[] {
  if (!browser) return [];

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [];
}

function saveInvoices(invoices: Invoice[]) {
  if (browser) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
  }
}

function createBillingStore() {
  const { subscribe, set, update } = writable<Invoice[]>(loadInvoices());

  // Sauvegarder automatiquement les changements
  subscribe(invoices => {
    saveInvoices(invoices);
  });

  return {
    subscribe,

    add: (invoiceData: Omit<Invoice, 'id' | 'created_at' | 'send_history'>) => {
      const newInvoice: Invoice = {
        ...invoiceData,
        id: generateId(),
        created_at: new Date().toISOString(),
        send_history: [{
          date: new Date().toISOString(),
          type: 'created',
          note: 'Document créé'
        }]
      };

      update(invoices => [...invoices, newInvoice]);
      return newInvoice;
    },

    update: (id: string, invoiceData: Partial<Invoice>) => {
      update(invoices => {
        return invoices.map(inv => {
          if (inv.id === id) {
            const updated = { ...inv, ...invoiceData };
            // Ajouter un événement de modification si des changements significatifs
            if (invoiceData.items || invoiceData.total || invoiceData.client_name) {
              updated.send_history = [
                ...updated.send_history,
                {
                  date: new Date().toISOString(),
                  type: 'updated' as const,
                  note: 'Document modifié'
                }
              ];
            }
            return updated;
          }
          return inv;
        });
      });
    },

    delete: (id: string) => {
      update(invoices => invoices.filter(inv => inv.id !== id));
    },

    updateStatus: (id: string, status: Invoice['status']) => {
      update(invoices => {
        return invoices.map(inv => {
          if (inv.id === id) {
            const eventType = status === 'paid' ? 'paid' : status === 'sent' ? 'sent' : 'updated';
            return {
              ...inv,
              status,
              send_history: [
                ...inv.send_history,
                {
                  date: new Date().toISOString(),
                  type: eventType as SendEvent['type'],
                  note: `Statut changé en "${getStatusLabel(status)}"`
                }
              ]
            };
          }
          return inv;
        });
      });
    },

    addSendEvent: (id: string, type: SendEvent['type'], note?: string) => {
      update(invoices => {
        return invoices.map(inv => {
          if (inv.id === id) {
            return {
              ...inv,
              send_history: [
                ...inv.send_history,
                {
                  date: new Date().toISOString(),
                  type,
                  note
                }
              ]
            };
          }
          return inv;
        });
      });
    },

    markAsSent: (id: string, note?: string) => {
      update(invoices => {
        return invoices.map(inv => {
          if (inv.id === id) {
            return {
              ...inv,
              status: 'sent' as const,
              send_history: [
                ...inv.send_history,
                {
                  date: new Date().toISOString(),
                  type: 'sent' as const,
                  note: note || 'Document envoyé au client'
                }
              ]
            };
          }
          return inv;
        });
      });
    },

    addReminder: (id: string, note?: string) => {
      update(invoices => {
        return invoices.map(inv => {
          if (inv.id === id) {
            return {
              ...inv,
              send_history: [
                ...inv.send_history,
                {
                  date: new Date().toISOString(),
                  type: 'reminder' as const,
                  note: note || 'Relance envoyée'
                }
              ]
            };
          }
          return inv;
        });
      });
    },

    getById: (id: string): Invoice | undefined => {
      const invoices = get({ subscribe });
      return invoices.find(inv => inv.id === id);
    },

    reload: () => {
      set(loadInvoices());
    }
  };
}

function generateId(): string {
  return `inv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function getStatusLabel(status: string): string {
  switch (status) {
    case 'paid': return 'Payé';
    case 'unpaid': return 'Impayé';
    case 'sent': return 'Envoyé';
    default: return 'Brouillon';
  }
}

export const billingStore = createBillingStore();

// Helpers pour générer les numéros de facture/devis
export function generateInvoiceNumber(type: 'quote' | 'invoice'): string {
  const prefix = type === 'quote' ? 'DEV' : 'FAC';
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}-${year}-${random}`;
}
