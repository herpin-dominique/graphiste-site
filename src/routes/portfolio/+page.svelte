<script lang="ts">
  import { tick } from "svelte";
  import { fade, scale } from "svelte/transition";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { ImageSquare, Palette, Sparkle, Leaf } from "phosphor-svelte";

  // Typage strict des titres
  type ProjectTitle =
    | "Les Agapes"
    | "Mode et Travaux"
    | "Penhaligons"
    | "Alvelo";

  type Project = {
    title: ProjectTitle;
    photos: string[];
  };

  // Association titre → icône (typeof utilisé pour éviter TS2322)
  const iconMap: Record<ProjectTitle, typeof ImageSquare> = {
    "Les Agapes": ImageSquare,
    "Mode et Travaux": Palette,
    Penhaligons: Sparkle,
    Alvelo: Leaf,
  };

  let projects: Project[] = [
    {
      title: "Les Agapes",
      photos: [
        "/Les-agapes/Agapes_page-0001.jpg",
        "/Les-agapes/Agapes_page-0002.jpg",
        "/Les-agapes/Agapes_page-0003.jpg",
        "/Les-agapes/Agapes_page-0004.jpg",
        "/Les-agapes/Agapes_page-0005.jpg",
        "/Les-agapes/Agapes_page-0006.jpg",
        "/Les-agapes/Agapes_page-0007.jpg",
        "/Les-agapes/Agapes_page-0008.jpg",
        "/Les-agapes/Agapes_page-0009.jpg",
        "/Les-agapes/Agapes_page-0010.jpg",
      ],
    },
    {
      title: "Mode et Travaux",
      photos: [
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0001.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0002.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0003.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0004.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0005.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0006.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0007.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0008.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0009.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0010.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0011.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0012.jpg",
        "/Mode-et-travaux/Dossier présentation Mode et travaux Lola Herpin_page-0013.jpg",
        "/Mode-et-travaux/PDF fond perdu_page-0001.jpg",
        "/Mode-et-travaux/PDF fond perdu_page-0002.jpg",
        "/Mode-et-travaux/PDF fond perdu_page-0003.jpg",
        "/Mode-et-travaux/PDF fond perdu_page-0004.jpg",
        "/Mode-et-travaux/PDF fond perdu_page-0005.jpg",
      ],
    },
    {
      title: "Penhaligons",
      photos: [
        "/penhaligons/1.jpg",
        "/penhaligons/2.jpg",
        "/penhaligons/3.jpg",
        "/penhaligons/4.jpg",
        "/penhaligons/5.jpg",
        "/penhaligons/6.jpg",
        "/penhaligons/7.jpg",
        "/penhaligons/8.jpg",
        "/penhaligons/9.jpg",
        "/penhaligons/10.jpg",
        "/penhaligons/11.jpg",
        "/penhaligons/12.jpg",
        "/penhaligons/13.jpg",
        "/penhaligons/14.jpg",
        "/penhaligons/15.jpg",
        "/penhaligons/16.jpg",
        "/penhaligons/17.jpg",
        "/penhaligons/18.jpg",
        "/penhaligons/19.png",
        "/penhaligons/20.png",
        "/penhaligons/21.png",
        "/penhaligons/22.jpg",
        "/penhaligons/23.jpg",
        "/penhaligons/24.jpg",
        "/penhaligons/25.jpg",
        "/penhaligons/26.jpg",
        "/penhaligons/27.jpg",
        "/penhaligons/28.jpg",
      ],
    },
    {
      title: "Alvelo",
      photos: [
        "/Alvelo/ALVELO pfe dossier_compressed_page-0010.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0032.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0033.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0034.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0035.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0036.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0037.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0038.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0039.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0040.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0041.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0042.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0043.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0044.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0045.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0046.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0047.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0048.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0049.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0050.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0051.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0052.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0053.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0054.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0055.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0056.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0057.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0058.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0059.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0060.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0061.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0062.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0063.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0064.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0065.jpg",
      ],
    },
  ];

  let selectedPhoto: string | null = null;
  let selectedProjectTitle: ProjectTitle | "" = "";

  async function openModal(projectTitle: ProjectTitle, photo: string) {
    selectedProjectTitle = projectTitle;
    selectedPhoto = photo;
    await tick();
    const modal = document.getElementById("modal-container");
    modal?.focus();
  }

  function closeModal() {
    selectedPhoto = null;
    selectedProjectTitle = "";
  }

  function handleBackdropKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") closeModal();
    else if (event.key === "ArrowRight") nextPhoto();
    else if (event.key === "ArrowLeft") prevPhoto();
  }

  function nextPhoto() {
    const project = projects.find((p) => p.title === selectedProjectTitle);
    if (!project || !selectedPhoto) return;
    const index = project.photos.indexOf(selectedPhoto);
    selectedPhoto = project.photos[(index + 1) % project.photos.length];
  }

  function prevPhoto() {
    const project = projects.find((p) => p.title === selectedProjectTitle);
    if (!project || !selectedPhoto) return;
    const index = project.photos.indexOf(selectedPhoto);
    selectedPhoto =
      project.photos[
        (index - 1 + project.photos.length) % project.photos.length
      ];
  }
</script>

<svelte:head>
  <title>Portfolio - Graphiste</title>
</svelte:head>

<h2
  class="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-violet-100 animate-fade-in"
>
  Mes projets
</h2>

{#each projects as project}
  <section class="mb-16">
    <div
      class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {#each project.photos as photo}
        <ProjectCard
          title={project.title}
          {photo}
          icon={iconMap[project.title]}
          onClick={() => openModal(project.title, photo)}
        />
      {/each}
    </div>
  </section>
{/each}

{#if selectedPhoto}
  <div
    id="modal-container"
    role="dialog"
    aria-modal="true"
    aria-label="Image en grand format"
    class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
    tabindex="0"
    on:keydown={handleBackdropKeyDown}
    transition:fade={{ duration: 200 }}
  >
    <div
      class="absolute inset-0 cursor-pointer"
      role="button"
      tabindex="0"
      aria-label="Fermer la fenêtre"
      on:click={closeModal}
      on:keydown={(e) =>
        e.key === "Enter" || e.key === " " ? closeModal() : null}
    ></div>

    <div
      class="relative max-w-5xl max-h-full overflow-auto rounded-lg shadow-xl bg-violet-950 text-white p-6"
      transition:scale={{ duration: 200, start: 0.9 }}
    >
      <h4 class="text-violet-100 text-xl font-semibold mb-4">
        {selectedProjectTitle}
      </h4>
      <img
        src={selectedPhoto}
        alt={selectedProjectTitle}
        class="max-w-full rounded mx-auto"
      />

      <div class="flex justify-between items-center mt-6">
        <button
          type="button"
          class="bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-600 transition"
          on:click={prevPhoto}
        >
          ⬅ Précédent
        </button>

        <button
          type="button"
          class="bg-violet-600 text-white px-6 py-2 rounded hover:bg-violet-700 transition"
          on:click={closeModal}
        >
          Fermer
        </button>

        <button
          type="button"
          class="bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-600 transition"
          on:click={nextPhoto}
        >
          Suivant ➡
        </button>
      </div>
    </div>
  </div>
{/if}
