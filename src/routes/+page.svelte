<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
  import ReactProjectGrid from "$lib/components/ReactProjectGrid.svelte"; // si tu veux conserver la grille actuelle
</script>

<Layout pageTitle="Accueil" bannerImage="/src/lib/assets/BANNIERE.png">
  <!-- Section d'accueil -->
  <section class="text-center py-20 animate-fade-in">
    <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
      Lola HERPIN - Graphiste & Illustratrice
    </h1>
    <p class="text-xl md:text-2xl text-gray-700">
      Design graphique, illustrations, et identités de marque.
    </p>
  </section>

  <!-- Portfolio grid -->
  <section id="portfolio" class="container mx-auto px-4 py-8">
    <ReactProjectGrid />
  </section>

  <!-- Bloc rouge -->
  <section class="mt-8 text-center px-4">
    <p class="text-md text-gray-700 italic mb-4">
      Créativité, impact et émotion au service de votre image.
    </p>
    <div class="bg-red-500 text-white p-4 rounded-lg shadow-lg">
      Si tu vois ce bloc rouge, Tailwind fonctionne 🎉
    </div>
  </section>

  <!-- Appel à l'action -->
  <section class="text-center mt-12">
    <h2 class="text-3xl md:text-4xl font-bold mb-6">
      Créons ensemble votre identité visuelle
    </h2>
    <div class="flex justify-center space-x-4">
      <a
        href="/contact"
        class="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition duration-300"
      >
        Me contacter
      </a>
      <a
        href="/portfolio"
        class="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition duration-300"
      >
        Portfolio
      </a>
      <a
        href="/services"
        class="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition duration-300"
      >
        Services
      </a>
    </div>
  </section>
</Layout>

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
