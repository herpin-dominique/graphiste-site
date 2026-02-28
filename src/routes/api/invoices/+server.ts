import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { invoices } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
  const rows = await db.select().from(invoices).orderBy(desc(invoices.createdAt));
  return json(rows);
};

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json();
  const [created] = await db.insert(invoices).values({
    id: body.id,
    type: body.type,
    invoiceNumber: body.invoice_number,
    clientName: body.client_name,
    clientEmail: body.client_email,
    clientAddress: body.client_address,
    items: body.items,
    total: String(body.total),
    status: body.status ?? 'draft',
    dueDate: body.due_date ?? null,
    sendHistory: body.send_history ?? [],
    notes: body.notes ?? null,
  }).returning();
  return json(created, { status: 201 });
};
