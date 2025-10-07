<script lang="ts">
  type Project = {
    title: string;
    photos: string[];
  };

  export let projects: Project[] = [
    {
      title: "Les Agapes",
      photos: [
        "/Les-agapes/Agapes_page-0001.jpg",
        "/Les-agapes/Agapes_page-0002.jpg",
        "/Les-agapes/Agapes_page-0003.jpg",
        "/Les-agapes/Agapes_page-0004.jpg",
      ],
    },
    {
      title: "Mode et Travaux",
      photos: [
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0001.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0002.jpg",
      ],
    },
    {
      title: "Penhaligons",
      photos: ["/penhaligons/1.jpg", "/penhaligons/2.jpg"],
    },
    {
      title: "Alvelo",
      photos: [
        "/Alvelo/ALVELO pfe dossier_compressed_page-0010.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0011.jpg",
      ],
    },
  ];
</script>

<section
  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
>
  {#each projects as project}
    {#each project.photos as photo}
      <div
        class="overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transform transition duration-300"
      >
        <img src={photo} alt={project.title} class="w-full h-40 object-cover" />
      </div>
    {/each}
  {/each}
</section>
