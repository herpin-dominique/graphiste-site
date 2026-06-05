<svelte:head>
  <title>Goodies & Créations | Herpin Creative Studio</title>
  <meta name="description" content="T-shirts, sweats et objets illustrés par Lola Herpin. Des créations graphiques uniques à porter au quotidien. Bientôt disponible." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Herpin Creative Studio" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:title" content="Goodies illustrés – Herpin Creative Studio" />
  <meta property="og:description" content="T-shirts et créations portées, illustrées par Lola Herpin. Bientôt disponible." />
  <meta property="og:url" content="https://www.herpin-creative-studio.fr/goodies" />
  <meta property="og:image" content="https://www.herpin-creative-studio.fr/og-image.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://www.herpin-creative-studio.fr/og-image.png" />
</svelte:head>

<main class="relative z-0 min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900 text-white flex flex-col items-center justify-center px-6 py-20">

  <!-- Badge -->
  <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/20 border border-pink-400/30 mb-10">
    <span class="relative flex h-2 w-2">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-2 w-2 bg-pink-400"></span>
    </span>
    <span class="text-pink-300 text-sm font-semibold uppercase tracking-wider">En préparation</span>
  </div>

  <!-- Titre -->
  <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-center mb-6 leading-tight">
    Goodies
  </h1>

  <!-- Sous-titre -->
  <p class="text-violet-100 text-xl md:text-2xl lg:text-3xl text-center max-w-2xl leading-relaxed mb-4">
    Des illustrations originales à porter au quotidien.
  </p>
  <p class="text-pink-300 text-2xl md:text-3xl font-bold text-center mb-12 tracking-wide uppercase">
    Bientôt disponible
  </p>

  <!-- Aperçu produits à venir -->
  <div class="flex flex-wrap justify-center gap-4 mb-14">
    {#each ['T-shirts', 'Sweats', 'Tote bags', 'Mugs', 'Casquettes'] as item}
      <span class="px-5 py-2.5 rounded-full bg-violet-800/50 border border-violet-600/40 text-violet-200 font-semibold text-sm uppercase tracking-wide">
        {item}
      </span>
    {/each}
  </div>

  <!-- Description -->
  <div class="max-w-lg text-center mb-14">
    <p class="text-violet-200 text-base md:text-lg leading-relaxed">
      Je travaille en ce moment à une collection de pièces illustrées à la main. T-shirts, sweats et accessoires du quotidien — chaque pièce sera unique et produite en édition limitée.
    </p>
  </div>

  <!-- CTA notif -->
  <div class="bg-violet-900/50 border border-violet-700/50 rounded-2xl p-6 md:p-8 max-w-md w-full text-center mb-10">
    <p class="text-white font-bold text-lg mb-2">Être prévenu(e) à l'ouverture ?</p>
    <p class="text-violet-300 text-sm mb-5">Envoyez un message et Lola vous contacte dès que la boutique est prête.</p>
    <a
      href="/contact?sujet=Notification+ouverture+boutique+goodies"
      class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      Me prévenir
    </a>
  </div>

  <!-- Retour portfolio -->
  <a href="/portfolio" class="text-violet-400 hover:text-violet-200 transition-colors text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
    Voir le portfolio
  </a>

</main>
