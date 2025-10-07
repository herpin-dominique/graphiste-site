<script lang="ts">
  export let pageTitle: string = "Titre de la page";
  export let bannerImage: string | null = null; // optionnel
</script>

<!-- HEADER -->
<header class="bg-white shadow-md fixed w-full top-0 z-50">
  <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    <a href="/" class="text-xl font-bold text-blue-600">Lola</a>
    <div class="space-x-6">
      <a href="/" class="hover:text-blue-600">Accueil</a>
      <a href="/portfolio" class="hover:text-blue-600">Portfolio</a>
      <a href="/services" class="hover:text-blue-600">Services</a>
      <a href="/contact" class="hover:text-blue-600">Contact</a>
    </div>
  </nav>
</header>

<!-- BANNIÈRE (optionnelle) -->
{#if bannerImage}
  <section class="relative w-full h-64 sm:h-80 md:h-[400px] mt-16">
    <img src={bannerImage} alt={pageTitle} class="w-full h-full object-cover" />
    <div
      class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
    >
      <h1 class="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold">
        {pageTitle}
      </h1>
    </div>
  </section>
{/if}

<!-- CONTENU CENTRAL -->
<main class="w-11/12 max-w-6xl mx-auto px-4 py-12 mt-20">
  <slot />
  <!-- Ici vient le contenu spécifique de chaque page -->
</main>

<!-- FOOTER -->
<footer class="bg-gray-900 text-gray-200 py-8 mt-12">
  <div class="max-w-6xl mx-auto px-4 text-center">
    <p>
      &copy; {new Date().getFullYear()} - Lola Herpin. Tous droits réservés.
    </p>
  </div>
</footer>
