import { blogPosts } from "$lib/data/blog-posts";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = () => {
  const site = "https://herpin-creative-studio.fr";

  const items = blogPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${site}/blog/${post.slug}</link>
      <guid isPermaLink="true">${site}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
      <pubDate>${new Date(post.date.replace(/(\d+) (\w+) (\d+)/, "$1 $2 $3")).toUTCString()}</pubDate>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Herpin Creative Studio — Blog</title>
    <link>${site}/blog</link>
    <description>Conseils en design graphique, motion design et communication visuelle par Lola Herpin, graphiste freelance à Caen.</description>
    <language>fr</language>
    <atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=3600",
    },
  });
};
