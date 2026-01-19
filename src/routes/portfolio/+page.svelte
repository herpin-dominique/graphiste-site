<script lang="ts">
  import { onMount } from "svelte";
  import { cubicOut } from "svelte/easing";
  import AOS from "aos";

  onMount(() => {
    AOS.init({ duration: 600, once: true });
  });

  // Types
  type ProjectTitle =
    | "Les Agapes"
    | "Mode et Travaux"
    | "Penhaligons"
    | "Alvelo";
  type Project = {
    title: ProjectTitle;
    photos: string[];
    tag: string;
    tagColor: string;
    description: string;
  };

  // Données des projets
  let projects: Project[] = [
    {
      title: "Les Agapes",
      tag: "Editorial",
      tagColor: "from-pink-500 to-violet-500",
      description:
        "Un projet editorial autour de la gastronomie, mettant en valeur les saveurs et l'art culinaire.",
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
      tag: "Magazine",
      tagColor: "from-amber-500 to-orange-500",
      description:
        "Reportage visuel et mise en page d'articles pour un magazine lifestyle.",
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
      tag: "Branding",
      tagColor: "from-emerald-500 to-teal-500",
      description:
        "Univers parfume et esthetique classique pour une marque de luxe.",
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
      tag: "Projet de fin d'etudes",
      tagColor: "from-blue-500 to-indigo-500",
      description:
        "Dossier de design structure pour un projet de mobilite urbaine.",
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

  // État modal & interactions
  let selectedPhoto: string | null = null;
  let selectedProjectTitle: ProjectTitle | "" = "";
  let direction: "left" | "right" = "right";
  let touchStartX: number | null = null;

  function openModal(projectTitle: ProjectTitle, photo: string) {
    selectedProjectTitle = projectTitle;
    selectedPhoto = photo;
  }
  function closeModal() {
    selectedPhoto = null;
    selectedProjectTitle = "";
  }
  function nextPhoto() {
    const project = projects.find((p) => p.title === selectedProjectTitle);
    if (!project || !selectedPhoto) return;
    const index = project.photos.indexOf(selectedPhoto);
    selectedPhoto = project.photos[(index + 1) % project.photos.length];
    direction = "right";
  }
  function prevPhoto() {
    const project = projects.find((p) => p.title === selectedProjectTitle);
    if (!project || !selectedPhoto) return;
    const index = project.photos.indexOf(selectedPhoto);
    selectedPhoto =
      project.photos[
        (index - 1 + project.photos.length) % project.photos.length
      ];
    direction = "left";
  }
  function handleKey(event: KeyboardEvent) {
    if (event.key === "Escape") closeModal();
    else if (event.key === "ArrowRight") nextPhoto();
    else if (event.key === "ArrowLeft") prevPhoto();
  }
  function handleTouchStart(event: TouchEvent) {
    touchStartX = event.touches[0].clientX;
  }
  function handleTouchEnd(event: TouchEvent) {
    if (touchStartX === null) return;
    const touchEndX = event.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    if (deltaX > 50) prevPhoto();
    else if (deltaX < -50) nextPhoto();
    touchStartX = null;
  }

  // Transition glissement horizontal
  function slideHorizontal(
    node: Element,
    { direction }: { direction: "left" | "right" },
  ) {
    const x = direction === "left" ? -100 : 100;
    return {
      duration: 300,
      easing: cubicOut,
      css: (t: number) => `
        transform: translateX(${(1 - t) * x}%);
        opacity: ${t};
      `,
    };
  }

  // Transition fondu + zoom
  function fadeZoom(node: Element, { duration = 400 } = {}) {
    return {
      duration,
      easing: cubicOut,
      css: (t: number) => `
        opacity: ${t};
        transform: scale(${0.95 + 0.05 * t});
      `,
    };
  }

  // Pagination
  function currentIndex(): number {
    const project = projects.find((p) => p.title === selectedProjectTitle);
    if (!project || !selectedPhoto) return 0;
    return project.photos.indexOf(selectedPhoto);
  }
</script>

<svelte:head>
  <title>Portfolio - Herpin Creative Studio</title>
</svelte:head>

<main
  class="relative z-0 min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900 px-4 md:px-6 lg:px-8 xl:px-12 py-16 lg:py-20"
>
  <!-- Header -->
  <div class="text-center mb-16 lg:mb-20" data-aos="fade-up">
    <h1
      class="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 lg:mb-8"
    >
      Mon Portfolio
    </h1>
    <p
      class="text-violet-100 text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed"
    >
      Découvrez mes réalisations en design graphique, identité visuelle et
      édition.
    </p>
  </div>

  <!-- Grille des projets -->
  <div
    class="w-full max-w-[1800px] mx-auto grid md:grid-cols-2 gap-8 lg:gap-12"
  >
    {#each projects as project, i}
      <div
        class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20 overflow-hidden"
        data-aos="fade-up"
        data-aos-delay={i * 100}
      >
        <!-- Tag -->
        <div class="absolute top-4 left-6 lg:left-8 z-10">
          <span
            class="bg-gradient-to-r {project.tagColor} text-white text-sm md:text-base lg:text-lg font-bold px-5 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-wider"
          >
            {project.tag}
          </span>
        </div>

        <!-- Image principale -->
        <button
          type="button"
          class="w-full aspect-[4/3] overflow-hidden cursor-pointer"
          on:click={() => openModal(project.title, project.photos[0])}
        >
          <img
            src={project.photos[0]}
            alt={project.title}
            class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </button>

        <!-- Contenu -->
        <div class="p-8 lg:p-10">
          <div class="flex items-center justify-between mb-4 lg:mb-6">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              {project.title}
            </h2>
            <span class="text-violet-200 text-lg lg:text-xl"
              >{project.photos.length} images</span
            >
          </div>
          <p
            class="text-violet-100 text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed"
          >
            {project.description}
          </p>

          <!-- Miniatures -->
          <div class="flex gap-3 mb-6 lg:mb-8 overflow-x-auto pb-2">
            {#each project.photos.slice(1, 5) as photo, j}
              <button
                type="button"
                class="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-xl overflow-hidden border-2 border-violet-600/50 hover:border-pink-500 transition-colors cursor-pointer"
                on:click={() => openModal(project.title, photo)}
              >
                <img
                  src={photo}
                  alt="{project.title} - {j + 2}"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            {/each}
            {#if project.photos.length > 5}
              <button
                type="button"
                class="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-xl bg-violet-800/50 border-2 border-violet-600/50 hover:border-pink-500 transition-colors flex items-center justify-center cursor-pointer"
                on:click={() => openModal(project.title, project.photos[5])}
              >
                <span class="text-white font-bold text-lg lg:text-xl"
                  >+{project.photos.length - 5}</span
                >
              </button>
            {/if}
          </div>

          <!-- Bouton voir tout -->
          <button
            type="button"
            class="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold py-4 lg:py-5 px-8 rounded-2xl text-xl lg:text-2xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 flex items-center justify-center gap-3"
            on:click={() => openModal(project.title, project.photos[0])}
          >
            <svg
              class="w-6 h-6 lg:w-7 lg:h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            Voir le projet
          </button>
        </div>
      </div>
    {/each}
  </div>

  <!-- CTA -->
  <div class="text-center mt-16 lg:mt-20" data-aos="fade-up">
    <p
      class="text-violet-100 text-xl md:text-2xl lg:text-3xl mb-8 leading-relaxed"
    >
      Un projet vous intéresse ? Discutons-en ensemble !
    </p>
    <a
      href="/contact"
      class="inline-flex items-center gap-3 px-10 py-5 lg:px-12 lg:py-6 bg-white text-violet-700 font-bold text-xl lg:text-2xl rounded-full hover:bg-violet-50 transition-all duration-300 hover:scale-105 shadow-xl"
    >
      <svg
        class="w-6 h-6 lg:w-7 lg:h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        ></path>
      </svg>
      Me contacter
    </a>
  </div>
</main>

<!-- Lightbox plein ecran -->
{#if selectedPhoto}
  <div
    id="modal-container"
    role="dialog"
    aria-modal="true"
    aria-label="Image en grand format"
    class="fixed inset-0 w-screen h-screen bg-black/95 z-50"
    tabindex="0"
    on:keydown={handleKey}
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
    transition:fadeZoom
  >
    <!-- Bouton fermer -->
    <button
      type="button"
      class="absolute top-3 right-3 md:top-4 md:right-4 z-20 bg-white/10 hover:bg-white/20 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition"
      aria-label="Fermer"
      on:click={closeModal}
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>

    <!-- Titre -->
    <div class="absolute top-3 left-3 md:top-4 md:left-4 z-20">
      <span
        class="text-sm md:text-lg font-bold text-white bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 rounded-full"
      >
        {selectedProjectTitle} - {currentIndex() + 1}/{projects.find(
          (p) => p.title === selectedProjectTitle,
        )?.photos.length}
      </span>
    </div>

    <!-- Image -->
    <div
      class="absolute inset-0 flex items-center justify-center p-2 md:p-4 pt-16"
    >
      <img
        src={selectedPhoto}
        alt={selectedProjectTitle}
        class="max-w-full max-h-full object-contain rounded-lg"
        transition:slideHorizontal={{ direction }}
      />
    </div>

    <!-- Navigation desktop -->
    <button
      type="button"
      class="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full items-center justify-center transition"
      aria-label="Precedent"
      on:click={prevPhoto}
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </button>
    <button
      type="button"
      class="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full items-center justify-center transition"
      aria-label="Suivant"
      on:click={nextPhoto}
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>

    <!-- Navigation mobile -->
    <div
      class="md:hidden absolute bottom-4 left-0 right-0 flex justify-center items-center gap-6 z-20"
    >
      <button
        type="button"
        class="bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
        aria-label="Precedent"
        on:click={prevPhoto}
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        class="bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition"
        aria-label="Suivant"
        on:click={nextPhoto}
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Indicateur swipe mobile -->
    <div
      class="md:hidden absolute bottom-20 left-0 right-0 flex justify-center z-20 pointer-events-none"
    >
      <p class="text-white/50 text-xs">Swipez pour naviguer</p>
    </div>

    <!-- Miniatures en bas (desktop) -->
    <div
      class="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-20 gap-2 bg-black/50 p-2 rounded-xl max-w-[80vw] overflow-x-auto"
    >
      {#each projects.find((p) => p.title === selectedProjectTitle)?.photos || [] as photo, idx}
        <button
          type="button"
          class="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all {selectedPhoto ===
          photo
            ? 'border-pink-500 scale-110'
            : 'border-transparent hover:border-violet-400'}"
          on:click={() => {
            selectedPhoto = photo;
            direction = idx > currentIndex() ? "right" : "left";
          }}
        >
          <img
            src={photo}
            alt="Miniature {idx + 1}"
            class="w-full h-full object-cover"
          />
        </button>
      {/each}
    </div>
  </div>
{/if}
