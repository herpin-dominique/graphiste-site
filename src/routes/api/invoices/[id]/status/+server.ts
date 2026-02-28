import { json, error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { invoices } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { RequestHandler } from './$types';

export const PATCH: RequestHandler = async ({ params, request }) => {
  const { status, send_history } = await request.json();
  const [updated] = await db.update(invoices)
    .set({ status, sendHistory: send_history })
    .where(eq(invoices.id, params.id))
    .returning();

  if (!updated) throw error(404, 'Invoice not found');
  return json(updated);
};
