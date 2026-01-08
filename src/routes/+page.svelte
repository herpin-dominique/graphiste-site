<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";
  import "aos/dist/aos.css";

  onMount(() => {
    AOS.init({ duration: 800, once: true });

    const banner = document.getElementById("banniere");
    const onScroll = () => {
      if (banner) {
        const offset = window.scrollY;
        banner.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<!-- Bannière avec parallaxe -->
<section id="banniere" class="relative w-full h-[80vh] overflow-hidden">
  <img
    src="/BANNIERE.png"
    alt="Bannière"
    class="absolute inset-0 w-full h-full object-cover md:object-center"
  />
  <!-- Overlay violet transparent pour un look premium -->
  <div
    class="absolute inset-0 bg-gradient-to-b from-purple-900/60 to-purple-900/80 flex items-center justify-center"
  >
    <h1
      class="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg font-poppins text-center leading-tight"
    >
      “Faites décoller votre image”
    </h1>
  </div>
</section>

<!-- Portfolio -->
<section
  id="portfolio"
  class="w-full min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-800 text-white"
>
  <!-- Intro -->
  <div class="max-w-3xl text-center mb-12" data-aos="fade-up">
    <h2 class="text-4xl md:text-5xl font-bold mb-4">Mes projets</h2>
    <p class="text-lg text-purple-200">
      Une sélection de mes réalisations en design graphique, illustration et
      motion. Chaque projet reflète une approche créative, immersive et
      accessible.
    </p>
  </div>

  <!-- Grille responsive pleine largeur -->
  <div
    class="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full px-4"
  >
    <!-- Projet 1 -->
    <div
      class="relative overflow-hidden rounded-xl shadow-xl group"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <img
        src="/src/projets/Emballage parfumé et couleurs vibrantes.png"
        alt="Projet de branding"
        class="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 transition-all duration-300 group-hover:translate-y-[-10px]"
      >
        Identité visuelle – LOLA HERPIN
      </div>
    </div>

    <!-- Projet 2 -->
    <div
      class="relative overflow-hidden rounded-xl shadow-xl group"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <img
        src="/src/projets/inspicopilotlolachat.png"
        alt="Illustration éditoriale"
        class="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 transition-all duration-300 group-hover:translate-y-[-10px]"
      >
        Illustration – Mode & Travaux
      </div>
    </div>

    <!-- Projet 3 -->
    <div
      class="relative overflow-hidden rounded-xl shadow-xl group"
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <img
        src="/src/projets/Cookies.png"
        alt="Packaging design"
        class="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 transition-all duration-300 group-hover:translate-y-[-10px]"
      >
        Packaging – Penhaligons
      </div>
    </div>

    <!-- Projet 4 -->
    <div
      class="relative overflow-hidden rounded-xl shadow-xl group"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      <img
        src="/src/projets/Manuel velo.png"
        alt="Motion design"
        class="w-full h-72 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white text-sm p-3 transition-all duration-300 group-hover:translate-y-[-10px]"
      >
        Motion – Manuel Alvelo
      </div>
    </div>
  </div>
</section>

<!-- Appel à l'action -->
<section
  class="w-full min-h-screen flex flex-col justify-center px-8 py-32 bg-gradient-to-br from-violet-900 to-violet-800 text-white"
>
  <h2
    class="text-5xl md:text-6xl font-extrabold mb-16 text-center max-w-5xl mx-auto leading-tight"
  >
    Créons ensemble votre identité visuelle
  </h2>

  <!-- Boutons en grille pleine largeur -->
  <div
    class="grid gap-6 sm:grid-cols-1 md:grid-cols-3 w-full max-w-6xl mx-auto"
  >
    <!-- Bouton 1 -->
    <a
      href="/contact"
      class="bg-gradient-to-r from-violet-600 to-violet-500 text-white font-semibold px-8 py-6 rounded-xl text-center shadow-lg hover:from-violet-700 hover:to-violet-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-300"
      aria-label="Me contacter"
    >
      📩 Me contacter
    </a>

    <!-- Bouton 2 -->
    <a
      href="/portfolio"
      class="bg-violet-950 border border-violet-700 text-violet-200 font-semibold px-8 py-6 rounded-xl text-center shadow-lg hover:bg-violet-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-300"
      aria-label="Voir le portfolio"
    >
      🎨 Portfolio
    </a>

    <!-- Bouton 3 -->
    <a
      href="/services"
      class="bg-white text-violet-700 font-semibold px-8 py-6 rounded-xl text-center shadow-lg hover:bg-violet-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-300"
      aria-label="Découvrir les services"
    >
      💡 Services
    </a>
  </div>
</section>
