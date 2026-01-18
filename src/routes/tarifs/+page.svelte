<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";

  onMount(() => {
    AOS.init({ duration: 600, once: true });
  });
</script>

<svelte:head>
  <title>Tarifs - Herpin Creative Studio</title>
</svelte:head>

<main class="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900 px-4 md:px-6 py-12">
  <!-- Header -->
  <div class="text-center mb-12" data-aos="fade-up">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
      Mes forfaits
    </h1>
    <p class="text-violet-200 text-lg max-w-2xl mx-auto">
      Des solutions adaptees a vos besoins, de l'essentiel au sur-mesure
    </p>
  </div>

  <!-- Cards -->
  <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8">

    <!-- Offre Essentiel -->
    <div
      class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <!-- Tag -->
      <div class="absolute -top-3 left-6">
        <span class="bg-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Starter
        </span>
      </div>

      <h2 class="text-2xl font-bold text-white mt-4 mb-2">Essentiel</h2>

      <!-- Prix -->
      <div class="mb-6">
        <span class="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          Me consulter
        </span>
      </div>

      <ul class="space-y-3 text-violet-200 mb-8">
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Design de 3 logos (3 concepts)</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Guidelines de marque basiques</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>2 aller-retours de modification</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Livraison des fichiers finaux</span>
        </li>
      </ul>

      <a
        href="/contact"
        class="block w-full text-center bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
      >
        Choisir Essentiel
      </a>
    </div>

    <!-- Offre Professionnel (mise en avant) -->
    <div
      class="relative bg-gradient-to-b from-violet-800/90 to-violet-950/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-pink-500/50 hover:border-pink-400/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20 md:-mt-4 md:mb-4"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <!-- Tag populaire -->
      <div class="absolute -top-3 left-6">
        <span class="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Populaire
        </span>
      </div>

      <h2 class="text-2xl font-bold text-white mt-4 mb-2">Professionnel</h2>

      <!-- Prix -->
      <div class="mb-6">
        <span class="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          Me consulter
        </span>
      </div>

      <ul class="space-y-3 text-violet-200 mb-8">
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Identite de marque complete</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Logo + 5 variations</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Charte graphique complete</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Design papeterie (cartes, flyers, en-tete)</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>5 revisions incluses</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Deck de presentation de marque</span>
        </li>
      </ul>

      <a
        href="/contact"
        class="block w-full text-center bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30"
      >
        Choisir Professionnel
      </a>
    </div>

    <!-- Offre Premium -->
    <div
      class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <!-- Tag -->
      <div class="absolute -top-3 left-6">
        <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Premium
        </span>
      </div>

      <h2 class="text-2xl font-bold text-white mt-4 mb-2">Premium</h2>

      <!-- Prix -->
      <div class="mb-6">
        <span class="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
          </svg>
          Me consulter
        </span>
      </div>

      <ul class="space-y-3 text-violet-200 mb-8 text-sm">
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Tout le pack Professionnel</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Concept de design Packaging</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Design de supports marketing</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Maquette de site web</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Direction photo de marque</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Support de marque 3 mois</span>
        </li>
        <li class="flex items-start gap-3">
          <svg class="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
          <span>Supports print + digital</span>
        </li>
      </ul>

      <a
        href="/contact"
        class="block w-full text-center bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
      >
        Choisir Premium
      </a>
    </div>
  </div>

  <!-- Note -->
  <p class="text-center text-violet-300 mt-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
    Chaque projet est unique. Contactez-moi pour un devis personnalise adapte a vos besoins specifiques.
  </p>
</main>
