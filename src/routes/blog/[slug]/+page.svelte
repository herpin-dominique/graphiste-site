<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  $: post = data.post;

  function parseFrenchDate(dateStr: string): string {
    const months: Record<string, string> = {
      janvier: '01', février: '02', mars: '03', avril: '04',
      mai: '05', juin: '06', juillet: '07', août: '08',
      septembre: '09', octobre: '10', novembre: '11', décembre: '12'
    };
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const day = parts[0].padStart(2, '0');
      const month = months[parts[1].toLowerCase()] ?? '01';
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
    return dateStr;
  }

  $: isoDate = parseFrenchDate(post.date);

  $: jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://herpin-creative-studio.fr/blog/${post.slug}`,
    datePublished: isoDate,
    dateModified: isoDate,
    inLanguage: 'fr-FR',
    keywords: post.category,
    image: {
      '@type': 'ImageObject',
      url: 'https://herpin-creative-studio.fr/og-image.png',
      width: 1200,
      height: 630
    },
    author: {
      '@type': 'Person',
      name: 'Lola Herpin',
      jobTitle: 'Graphiste & Motion Designer',
      url: 'https://herpin-creative-studio.fr/a-propos'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Herpin Creative Studio',
      url: 'https://herpin-creative-studio.fr',
      logo: {
        '@type': 'ImageObject',
        url: 'https://herpin-creative-studio.fr/LOGO%20HERPIN%20CREATIVE%20STUDIOb_4.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://herpin-creative-studio.fr/blog/${post.slug}`
    }
  });
</script>

<svelte:head>
  <title>{post.title} | Blog Herpin Creative Studio</title>
  <meta name="description" content={post.excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Herpin Creative Studio" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:title" content="{post.title} - Herpin Creative Studio" />
  <meta property="og:description" content={post.excerpt} />
  <meta property="og:url" content="https://herpin-creative-studio.fr/blog/{post.slug}" />
  <meta property="og:image" content="https://herpin-creative-studio.fr/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="{post.title} - Herpin Creative Studio" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{post.title} - Herpin Creative Studio" />
  <meta name="twitter:description" content={post.excerpt} />
  <meta name="twitter:image" content="https://herpin-creative-studio.fr/og-image.png" />
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<main
  class="relative z-0 min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900 px-4 md:px-6 lg:px-8 xl:px-12 py-16 lg:py-20 text-white"
>
  <article class="max-w-3xl mx-auto">
    <!-- Retour blog -->
    <a
      href="/blog"
      class="inline-flex items-center gap-2 text-violet-300 hover:text-pink-400 transition-colors mb-8 text-sm font-semibold"
     
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      Retour au blog
    </a>

    <!-- Header article -->
    <header class="mb-12">
      <div class="flex items-center gap-4 mb-6">
        <span class="bg-gradient-to-r {post.categoryColor} text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          {post.category}
        </span>
        <span class="text-violet-400 text-sm">{post.readingTime} min de lecture</span>
      </div>

      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        {post.title}
      </h1>

      <p class="text-violet-300 text-sm">
        Publié le {post.date} par <strong class="text-violet-200">Lola Herpin</strong>
      </p>
    </header>

    <!-- Contenu article -->
    <div class="prose-blog space-y-6">
      {#each post.content as block}
        {@html block}
      {/each}
    </div>

    <!-- CTA -->
    <div
      class="mt-16 bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm rounded-3xl border border-violet-700/50 p-8 md:p-12 text-center"
     
    >
      <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
        Un projet en tête ?
      </h3>
      <p class="text-violet-200 text-lg mb-8 max-w-xl mx-auto">
        Discutons de votre projet de design graphique ou motion design. Je vous accompagne de l'idée à la réalisation.
      </p>
      <a
        href="/contact"
        class="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        Me contacter
      </a>
    </div>
  </article>
</main>

<style>
  :global(.prose-blog h2) {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
  }

  :global(.prose-blog p) {
    color: rgb(221 214 254); /* violet-200 */
    font-size: 1.125rem;
    line-height: 1.8;
  }

  :global(.prose-blog strong) {
    color: white;
  }

  :global(.prose-blog ul) {
    list-style: none;
    padding: 0;
    color: rgb(221 214 254);
    font-size: 1.125rem;
    line-height: 1.8;
  }

  :global(.prose-blog ul li) {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
  }

  :global(.prose-blog ul li::before) {
    content: "";
    position: absolute;
    left: 0;
    top: 0.7rem;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(to right, rgb(236 72 153), rgb(139 92 246));
  }

  @media (min-width: 768px) {
    :global(.prose-blog h2) {
      font-size: 1.875rem;
    }
  }
</style>
