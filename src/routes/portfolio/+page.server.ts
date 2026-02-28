import { db } from '$lib/server/db';
import { projects } from '$lib/server/db/schema';
import { eq, asc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const rows = await db
    .select()
    .from(projects)
    .where(eq(projects.visible, true))
    .orderBy(asc(projects.sortOrder));

  return { projects: rows };
};
