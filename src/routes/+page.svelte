<script lang="ts">
</script>

<!-- Bannière -->
<img
  src="/BANNIERE.png"
  alt="Bannière Lola Herpin"
  class="w-full object-cover max-h-96"
/>
<!--
<section class="relative w-full min-h-screen overflow-hidden animate-fade-in">
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source
      src="src/videos/Motion - manuel d'utilisation alvelo.mp4"
      type="video/mp4"
    />
    Votre navigateur ne supporte pas la lecture vidéo.
  </video>

  <div class="absolute top-0 left-0 w-full h-full bg-black/40 z-0"></div>

  <div
    class="relative z-10 flex items-center justify-center h-full text-white text-center px-6"
  >
    <div class="max-w-3xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
        Lola HERPIN - Graphiste & Illustratrice
      </h1>
      <p class="text-xl md:text-2xl">
        Design graphique, illustrations, et identités de marque.
      </p>
    </div>
  </div>
</section>
-->

<!-- Portfolio -->
<section
  id="portfolio"
  class="w-full min-h-screen flex flex-col items-center justify-center px-4"
>
  <h2 class="text-3xl font-bold mb-8 text-center">Mes projets</h2>

  <div
    class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl"
  >
    <div class="relative overflow-hidden rounded-lg shadow-lg group">
      <img
        src="/src/projets/Emballage parfumé et couleurs vibrantes.png"
        alt="Projet de branding"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm p-2"
      >
        Identité visuelle – LOLA HERPIN
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg shadow-lg group">
      <img
        src="/src/projets/inspicopilotlolachat.png"
        alt="Illustration éditoriale"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm p-2"
      >
        Illustration – Mode & Travaux
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg shadow-lg group">
      <img
        src="/src/projets/Cookies.png"
        alt="Packaging design"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm p-2"
      >
        Packaging – Penhaligons
      </div>
    </div>

    <div class="relative overflow-hidden rounded-lg shadow-lg group">
      <img
        src="/src/projets/Manuel velo.png"
        alt="Motion design"
        class="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div
        class="absolute bottom-0 left-0 w-full bg-black/60 text-white text-sm p-2"
      >
        Motion – Manuel Alvelo
      </div>
    </div>
  </div>
</section>

<!-- Appel à l'action -->
<section
  class="w-full min-h-screen flex flex-col items-center justify-center px-4"
>
  <h2 class="text-5xl md:text-5xl font-bold mb-6 text-center">
    Créons ensemble votre identité visuelle
  </h2>
  <div class="flex flex-wrap justify-center gap-4">
    <a
      href="/contact"
      class="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition"
      >Me contacter</a
    >
    <a
      href="/portfolio"
      class="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition"
      >Portfolio</a
    >
    <a
      href="/services"
      class="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition"
      >Services</a
    >
  </div>
</section>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }
</style>
