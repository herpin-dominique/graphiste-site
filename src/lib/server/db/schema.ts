import { pgTable, text, integer, boolean, jsonb, serial, timestamp, numeric } from 'drizzle-orm/pg-core';

export const projects = pgTable('projects', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  tag: text('tag').notNull(),
  tagColor: text('tag_color').notNull(),
  description: text('description').notNull(),
  photos: jsonb('photos').notNull().$type<string[]>(),
  sortOrder: integer('sort_order').notNull().default(0),
  visible: boolean('visible').notNull().default(true),
});

export const invoices = pgTable('invoices', {
  id: text('id').primaryKey(),
  type: text('type').notNull().$type<'quote' | 'invoice'>(),
  invoiceNumber: text('invoice_number').notNull(),
  clientName: text('client_name').notNull(),
  clientEmail: text('client_email').notNull(),
  clientAddress: text('client_address').notNull(),
  items: jsonb('items').notNull().$type<Array<{ description: string; quantity: number; unit_price: number }>>(),
  total: numeric('total').notNull(),
  status: text('status').notNull().default('draft').$type<'draft' | 'sent' | 'paid' | 'unpaid'>(),
  dueDate: text('due_date'),
  sendHistory: jsonb('send_history').notNull().default([]).$type<Array<{ date: string; type: string; note?: string }>>(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Invoice = typeof invoices.$inferSelect;
export type NewInvoice = typeof invoices.$inferInsert;
