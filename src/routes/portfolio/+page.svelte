<script lang="ts">
  import Layout from "$lib/components/Layout.svelte"; // chemin vers ton layout

  import { tick } from "svelte";

  type Project = {
    title: string;
    photos: string[];
  };

  let projects: Project[] = [
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
        "/Alvelo/ALVELO pfe dossier_compressed_page-0011.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0012.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0013.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0014.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0015.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0016.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0017.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0018.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0019.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0020.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0021.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0022.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0023.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0024.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0025.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0026.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0027.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0028.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0029.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0030.jpg",
        "/Alvelo/ALVELO pfe dossier_compressed_page-0031.jpg",
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
  let selectedProjectTitle: string = "";

  async function openModal(projectTitle: string, photo: string) {
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
    if (event.key === "Escape") {
      closeModal();
    }
  }
</script>

<svelte:head>
  <title>Portfolio - Graphiste</title>
</svelte:head>

<Layout
  pageTitle="Portfolio"
  bannerImage="/Mode-et-travaux/PDF fond perdu_page-0001.jpg"
>
  <h2 class="text-2xl md:text-3xl font-bold mb-8">Mes projets</h2>

  {#each projects as project}
    <section class="mb-16">
      <h3
        class="text-3xl font-semibold mb-6 border-b-4 border-blue-600 inline-block pb-2 text-gray-800"
      >
        {project.title}
      </h3>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {#each project.photos as photo}
          <button
            aria-label={`Ouvrir l'image ${project.title}`}
            class="w-full rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer p-0 border-0 bg-transparent"
            on:click={() => openModal(project.title, photo)}
            on:keydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(project.title, photo);
              }
            }}
          >
            <img
              src={photo}
              alt={`Projet ${project.title} - photo`}
              class="w-full rounded-lg object-cover h-40 sm:h-48 md:h-52 transition transform hover:scale-105 hover:shadow-2xl"
            />
          </button>
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
    >
      <!-- backdrop -->
      <div
        class="absolute inset-0 cursor-pointer"
        role="button"
        tabindex="0"
        aria-label="Fermer la fenêtre"
        on:click={closeModal}
        on:keydown={(e) =>
          e.key === "Enter" || e.key === " " ? closeModal() : null}
      ></div>

      <!-- modal content -->
      <div
        class="relative max-w-5xl max-h-full overflow-auto rounded-lg shadow-xl bg-white p-4"
      >
        <h4 class="text-gray-900 text-xl font-semibold mb-4">
          {selectedProjectTitle}
        </h4>
        <img
          src={selectedPhoto}
          alt={selectedProjectTitle}
          class="max-w-full rounded"
        />
        <button
          type="button"
          class="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          on:click={closeModal}
        >
          Fermer
        </button>
      </div>
    </div>
  {/if}
</Layout>
