import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { invoices } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { RequestHandler } from './$types';

export const PUT: RequestHandler = async ({ params, request }) => {
  const body = await request.json();
  const [updated] = await db.update(invoices)
    .set({
      type: body.type,
      invoiceNumber: body.invoice_number,
      clientName: body.client_name,
      clientEmail: body.client_email,
      clientAddress: body.client_address,
      items: body.items,
      total: String(body.total),
      status: body.status,
      dueDate: body.due_date ?? null,
      sendHistory: body.send_history,
      notes: body.notes ?? null,
    })
    .where(eq(invoices.id, params.id))
    .returning();

  if (!updated) throw error(404, 'Invoice not found');
  return json(updated);
};

export const DELETE: RequestHandler = async ({ params }) => {
  await db.delete(invoices).where(eq(invoices.id, params.id));
  return new Response(null, { status: 204 });
};
