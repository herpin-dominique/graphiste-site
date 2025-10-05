<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

# Services
<a
  href="/"
  class="inline-block mb-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition duration-300"
>
  Retour à l'accueil
</a>

<div class="bg-gray-900 text-white min-h-screen flex flex-col">
  <Header />

  <main class="flex-grow container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-6 text-center">Services proposés</h1>
    <ul
      class="max-w-3xl mx-auto space-y-4 list-disc list-inside text-gray-300 text-lg"
    >
      <li>Design graphique : logos, brochures, affiches</li>
      <li>Motion design : animations courtes, vidéos explicatives</li>
      <li>Identité visuelle et branding complet</li>
      <li>Création d’illustrations originales</li>
      <li>Conseil en communication visuelle</li>
    </ul>
  </main>

  <Footer />
</div>
