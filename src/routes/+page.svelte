<script lang="ts">
  import bannière from "$lib/assets/BANNIERE.png";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ReactProjectGrid from "$lib/components/ReactProjectGrid.svelte";
</script>

<div class="bg-gray-900 text-white min-h-screen">
  <Header />

  <main>
    <section class="text-center py-20 animate-fade-in">
      <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
        Le portfolio de Lola HERPIN
      </h1>
      <p class="text-xl md:text-2xl text-gray-400">
        Design graphique, illustrations, et identités de marque.
      </p>
    </section>

    <section id="portfolio" class="container mx-auto px-4 py-8">
      <ReactProjectGrid />
    </section>

    <section class="mt-8 text-center px-4">
      <p class="text-md text-gray-500 italic mb-4">
        Créativité, impact et émotion au service de votre image.
      </p>
      <div class="bg-red-500 text-white p-4 rounded-lg shadow-lg">
        Si tu vois ce bloc rouge, Tailwind fonctionne 🎉
      </div>
    </section>
  </main>

  <section
    class="w-full h-[300px] md:h-[400px] bg-cover bg-center relative mt-12"
    style={`background-image: url('${bannière}')`}
  >
    <div
      class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4"
    >
      <h2 class="text-white text-3xl md:text-4xl font-bold mb-4">
        Créons ensemble votre identité visuelle
      </h2>
      <a
        href="/contact"
        class="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition duration-300"
      >
        Me contacter
      </a>
    </div>
  </section>

  <Footer />
</div>

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
