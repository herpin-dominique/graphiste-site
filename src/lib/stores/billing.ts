import { writable, get } from 'svelte/store';

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

const STORAGE_KEY = 'herpin_invoices';

function loadFromStorage(): Invoice[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(invoices: Invoice[]) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(invoices));
}

function createBillingStore() {
  const { subscribe, set, update } = writable<Invoice[]>([]);

  return {
    subscribe,

    reload: () => {
      set(loadFromStorage());
    },

    add: (invoiceData: Omit<Invoice, 'id' | 'created_at' | 'send_history'>): Invoice => {
      const newInvoice: Invoice = {
        ...invoiceData,
        id: generateId(),
        created_at: new Date().toISOString(),
        send_history: [{ date: new Date().toISOString(), type: 'created', note: 'Document créé' }],
      };
      update(inv => {
        const updated = [...inv, newInvoice];
        saveToStorage(updated);
        return updated;
      });
      return newInvoice;
    },

    update: (id: string, invoiceData: Partial<Invoice>) => {
      const current = get({ subscribe });
      const existing = current.find(inv => inv.id === id);
      if (!existing) return;

      const updated: Invoice = {
        ...existing,
        ...invoiceData,
        send_history: (invoiceData.items || invoiceData.total !== undefined || invoiceData.client_name)
          ? [...existing.send_history, { date: new Date().toISOString(), type: 'updated', note: 'Document modifié' }]
          : existing.send_history,
      };

      update(inv => {
        const result = inv.map(i => i.id === id ? updated : i);
        saveToStorage(result);
        return result;
      });
    },

    delete: (id: string) => {
      update(inv => {
        const result = inv.filter(i => i.id !== id);
        saveToStorage(result);
        return result;
      });
    },

    updateStatus: (id: string, status: Invoice['status']) => {
      const current = get({ subscribe });
      const existing = current.find(inv => inv.id === id);
      if (!existing) return;

      const eventType = status === 'paid' ? 'paid' : status === 'sent' ? 'sent' : 'updated';
      const send_history = [
        ...existing.send_history,
        { date: new Date().toISOString(), type: eventType as SendEvent['type'], note: `Statut changé en "${getStatusLabel(status)}"` },
      ];

      update(inv => {
        const result = inv.map(i => i.id === id ? { ...i, status, send_history } as Invoice : i);
        saveToStorage(result);
        return result;
      });
    },

    addSendEvent: (id: string, type: SendEvent['type'], note?: string) => {
      const current = get({ subscribe });
      const existing = current.find(inv => inv.id === id);
      if (!existing) return;

      const send_history = [...existing.send_history, { date: new Date().toISOString(), type, note }];
      update(inv => {
        const result = inv.map(i => i.id === id ? { ...i, send_history } : i);
        saveToStorage(result);
        return result;
      });
    },

    markAsSent: (id: string, note?: string) => {
      const current = get({ subscribe });
      const existing = current.find(inv => inv.id === id);
      if (!existing) return;

      const send_history = [...existing.send_history, { date: new Date().toISOString(), type: 'sent' as const, note: note || 'Document envoyé au client' }];
      update(inv => {
        const result = inv.map(i => i.id === id ? { ...i, status: 'sent' as const, send_history } : i);
        saveToStorage(result);
        return result;
      });
    },

    addReminder: (id: string, note?: string) => {
      const current = get({ subscribe });
      const existing = current.find(inv => inv.id === id);
      if (!existing) return;

      const send_history = [...existing.send_history, { date: new Date().toISOString(), type: 'reminder' as const, note: note || 'Relance envoyée' }];
      update(inv => {
        const result = inv.map(i => i.id === id ? { ...i, send_history } : i);
        saveToStorage(result);
        return result;
      });
    },

    getById: (id: string): Invoice | undefined => {
      return get({ subscribe }).find(inv => inv.id === id);
    },
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

export function generateInvoiceNumber(type: 'quote' | 'invoice'): string {
  const prefix = type === 'quote' ? 'DEV' : 'FAC';
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}-${year}-${random}`;
}
