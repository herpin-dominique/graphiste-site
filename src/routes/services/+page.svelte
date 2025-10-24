<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
</script>

<svelte:head>
  <title>Services - Graphiste</title>
</svelte:head>

<main
  class="min-h-screen bg-gradient-to-br from-violet-900 to-violet-700 px-6 py-12 text-white"
>
  <h2
    class="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-violet-100 animate-fade-in"
  >
    Mes services
  </h2>

  <div class="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto animate-fade-in">
    <!-- Carte 1 -->
    <div
      class="bg-violet-950 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
    >
      <h3 class="text-xl font-semibold text-violet-100 mb-2">
        Identité visuelle
      </h3>
      <p class="text-violet-300">
        Création de logos, chartes graphiques et déclinaisons visuelles adaptées
        à vos besoins.
      </p>
    </div>

    <!-- Carte 2 -->
    <div
      class="bg-violet-950 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
    >
      <h3 class="text-xl font-semibold text-violet-100 mb-2">
        Supports de communication
      </h3>
      <p class="text-violet-300">
        Affiches, brochures, flyers, cartes de visite, présentations
        professionnelles…
      </p>
    </div>

    <!-- Carte 3 -->
    <div
      class="bg-violet-950 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
    >
      <h3 class="text-xl font-semibold text-violet-100 mb-2">Web & digital</h3>
      <p class="text-violet-300">
        Bannières, visuels pour réseaux sociaux, newsletters.
      </p>
    </div>

    <!-- Carte 4 -->
    <div
      class="bg-violet-950 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
    >
      <h3 class="text-xl font-semibold text-violet-100 mb-2">Illustration</h3>
      <p class="text-violet-300">
        Illustrations sur mesure pour vos projets éditoriaux ou numériques.
      </p>
    </div>
  </div>
</main>

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
