<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";
  import { blogPosts } from "$lib/data/blog-posts";

  const recentPosts = blogPosts.slice(0, 3);

  onMount(() => {
    AOS.init({ duration: 800, once: true });
  });
</script>

<svelte:head>
  <title>Graphiste Caen & Motion Designer Normandie | Herpin Creative Studio</title>
  <meta name="description" content="Besoin de booster votre image de marque ? Herpin Creative Studio accompagne les entreprises à Caen et en Normandie dans leur communication visuelle : logo, identité visuelle et motion design." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Herpin Creative Studio" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:title" content="Herpin Creative Studio - Graphiste & Motion Designer à Caen" />
  <meta property="og:description" content="Création de logos, identité visuelle, motion design et supports de communication à Caen, Normandie." />
  <meta property="og:url" content="https://herpin-creative-studio.fr" />
  <meta property="og:image" content="https://herpin-creative-studio.fr/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Herpin Creative Studio - Graphiste & Motion Designer à Caen" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Herpin Creative Studio - Graphiste & Motion Designer à Caen" />
  <meta name="twitter:description" content="Création de logos, identité visuelle, motion design et supports de communication à Caen, Normandie." />
  <meta name="twitter:image" content="https://herpin-creative-studio.fr/og-image.png" />
  {@html `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Herpin Creative Studio",
    "description": "Graphiste freelance et motion designer à Caen, Normandie. Création de logos, identité visuelle, supports de communication et motion design.",
    "url": "https://herpin-creative-studio.fr",
    "logo": "https://herpin-creative-studio.fr/LOGO HERPIN CREATIVE STUDIOb_4.svg",
    "image": "https://herpin-creative-studio.fr/BANNIERE.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "17 rue de la Montagne",
      "addressLocality": "Giberville",
      "postalCode": "14730",
      "addressRegion": "Normandie",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.1787,
      "longitude": -0.3087
    },
    "areaServed": [
      { "@type": "City", "name": "Caen" },
      { "@type": "AdministrativeArea", "name": "Normandie" }
    ],
    "founder": {
      "@type": "Person",
      "name": "Lola Herpin",
      "jobTitle": "Graphiste & Motion Designer"
    },
    "priceRange": "€€",
    "knowsAbout": ["Graphic Design", "Motion Design", "Logo Design", "Visual Identity", "Print Design"],
    "sameAs": [
      "https://instagram.com/herpincreativestudio",
      "https://www.linkedin.com/in/lola-herpin-design-graphique",
      "https://www.behance.net/lolaherpin"
    ]
  })}</script>`}
</svelte:head>

<!-- Hero Section -->
<section
  class="relative z-0 w-full min-h-screen flex items-center justify-center overflow-hidden"
>
  <!-- Image de fond -->
  <img
    src="/BANNIERE.png"
    alt="Bannière"
    class="absolute inset-0 w-full h-full object-cover object-[60%_20%] md:object-center"
  />
  <!-- Overlay pour la lisibilité -->
  <div
    class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"
  ></div>

  <!-- Formes décoratives animées -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
      style="animation-delay: 1s;"
    ></div>
  </div>

  <div class="relative z-10 text-center px-6 max-w-6xl mx-auto">
    <p
      class="text-white text-xl md:text-2xl lg:text-3xl mb-6 tracking-widest uppercase font-semibold"
      data-aos="fade-down"
      style="text-shadow: 0 2px 10px rgba(0,0,0,0.8);"
    >
      Herpin Creative Studio
    </p>
    <h1
      class="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-white mb-8 leading-tight"
      data-aos="fade-up"
      style="text-shadow: 0 4px 20px rgba(0,0,0,0.9);"
    >
      Faites <span
        class="relative inline-block text-white transform -rotate-6 hover:-rotate-3 hover:scale-105 transition-transform duration-300"
        style="text-shadow: 0 4px 20px rgba(0,0,0,0.9);"
        >décoller
        <span
          class="absolute -top-4 -right-4 lg:-top-8 lg:-right-6 text-3xl lg:text-5xl animate-bounce"
          style="transform: rotate(-30deg);">🚀</span
        >
      </span> votre image
    </h1>
    <p
      class="text-2xl md:text-3xl lg:text-4xl text-white mb-12 max-w-4xl mx-auto font-medium leading-relaxed"
      data-aos="fade-up"
      data-aos-delay="100"
      style="text-shadow: 0 2px 10px rgba(0,0,0,0.8);"
    >
      Graphiste freelance & motion designer à Caen — logos, identité visuelle et
      animations pour les entreprises en Normandie
    </p>
    <div
      class="flex flex-col sm:flex-row gap-6 justify-center"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <a
        href="/portfolio"
        class="px-10 py-5 lg:px-12 lg:py-6 bg-white text-violet-900 font-bold text-xl lg:text-2xl rounded-full hover:bg-violet-100 transition-all duration-300 hover:scale-105 shadow-xl"
      >
        Voir mes projets
      </a>
      <a
        href="/contact"
        class="px-10 py-5 lg:px-12 lg:py-6 border-2 border-white text-white font-bold text-xl lg:text-2xl rounded-full hover:bg-white hover:text-violet-900 transition-all duration-300 hover:scale-105"
      >
        Me contacter
      </a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
    <svg
      class="w-8 h-8 text-white/60"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      ></path>
    </svg>
  </div>
</section>

<!-- Section Qui suis-je -->
<section
  class="relative z-0 w-full py-24 lg:py-32 px-6 md:px-8 lg:px-12 xl:px-16 bg-white"
>
  <div class="w-full max-w-[1800px] mx-auto">
    <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Photo/Illustration -->
      <div class="relative" data-aos="fade-right">
        <div
          class="aspect-square rounded-3xl bg-gradient-to-br from-violet-100 to-pink-100 overflow-hidden shadow-2xl"
        >
          <img
            src="/projets/lola-herpin-creative-studio.png"
            alt="Lola Herpin"
            class="w-full h-full object-cover"
          />
        </div>
        <div
          class="absolute -bottom-6 -right-6 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-violet-500 to-pink-500 rounded-2xl -z-10"
        ></div>
      </div>

      <!-- Texte -->
      <div data-aos="fade-left">
        <h2
          class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8"
        >
          Hello, moi c'est <span class="text-violet-600">Lola</span> !
        </h2>
        <div
          class="space-y-6 text-gray-600 text-xl md:text-2xl lg:text-2xl leading-relaxed"
        >
          <p>
            <strong class="text-violet-600">Graphiste freelance basée à Caen</strong>, je crée des identités visuelles percutantes pour les entreprises, commerces et associations en <strong class="text-violet-600">Normandie</strong>. Du logo à la charte graphique complète, chaque projet est pensé pour refléter votre image.
          </p>
          <p>
            Spécialisée en <strong class="text-violet-600">motion design</strong> et en création de supports de communication print & digital, j'accompagne mes clients de la conception à la livraison pour des visuels qui marquent les esprits.
          </p>
        </div>

        <!-- Services proposés -->
        <div class="mt-10 grid grid-cols-2 gap-6">
          <div class="p-6 lg:p-8 bg-violet-50 rounded-2xl">
            <div class="text-4xl mb-4">🎨</div>
            <h3 class="font-bold text-xl lg:text-2xl text-gray-900 mb-2">
              Identité visuelle
            </h3>
            <p class="text-lg lg:text-xl text-gray-600">Print & Digital</p>
          </div>
          <div class="p-6 lg:p-8 bg-pink-50 rounded-2xl">
            <div class="text-4xl mb-4">🎬</div>
            <h3 class="font-bold text-xl lg:text-2xl text-gray-900 mb-2">
              Motion Design
            </h3>
            <p class="text-lg lg:text-xl text-gray-600">Réseaux sociaux</p>
          </div>
        </div>

        <a
          href="/services"
          class="inline-flex items-center gap-3 mt-10 text-violet-600 font-bold text-xl lg:text-2xl hover:text-violet-800 transition-colors"
        >
          Découvrir tous mes services
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Section Projets -->
<section
  class="relative z-0 w-full py-24 lg:py-32 px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-50"
>
  <div class="w-full max-w-[1800px] mx-auto">
    <div class="text-center mb-16 lg:mb-20" data-aos="fade-up">
      <h2
        class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6"
      >
        Mes projets
      </h2>
      <p
        class="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
      >
        Logos, chartes graphiques, affiches, motion design — découvrez les projets
        réalisés pour des entreprises en Normandie et au-delà.
      </p>
    </div>

    <!-- Grille de projets -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <!-- Projet 1 -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-lg bg-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="aspect-[4/5] overflow-hidden">
          <img
            src="/projets/spike_5illustration.png"
            alt="Projet de branding"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8"
        >
          <div class="text-white">
            <h3 class="font-bold text-2xl lg:text-3xl mb-2">
              Identité visuelle
            </h3>
            <p class="text-violet-200 text-lg lg:text-xl">
              Branding & Packaging
            </p>
          </div>
        </div>
      </div>

      <!-- Projet 2 -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-lg bg-white"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="aspect-[4/5] overflow-hidden">
          <img
            src="/projets/Affiche-luc-et-lea.png"
            alt="Illustration éditoriale"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8"
        >
          <div class="text-white">
            <h3 class="font-bold text-2xl lg:text-3xl mb-2">AFFICHE</h3>
            <p class="text-pink-200 text-lg lg:text-xl">PUB</p>
          </div>
        </div>
      </div>

      <!-- Projet 3 -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-lg bg-white"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div class="aspect-[4/5] overflow-hidden">
          <img
            src="/projets/canadrance.jpg"
            alt="Packaging design"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8"
        >
          <div class="text-white">
            <h3 class="font-bold text-2xl lg:text-3xl mb-2">
              Cartes de visites
            </h3>
            <p class="text-indigo-200 text-lg lg:text-xl">Identité visuelle</p>
          </div>
        </div>
      </div>

      <!-- Projet 4 -->
      <div
        class="group relative overflow-hidden rounded-3xl shadow-lg bg-white"
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
        <div
          class="absolute inset-0 bg-gradient-to-t from-violet-900/90 via-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8"
        >
          <div class="text-white">
            <h3 class="font-bold text-2xl lg:text-3xl mb-2">Motion Design</h3>
            <p class="text-violet-200 text-lg lg:text-xl">Animation & Vidéo</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bouton voir plus -->
    <div class="text-center mt-16" data-aos="fade-up">
      <a
        href="/portfolio"
        class="inline-flex items-center gap-3 px-10 py-5 lg:px-12 lg:py-6 bg-violet-600 text-white font-bold text-xl lg:text-2xl rounded-full hover:bg-violet-700 transition-all duration-300 hover:scale-105 shadow-xl"
      >
        Voir tout le portfolio
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Section Blog -->
<section class="relative z-0 w-full py-24 lg:py-32 px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
  <div class="w-full max-w-[1800px] mx-auto">
    <div class="text-center mb-16" data-aos="fade-up">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
        Derniers articles
      </h2>
      <p class="text-xl md:text-2xl text-gray-600">
        Conseils, tendances et inspirations design
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each recentPosts as post, i}
        <a
          href="/blog/{post.slug}"
          class="group block bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          data-aos="fade-up"
          data-aos-delay={i * 100}
        >
          <div class="h-3 bg-gradient-to-r {post.categoryColor}"></div>
          <div class="p-8">
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r {post.categoryColor} text-white">
                {post.category}
              </span>
              <span class="text-sm text-gray-400">{post.readingTime} min</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-600 transition-colors leading-snug">
              {post.title}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <div class="mt-6 flex items-center gap-2 text-violet-600 font-semibold text-sm group-hover:gap-3 transition-all">
              Lire l'article
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <div class="text-center mt-12" data-aos="fade-up">
      <a
        href="/blog"
        class="inline-flex items-center gap-3 px-10 py-5 border-2 border-violet-600 text-violet-600 font-bold text-lg rounded-full hover:bg-violet-600 hover:text-white transition-all duration-300 hover:scale-105"
      >
        Voir tous les articles
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Section CTA -->
<section
  class="relative z-0 w-full py-32 lg:py-40 px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 overflow-hidden"
>
  <!-- Formes décoratives -->
  <div class="absolute inset-0">
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
    ></div>
  </div>

  <div class="relative z-10 w-full max-w-[1400px] mx-auto text-center">
    <h2
      class="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-8"
      data-aos="fade-up"
    >
      Prêt à créer ensemble ?
    </h2>
    <p
      class="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Besoin d'un logo, d'une identité visuelle ou d'une vidéo motion design ?
      Votre graphiste à Caen est là pour donner vie à vos idées.
    </p>
    <div
      class="flex flex-col sm:flex-row gap-6 justify-center"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <a
        href="/contact"
        class="px-12 py-6 lg:px-14 lg:py-7 bg-white text-violet-700 font-bold text-xl lg:text-2xl rounded-full hover:bg-violet-50 transition-all duration-300 hover:scale-105 shadow-xl"
      >
        Démarrer un projet
      </a>
      <a
        href="/tarifs"
        class="px-12 py-6 lg:px-14 lg:py-7 border-2 border-white text-white font-bold text-xl lg:text-2xl rounded-full hover:bg-white hover:text-violet-700 transition-all duration-300 hover:scale-105"
      >
        Voir les forfaits
      </a>
    </div>
  </div>
</section>
