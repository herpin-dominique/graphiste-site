import { blogPosts } from "$lib/data/blog-posts";
import type { RequestHandler } from "./$types";

const FR_MONTHS: Record<string, string> = {
  janvier: "January", février: "February", mars: "March",
  avril: "April", mai: "May", juin: "June",
  juillet: "July", août: "August", septembre: "September",
  octobre: "October", novembre: "November", décembre: "December",
};

function parseFrenchDate(dateStr: string): string {
  const match = dateStr.match(/(\d+)\s+(\w+)\s+(\d+)/);
  if (!match) return new Date().toUTCString();
  const [, day, monthFr, year] = match;
  const monthEn = FR_MONTHS[monthFr.toLowerCase()] ?? monthFr;
  return new Date(`${monthEn} ${day}, ${year}`).toUTCString();
}

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
      <pubDate>${parseFrenchDate(post.date)}</pubDate>
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
