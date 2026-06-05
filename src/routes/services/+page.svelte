<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";
  onMount(() => { AOS.init({ duration: 600, once: true }); });
</script>

<svelte:head>
  <title>Services graphisme & motion design à Caen | Herpin Creative Studio</title>
  <meta name="description" content="Création de logos, identité visuelle, motion design, affiches, flyers et supports de communication. Graphiste freelance à Caen pour entreprises et associations en Normandie." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Herpin Creative Studio" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:title" content="Services - Graphiste & Motion Designer à Caen" />
  <meta property="og:description" content="Identité visuelle, motion design, supports print & digital. Votre graphiste freelance à Caen, Normandie." />
  <meta property="og:url" content="https://www.herpin-creative-studio.fr/services" />
  <meta property="og:image" content="https://www.herpin-creative-studio.fr/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Services graphiste Caen - Herpin Creative Studio" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://www.herpin-creative-studio.fr/og-image.png" />
</svelte:head>

<main
  class="relative z-0 min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900 px-4 md:px-6 lg:px-8 xl:px-12 py-16 lg:py-20 text-white"
>
  <!-- Header -->
  <div class="text-center mb-16 lg:mb-20">
    <h1
      class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 lg:mb-8"
    >
      Mes services
    </h1>
    <p
      class="text-violet-100 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed"
    >
      Graphiste freelance à Caen, je propose des prestations en design graphique
      et motion design pour les entreprises, commerces et associations en Normandie.
    </p>
  </div>

  <!-- Grille responsive -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-[1800px] mx-auto"
   
   
  >
    <!-- Carte 1 -->
    <div
      class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-10 md:p-12 lg:p-16 rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
     
     
    >
      <div
        class="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl flex items-center justify-center mb-8"
      >
        <svg
          class="w-10 h-10 lg:w-12 lg:h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          ></path>
        </svg>
      </div>
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
      >
        identité visuelle
      </h2>
      <p
        class="text-lg md:text-xl lg:text-2xl text-violet-100 text-center max-w-xl leading-relaxed"
      >
        Création de logo professionnel, charte graphique et déclinaisons
        visuelles pour affirmer l'image de votre entreprise à Caen et en Normandie.
      </p>
    </div>

    <!-- Carte 2 -->
    <div
      class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-10 md:p-12 lg:p-16 rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
     
     
    >
      <div
        class="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-8"
      >
        <svg
          class="w-10 h-10 lg:w-12 lg:h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          ></path>
        </svg>
      </div>
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
      >
        Supports de communication
      </h2>
      <p
        class="text-lg md:text-xl lg:text-2xl text-violet-100 text-center max-w-xl leading-relaxed"
      >
        Affiches publicitaires, brochures, flyers, cartes de visite et
        présentations pour booster la visibilité de votre activité.
      </p>
    </div>

    <!-- Carte 3 -->
    <div
      class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-10 md:p-12 lg:p-16 rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
     
     
    >
      <div
        class="w-20 h-20 lg:w-24 lg:h-24 bg-violet-600 rounded-2xl flex items-center justify-center mb-8"
      >
        <svg
          class="w-10 h-10 lg:w-12 lg:h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
      >
        Web & digital
      </h2>
      <p
        class="text-lg md:text-xl lg:text-2xl text-violet-100 text-center max-w-xl leading-relaxed"
      >
        Bannières web, visuels pour Instagram et réseaux sociaux,
        newsletters et templates pour votre communication digitale.
      </p>
    </div>

    <!-- Carte 4 -->
    <div
      class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-10 md:p-12 lg:p-16 rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
     
     
    >
      <div
        class="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-8"
      >
        <svg
          class="w-10 h-10 lg:w-12 lg:h-12 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          ></path>
        </svg>
      </div>
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center"
      >
        Illustration
      </h2>
      <p
        class="text-lg md:text-xl lg:text-2xl text-violet-100 text-center max-w-xl leading-relaxed"
      >
        Illustrations sur mesure et personnalisées pour l'édition,
        le packaging ou vos projets créatifs.
      </p>
    </div>
  </div>

  <!-- CTA -->
  <div
    class="text-center mt-16 lg:mt-20"
   
   
  >
    <p
      class="text-violet-100 text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed"
    >
      Un projet de logo, d'identité visuelle ou de motion design ? Contactez votre graphiste à Caen !
    </p>
    <a
      href="/contact"
      class="inline-flex items-center gap-3 px-10 py-5 lg:px-12 lg:py-6 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold text-xl lg:text-2xl rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
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
      Me contacter
    </a>
  </div>
</main>
