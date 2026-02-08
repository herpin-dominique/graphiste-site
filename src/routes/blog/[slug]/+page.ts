import { blogPosts } from "$lib/data/blog-posts";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    throw error(404, "Article introuvable");
  }

  return { post };
};
