<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";

  onMount(() => {
    AOS.init({ duration: 800, once: true });
  });
</script>

<!-- Hero Section -->
<section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Image de fond -->
  <img
    src="/BANNIERE.png"
    alt="Bannière"
    class="absolute inset-0 w-full h-full object-cover object-[60%_20%] md:object-center"
  />
  <!-- Overlay pour la lisibilité -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

  <!-- Formes décoratives animées -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div class="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
  </div>

  <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
    <p class="text-white text-lg md:text-xl mb-4 tracking-widest uppercase font-semibold" data-aos="fade-down" style="text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
      Herpin Creative Studio
    </p>
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight" data-aos="fade-up" style="text-shadow: 0 4px 20px rgba(0,0,0,0.9);">
      Faites <span class="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-pink-300 to-violet-300 drop-shadow-lg">décoller</span> votre image
    </h1>
    <p class="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto font-medium" data-aos="fade-up" data-aos-delay="100" style="text-shadow: 0 2px 10px rgba(0,0,0,0.8);">
      Design graphique & Motion design pour les entreprises qui veulent se démarquer
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
      <a
        href="/portfolio"
        class="px-8 py-4 bg-white text-violet-900 font-bold rounded-full hover:bg-violet-100 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        Voir mes projets
      </a>
      <a
        href="/contact"
        class="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-violet-900 transition-all duration-300 hover:scale-105"
      >
        Me contacter
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <svg class="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</section>

<!-- Section Qui suis-je -->
<section class="w-full py-24 px-6 bg-white">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Photo/Illustration -->
      <div class="relative" data-aos="fade-right">
        <div class="aspect-square rounded-3xl bg-gradient-to-br from-violet-100 to-pink-100 overflow-hidden shadow-2xl">
          <img
            src="/projets/Emballage parfumé et couleurs vibrantes.png"
            alt="Lola Herpin"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-violet-500 to-pink-500 rounded-2xl -z-10"></div>
      </div>

      <!-- Texte -->
      <div data-aos="fade-left">
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Hello, moi c'est <span class="text-violet-600">Lola</span> !
        </h2>
        <div class="space-y-4 text-gray-600 text-lg leading-relaxed">
          <p>
            En tant que chef d'entreprise, ma principale motivation est de mettre mes compétences en <strong class="text-violet-600">graphisme</strong> et <strong class="text-violet-600">motion design</strong> au service des entreprises qui souhaitent se démarquer visuellement.
          </p>
          <p>
            J'ai fondé mon propre studio pour apporter des <strong>solutions créatives sur mesure</strong> à mes clients, avec liberté et passion.
          </p>
        </div>

        <!-- Services proposés -->
        <div class="mt-8 grid grid-cols-2 gap-4">
          <div class="p-4 bg-violet-50 rounded-xl">
            <div class="text-2xl mb-2">🎨</div>
            <h3 class="font-semibold text-gray-900">Identité visuelle</h3>
            <p class="text-sm text-gray-600">Print & Digital</p>
          </div>
          <div class="p-4 bg-pink-50 rounded-xl">
            <div class="text-2xl mb-2">🎬</div>
            <h3 class="font-semibold text-gray-900">Motion Design</h3>
            <p class="text-sm text-gray-600">Réseaux sociaux</p>
          </div>
        </div>

        <a href="/services" class="inline-flex items-center gap-2 mt-8 text-violet-600 font-semibold hover:text-violet-800 transition-colors">
          Découvrir tous mes services
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Section Projets -->
<section class="w-full py-24 px-6 bg-gray-50">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16" data-aos="fade-up">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mes projets</h2>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto">
        Une sélection de mes réalisations en design graphique, illustration et motion design.
      </p>
    </div>

    <!-- Grille de projets -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Projet 1 -->
      <div
        class="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="aspect-[4/5] overflow-hidden">
          <img
            src="/projets/Emballage parfumé et couleurs vibrantes.png"
            alt="Projet de branding"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div class="text-white">
            <h3 class="font-bold text-lg">Identité visuelle</h3>
            <p class="text-violet-200 text-sm">Branding & Packaging</p>
          </div>
        </div>
      </div>

      <!-- Projet 2 -->
      <div
        class="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="aspect-[4/5] overflow-hidden">
          <img
            src="/projets/inspicopilotlolachat.png"
            alt="Illustration éditoriale"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div class="text-white">
            <h3 class="font-bold text-lg">Illustration</h3>
            <p class="text-pink-200 text-sm">Mode & Travaux</p>
          </div>
        </div>
      </div>

      <!-- Projet 3 -->
      <div
        class="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="aspect-[4/5] overflow-hidden">
          <img
            src="/projets/Cookies.png"
            alt="Packaging design"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div class="text-white">
            <h3 class="font-bold text-lg">Packaging</h3>
            <p class="text-indigo-200 text-sm">Design produit</p>
          </div>
        </div>
      </div>

      <!-- Projet 4 -->
      <div
        class="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div class="aspect-[4/5] overflow-hidden">
          <img
            src="/projets/Manuel velo.png"
            alt="Motion design"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div class="text-white">
            <h3 class="font-bold text-lg">Motion Design</h3>
            <p class="text-violet-200 text-sm">Animation & Vidéo</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bouton voir plus -->
    <div class="text-center mt-12" data-aos="fade-up">
      <a
        href="/portfolio"
        class="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition-all duration-300 hover:scale-105 shadow-lg"
      >
        Voir tout le portfolio
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Section CTA -->
<section class="w-full py-32 px-6 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 relative overflow-hidden">
  <!-- Formes décoratives -->
  <div class="absolute inset-0">
    <div class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto text-center">
    <h2 class="text-4xl md:text-6xl font-extrabold text-white mb-6" data-aos="fade-up">
      Prêt à créer ensemble ?
    </h2>
    <p class="text-xl text-white/80 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
      Discutons de votre projet et donnons vie à vos idées avec une identité visuelle unique.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
      <a
        href="/contact"
        class="px-10 py-5 bg-white text-violet-700 font-bold text-lg rounded-full hover:bg-violet-50 transition-all duration-300 hover:scale-105 shadow-xl"
      >
        Démarrer un projet
      </a>
      <a
        href="/tarifs"
        class="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-violet-700 transition-all duration-300 hover:scale-105"
      >
        Voir les forfaits
      </a>
    </div>
  </div>
</section>
