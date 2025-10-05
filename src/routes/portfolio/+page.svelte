<script>
  // Liste des projets avec titre et array de photos (ici un seul projet avec 10 photos)
  let projects = [
    {
      title: "Les Agapes",
      photos: [
        "/Les-agapes/Agapes_page-0001.jpg",
        "/Les-agapes/Agapes_page-0002.jpg",
        "/Les-agapes/Agapes_page-0003.jpg",
        "/Les-agapes/Agapes_page-0004.jpg",
        "/Les-agapes/Agapes_page-0006.jpg",
        "/Les-agapes/Agapes_page-0007.jpg",
        "/Les-agapes/Agapes_page-0008.jpg",
        "/Les-agapes/Agapes_page-0009.jpg",
        "/Les-agapes/Agapes_page-0010.jpg",
      ],
    },
    // Tu peux ajouter d'autres projets ici par la suite
  ];
</script>

# portfolio
<svelte:head>
  <title>Portfolio - Graphiste</title>
</svelte:head>

<main class="p-6">
  <h1 class="text-4xl font-bold mb-8">Portfolio</h1>

  {#each projects as project}
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">{project.title}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {#each project.photos as photo}
          <img
            src={photo}
            alt={project.title + " photo"}
            class="rounded shadow-md hover:shadow-xl transition cursor-pointer"
          />
        {/each}
      </div>
    </section>
  {/each}
</main>
