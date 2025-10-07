<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
</script>

<svelte:head>
  <title>Services - Graphiste</title>
</svelte:head>

<Layout pageTitle="Services" bannerImage="/penhaligons/1.jpg">
  <h2 class="text-2xl md:text-3xl font-bold mb-8">Mes services</h2>

  <div class="grid gap-8 md:grid-cols-2">
    <div class="p-6 rounded-lg shadow bg-white">
      <h3 class="text-xl font-semibold mb-2">Identité visuelle</h3>
      <p class="text-gray-600">
        Création de logos, chartes graphiques et déclinaisons visuelles adaptées
        à vos besoins.
      </p>
    </div>

    <div class="p-6 rounded-lg shadow bg-white">
      <h3 class="text-xl font-semibold mb-2">Supports de communication</h3>
      <p class="text-gray-600">
        Affiches, brochures, flyers, cartes de visite, présentations
        professionnelles…
      </p>
    </div>

    <div class="p-6 rounded-lg shadow bg-white">
      <h3 class="text-xl font-semibold mb-2">Web & digital</h3>
      <p class="text-gray-600">
        Bannières, visuels pour réseaux sociaux, maquettes UI/UX, newsletters.
      </p>
    </div>

    <div class="p-6 rounded-lg shadow bg-white">
      <h3 class="text-xl font-semibold mb-2">Illustration</h3>
      <p class="text-gray-600">
        Illustrations sur mesure pour vos projets éditoriaux ou numériques.
      </p>
    </div>
  </div>
</Layout>
