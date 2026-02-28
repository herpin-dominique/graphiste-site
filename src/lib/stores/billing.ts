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

// Adapte la réponse DB (snake_case Drizzle) vers l'interface Invoice
function fromDb(row: Record<string, unknown>): Invoice {
  return {
    id: row.id as string,
    type: row.type as Invoice['type'],
    invoice_number: (row.invoiceNumber ?? row.invoice_number) as string,
    client_name: (row.clientName ?? row.client_name) as string,
    client_email: (row.clientEmail ?? row.client_email) as string,
    client_address: (row.clientAddress ?? row.client_address) as string,
    items: (row.items ?? []) as InvoiceItem[],
    total: Number(row.total),
    status: row.status as Invoice['status'],
    created_at: (row.createdAt ?? row.created_at) as string,
    due_date: (row.dueDate ?? row.due_date) as string | undefined,
    send_history: (row.sendHistory ?? row.send_history ?? []) as SendEvent[],
    notes: row.notes as string | undefined,
  };
}

function createBillingStore() {
  const { subscribe, set, update } = writable<Invoice[]>([]);

  return {
    subscribe,

    reload: async () => {
      const res = await fetch('/api/invoices');
      if (res.ok) {
        const rows = await res.json();
        set(rows.map(fromDb));
      }
    },

    add: async (invoiceData: Omit<Invoice, 'id' | 'created_at' | 'send_history'>): Promise<Invoice> => {
      const newInvoice = {
        ...invoiceData,
        id: generateId(),
        created_at: new Date().toISOString(),
        send_history: [{ date: new Date().toISOString(), type: 'created', note: 'Document créé' }],
      };
      const res = await fetch('/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newInvoice),
      });
      const created = fromDb(await res.json());
      update(inv => [...inv, created]);
      return created;
    },

    update: async (id: string, invoiceData: Partial<Invoice>) => {
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

      await fetch(`/api/invoices/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated),
      });
      update(inv => inv.map(i => i.id === id ? updated : i));
    },

    delete: async (id: string) => {
      await fetch(`/api/invoices/${id}`, { method: 'DELETE' });
      update(inv => inv.filter(i => i.id !== id));
    },

    updateStatus: async (id: string, status: Invoice['status']) => {
      const current = get({ subscribe });
      const existing = current.find(inv => inv.id === id);
      if (!existing) return;

      const eventType = status === 'paid' ? 'paid' : status === 'sent' ? 'sent' : 'updated';
      const send_history = [
        ...existing.send_history,
        { date: new Date().toISOString(), type: eventType as SendEvent['type'], note: `Statut changé en "${getStatusLabel(status)}"` },
      ];

      await fetch(`/api/invoices/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, send_history }),
      });
      update(inv => inv.map(i => i.id === id ? { ...i, status, send_history } : i));
    },

    addSendEvent: async (id: string, type: SendEvent['type'], note?: string) => {
      const current = get({ subscribe });
      const existing = current.find(inv => inv.id === id);
      if (!existing) return;

      const send_history = [...existing.send_history, { date: new Date().toISOString(), type, note }];
      await fetch(`/api/invoices/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: existing.status, send_history }),
      });
      update(inv => inv.map(i => i.id === id ? { ...i, send_history } : i));
    },

    markAsSent: async (id: string, note?: string) => {
      const current = get({ subscribe });
      const existing = current.find(inv => inv.id === id);
      if (!existing) return;

      const send_history = [...existing.send_history, { date: new Date().toISOString(), type: 'sent' as const, note: note || 'Document envoyé au client' }];
      await fetch(`/api/invoices/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'sent', send_history }),
      });
      update(inv => inv.map(i => i.id === id ? { ...i, status: 'sent', send_history } : i));
    },

    addReminder: async (id: string, note?: string) => {
      const current = get({ subscribe });
      const existing = current.find(inv => inv.id === id);
      if (!existing) return;

      const send_history = [...existing.send_history, { date: new Date().toISOString(), type: 'reminder' as const, note: note || 'Relance envoyée' }];
      await fetch(`/api/invoices/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: existing.status, send_history }),
      });
      update(inv => inv.map(i => i.id === id ? { ...i, send_history } : i));
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
