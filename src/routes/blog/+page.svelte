<script lang="ts">
  import { blogPosts } from "$lib/data/blog-posts";
</script>

<svelte:head>
  <title>Blog graphisme & design à Caen | Herpin Creative Studio</title>
  <meta name="description" content="Conseils en design graphique, tendances créatives et astuces branding. Le blog de Herpin Creative Studio, graphiste freelance à Caen, Normandie." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Herpin Creative Studio" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:title" content="Blog - Herpin Creative Studio" />
  <meta property="og:description" content="Conseils en design graphique, tendances créatives et astuces branding par votre graphiste à Caen." />
  <meta property="og:url" content="https://herpin-creative-studio.fr/blog" />
  <meta property="og:image" content="https://herpin-creative-studio.fr/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Blog graphisme - Herpin Creative Studio" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://herpin-creative-studio.fr/og-image.png" />
</svelte:head>

<main
  class="relative z-0 min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900 px-4 md:px-6 lg:px-8 xl:px-12 py-16 lg:py-20 text-white"
>
  <!-- Header -->
  <div class="text-center mb-16 lg:mb-20">
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 lg:mb-8">
      Blog
    </h1>
    <p class="text-violet-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
      Conseils, tendances et réflexions sur le design graphique, le branding et la communication visuelle.
    </p>
  </div>

  <!-- Grille d'articles -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full max-w-[1800px] mx-auto"
  >
    {#each blogPosts as post, i}
      <a
        href="/blog/{post.slug}"
        class="group relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 overflow-hidden flex flex-col"
       
        data-aos-delay={i * 100}
      >
        <!-- Image placeholder avec gradient -->
        <div class="h-48 md:h-56 bg-gradient-to-br {post.categoryColor} opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <svg class="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
          </svg>
        </div>

        <!-- Contenu -->
        <div class="p-6 md:p-8 flex flex-col flex-1">
          <!-- Catégorie + temps de lecture -->
          <div class="flex items-center justify-between mb-4">
            <span class="bg-gradient-to-r {post.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span class="text-violet-400 text-sm">{post.readingTime} min de lecture</span>
          </div>

          <!-- Titre -->
          <h2 class="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300 leading-tight">
            {post.title}
          </h2>

          <!-- Extrait -->
          <p class="text-violet-200 text-base leading-relaxed mb-6 flex-1">
            {post.excerpt}
          </p>

          <!-- Date + lien -->
          <div class="flex items-center justify-between mt-auto pt-4 border-t border-violet-700/30">
            <span class="text-violet-400 text-sm">{post.date}</span>
            <span class="text-pink-400 group-hover:text-pink-300 font-semibold text-sm flex items-center gap-1 transition-colors">
              Lire l'article
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </div>
        </div>
      </a>
    {/each}
  </div>

  <!-- CTA -->
  <div class="text-center mt-16 lg:mt-20">
    <p class="text-violet-100 text-xl md:text-2xl mb-8 leading-relaxed">
      Un projet de design graphique ou de motion design ? Parlons-en !
    </p>
    <a
      href="/contact"
      class="inline-flex items-center gap-3 px-10 py-5 lg:px-12 lg:py-6 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold text-xl lg:text-2xl rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
    >
      <svg class="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
      </svg>
      Me contacter
    </a>
  </div>
</main>
