<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";
  onMount(() => { AOS.init({ duration: 600, once: true }); });
</script>

<svelte:head>
  <title>Tarifs graphiste Caen - Forfaits design & motion | Herpin Creative Studio</title>
  <meta name="description" content="Tarifs et forfaits graphisme à Caen. Création de logo, identité visuelle, motion design, supports print & digital. Devis gratuit, graphiste freelance en Normandie." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Herpin Creative Studio" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:title" content="Tarifs graphiste freelance Caen | Herpin Creative Studio" />
  <meta property="og:description" content="Découvrez les forfaits pour vos projets de design graphique et motion design à Caen, Normandie." />
  <meta property="og:url" content="https://herpin-creative-studio.fr/tarifs" />
  <meta property="og:image" content="https://herpin-creative-studio.fr/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Tarifs graphiste Caen - Herpin Creative Studio" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://herpin-creative-studio.fr/og-image.png" />
</svelte:head>

<main
  class="relative z-0 min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900 px-4 md:px-6 lg:px-8 xl:px-12 py-16 lg:py-20"
>
  <!-- Header -->
  <div class="text-center mb-16 lg:mb-20">
    <h1
      class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 lg:mb-8"
    >
      Mes forfaits
    </h1>
    <p
      class="text-violet-100 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed"
    >
      Des solutions adaptées à vos besoins, de l'essentiel au sur-mesure
    </p>
  </div>

  <!-- Cards -->
  <div
    class="w-full max-w-[1900px] mx-auto grid md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16"
  >
    <!-- Offre Essentiel -->
    <div
      class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-8 md:p-10 lg:p-12 xl:p-14 rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
     
     
    >
      <!-- Tag -->
      <div class="absolute -top-4 left-8 lg:left-12">
        <span
          class="bg-violet-600 text-white text-sm md:text-base lg:text-lg font-bold px-5 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-wider"
        >
          Starter
        </span>
      </div>

      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 lg:mt-8 mb-4 lg:mb-6"
      >
        Essentiel
      </h2>

      <!-- Prix -->
      <div class="mb-8 lg:mb-10">
        <span
          class="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-lg md:text-xl lg:text-2xl font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full"
        >
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          Me consulter
        </span>
      </div>

      <ul
        class="space-y-4 lg:space-y-5 text-violet-100 text-lg md:text-xl lg:text-2xl mb-10 lg:mb-12"
      >
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-violet-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Moodboard + recherche</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-violet-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Logo principal</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-violet-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>1 Déclinaison</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-violet-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Palette de couleurs</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-violet-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Fichiers optimisés (png, svg, pdf)</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-violet-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Typographies</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-violet-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>1-2 allers-retours</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-violet-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Charte simplifiée (5-8 pages)</span>
        </li>
      </ul>

      <a
        href="/contact"
        class="block w-full text-center bg-violet-600 hover:bg-violet-500 text-white font-bold py-4 lg:py-5 px-8 rounded-2xl text-xl lg:text-2xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
      >
        Choisir Essentiel
      </a>
    </div>

    <!-- Offre Professionnel (mise en avant) -->
    <div
      class="relative bg-gradient-to-b from-violet-800/90 to-violet-950/90 backdrop-blur-sm p-8 md:p-10 lg:p-12 xl:p-14 rounded-3xl border-2 border-pink-500/50 hover:border-pink-400/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 md:-mt-6 md:mb-6 lg:-mt-8 lg:mb-8"
     
     
    >
      <!-- Tag populaire -->
      <div class="absolute -top-4 left-8 lg:left-12">
        <span
          class="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm md:text-base lg:text-lg font-bold px-5 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-wider"
        >
          Populaire
        </span>
      </div>

      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 lg:mt-8 mb-4 lg:mb-6"
      >
        Professionnel
      </h2>

      <!-- Prix -->
      <div class="mb-8 lg:mb-10">
        <span
          class="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-lg md:text-xl lg:text-2xl font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full"
        >
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          Me consulter
        </span>
      </div>

      <ul
        class="space-y-4 lg:space-y-5 text-violet-100 text-lg md:text-xl lg:text-2xl mb-10 lg:mb-12"
      >
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Moodboard + Recherche</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>2 propositions de logo</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Logo principal</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>2 Déclinaisons (Format secondaire + monogramme)</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Palettes de couleurs</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Typographies</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Éléments graphiques uniques (Picto, Icônes)</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Design papeterie (cartes, flyers, en-tête)</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Charte graphique détaillée (10-15 pages)</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Mockup sur différents supports</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>3 allers-retours</span>
        </li>
      </ul>

      <a
        href="/contact"
        class="block w-full text-center bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold py-4 lg:py-5 px-8 rounded-2xl text-xl lg:text-2xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30"
      >
        Choisir Professionnel
      </a>
    </div>

    <!-- Offre Premium -->
    <div
      class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-8 md:p-10 lg:p-12 xl:p-14 rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
     
     
    >
      <!-- Tag -->
      <div class="absolute -top-4 left-8 lg:left-12">
        <span
          class="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm md:text-base lg:text-lg font-bold px-5 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-wider"
        >
          Premium
        </span>
      </div>

      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 lg:mt-8 mb-4 lg:mb-6"
      >
        Premium
      </h2>

      <!-- Prix -->
      <div class="mb-8 lg:mb-10">
        <span
          class="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-lg md:text-xl lg:text-2xl font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-full"
        >
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            ></path>
          </svg>
          Me consulter
        </span>
      </div>

      <ul
        class="space-y-4 lg:space-y-5 text-violet-100 text-lg md:text-xl lg:text-2xl mb-10 lg:mb-12"
      >
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-amber-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Tout le pack Professionnel</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Moodboard + Recherche</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>3 propositions de logo</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Charte graphique complète + Positionnement de la marque</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>1 Logo final</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span
            >Déclinaisons (horizontal, vertical, icône, couleur, noir et blanc)</span
          >
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Palettes de couleurs</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Typographie + règles d'utilisation</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Univers graphiques (motifs, picto, illustration)</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Règles d'utilisation</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Design papeterie</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Mockup sur différents supports, un motion du logo</span>
        </li>
        <li class="flex items-start gap-4">
          <svg
            class="w-6 h-6 lg:w-7 lg:h-7 text-pink-400 mt-1 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>4-5 allers-retours / fichiers sources + png, svg, pdf</span>
        </li>
      </ul>

      <a
        href="/contact"
        class="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold py-4 lg:py-5 px-8 rounded-2xl text-xl lg:text-2xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
      >
        Choisir Premium
      </a>
    </div>
  </div>

  <!-- Note -->
  <p
    class="text-center text-violet-200 mt-16 lg:mt-20 max-w-4xl mx-auto text-xl md:text-2xl lg:text-3xl leading-relaxed"
   
   
  >
    Chaque projet est unique. Contactez-moi pour un devis personnalisé adapté à
    vos besoins spécifiques. Exemple : un flyer seul simple ou recto-verso
  </p>

  <!-- FAQ -->
  <div class="w-full max-w-[900px] mx-auto mt-24 lg:mt-32">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12">Questions fréquentes</h2>

    <div class="space-y-4">
      {#each [
        { q: "Combien d'allers-retours sont inclus ?", r: "Selon le forfait : 2 allers-retours pour l'Essentiel, 3 pour le Studio, 4-5 pour le Premium. Chaque aller-retour correspond à une série de modifications sur une proposition. Au-delà, des ajustements mineurs restent possibles selon le projet." },
        { q: "Quels fichiers je reçois à la livraison ?", r: "Tous les fichiers sources (AI ou Figma), ainsi que des exports PNG, SVG et PDF prêts à l'emploi pour l'impression et le web. Vous pouvez les utiliser librement et les confier à n'importe quel autre prestataire." },
        { q: "Quel est le délai de réalisation ?", r: "Comptez 1 à 2 semaines pour un logo seul, 3 à 4 semaines pour une identité visuelle complète. Le délai dépend de la complexité du projet et de la réactivité sur les retours." },
        { q: "Je n'ai pas de brief, est-ce un problème ?", r: "Pas du tout. On commence toujours par un échange pour construire le brief ensemble. Je vous guide avec des questions simples pour cerner votre univers, vos valeurs et vos attentes." },
        { q: "Puis-je modifier mon logo moi-même après livraison ?", r: "Oui, vous recevez les fichiers sources. Je recommande cependant de me contacter pour toute modification importante afin de préserver la cohérence de votre identité visuelle." },
        { q: "Travaillez-vous avec des clients hors Caen ?", r: "Tout à fait. Je travaille à distance avec des clients partout en France. Les échanges se font par email, visio ou téléphone selon vos préférences." },
      ] as item, i}
        <details class="group bg-violet-900/40 border border-violet-700/50 rounded-2xl overflow-hidden" data-aos-delay={i * 50}>
          <summary class="flex items-center justify-between p-6 lg:p-8 cursor-pointer text-white font-semibold text-lg lg:text-xl list-none hover:bg-violet-800/30 transition-colors">
            {item.q}
            <svg class="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="px-6 pb-6 lg:px-8 lg:pb-8 text-violet-200 text-base lg:text-lg leading-relaxed">{item.r}</p>
        </details>
      {/each}
    </div>
  </div>
</main>
