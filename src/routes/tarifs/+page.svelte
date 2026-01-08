<script lang="ts">
</script>

<svelte:head>
  <title>Tarifs - Graphiste</title>
</svelte:head>

<a
  href="/"
  class="inline-block mt-24 mb-6 bg-white text-violet-600 font-semibold px-6 py-3 rounded hover:bg-violet-100 transition duration-300"
>
  ← Retour à l'accueil
</a>

<main
  class="min-h-screen bg-gradient-to-br from-violet-900 to-violet-700 px-6 py-12 text-white"
>
  <section
    class="max-w-4xl mx-auto bg-violet-950 p-10 rounded-2xl shadow-2xl animate-fade-in"
  >
    <h1
      class="text-4xl font-display font-bold text-center text-violet-100 mb-10"
    >
      Mes Tarifs
    </h1>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Offre Essentiel -->
      <div
        class="bg-violet-900 p-6 rounded-xl shadow-lg border border-violet-700 hover:scale-[1.03] transition duration-300"
      >
        <h2 class="text-2xl font-bold mb-3 text-violet-200">Essentiel</h2>
        <p class="text-4xl font-extrabold mb-4">800 €</p>
        <ul class="space-y-2 text-violet-300 mb-6">
          <li>✔ design de 3 logo (3 concepts)</li>
          <li>✔ Guidelines de marque basiques</li>
          <li>✔ 2 aller-retour de modification</li>
          <li>✔ Livraison des fichiers finaux</li>
        </ul>
        <a
          href="/contact"
          class="block text-center bg-violet-600 py-3 rounded-lg font-semibold hover:bg-violet-500 transition"
        >
          Choisir Essentiel
        </a>
      </div>

      <!-- Offre Professionnel -->
      <div
        class="bg-violet-900 p-6 rounded-xl shadow-lg border border-violet-700 hover:scale-[1.03] transition duration-300"
      >
        <h2 class="text-2xl font-bold mb-3 text-violet-200">Professionnel</h2>
        <p class="text-4xl font-extrabold mb-4">1500 €</p>
        <ul class="space-y-2 text-violet-300 mb-6">
          <li>✔Identité de marque complète</li>
          <li>✔ Logo + 5 variations</li>
          <li>✔ Charte graphique complète</li>
          <li>✔ Design papeterie (cartes de visite, flyers,en-tête)</li>
          <li>✔ 5 révisions incluses</li>
          <li>✔ Deck de presentation de marques</li>
        </ul>
        <a
          href="/contact"
          class="block text-center bg-violet-600 py-3 rounded-lg font-semibold hover:bg-violet-500 transition"
        >
          Choisir Professionnel
        </a>
      </div>

      <!-- Offre Premium -->
      <div
        class="bg-violet-900 p-6 rounded-xl shadow-lg border border-violet-700 hover:scale-[1.03] transition duration-300"
      >
        <h2 class="text-2xl font-bold mb-3 text-violet-200">Premium</h2>
        <p class="text-4xl font-extrabold mb-4">2800 €</p>
        <ul class="space-y-2 text-violet-300 mb-6">
          <li>✔ Tout ce qui est dans Professionnel</li>
          <li>✔ Concept de design Packaging</li>
          <li>✔ Design de support marketing</li>
          <li>✔ Mquette de site web</li>
          <li>✔ Direction photo de marque</li>
          <li>✔ support de marque 3 mois</li>
          <li>✔ Supports print + digital</li>
        </ul>
        <a
          href="/contact"
          class="block text-center bg-violet-600 py-3 rounded-lg font-semibold hover:bg-violet-500 transition"
        >
          Choisir Premium
        </a>
      </div>
    </div>
  </section>
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
