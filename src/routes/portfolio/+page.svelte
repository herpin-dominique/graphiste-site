<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { ImageSquare, Palette, Sparkle, Leaf } from "phosphor-svelte";

  // Types
  type ProjectTitle =
    | "Les Agapes"
    | "Mode et Travaux"
    | "Penhaligons"
    | "Alvelo";
  type Project = { title: ProjectTitle; photos: string[] };

  // Icônes
  const iconMap: Record<ProjectTitle, typeof ImageSquare> = {
    "Les Agapes": ImageSquare,
    "Mode et Travaux": Palette,
    Penhaligons: Sparkle,
    Alvelo: Leaf,
  };

  // Données : toutes tes photos
  let projects: Project[] = [
    {
      title: "Les Agapes",
      photos: [
        "/Les-agapes/PORTFOLIO.png",
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

  // Intros par projet
  const projectIntro: Record<ProjectTitle, string> = {
    "Les Agapes": "Un projet éditorial autour de la gastronomie.",
    "Mode et Travaux": "Reportage visuel et mise en page d’articles.",
    Penhaligons: "Univers parfumé et esthétique classique.",
    Alvelo: "Dossier de design structuré.",
  };

  // Utilitaires
  const getHero = (p: Project) => p.photos[0];
  const getMosaic = (p: Project) => p.photos.slice(1);
  function mosaicSpan(i: number) {
    if (i % 9 === 0) return "col-span-2 row-span-2";
    if (i % 5 === 0) return "col-span-2";
    return "col-span-1";
  }

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
    if (deltaX > 50)
      prevPhoto(); // swipe droite → précédent
    else if (deltaX < -50) nextPhoto(); // swipe gauche → suivant
    touchStartX = null;
  }

  // Transition glissement horizontal (pour changement d’image)
  function slideHorizontal(
    node: Element,
    { direction }: { direction: "left" | "right" }
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

  // Transition fondu + zoom (pour ouverture de la lightbox et rendu cinéma)
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

  // Pagination – index courant
  function currentIndex(): number {
    const project = projects.find((p) => p.title === selectedProjectTitle);
    if (!project || !selectedPhoto) return 0;
    return project.photos.indexOf(selectedPhoto);
  }
</script>

<svelte:head>
  <title>Portfolio – Magazine</title>
</svelte:head>

<!-- Conteneur global pleine largeur -->
<div class="w-full bg-stone-50 text-slate-800 selection:bg-violet-200">
  <!-- Couverture immersive -->
  <section
    class="relative h-[60vh] md:h-[80vh] overflow-hidden"
    transition:fadeZoom
  >
    <img
      src={getHero(projects[0])}
      alt="Couverture"
      class="absolute inset-0 w-full h-full object-cover brightness-90"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"
    ></div>
    <div
      class="relative z-10 h-full flex flex-col items-center justify-end pb-8 md:pb-12 text-stone-100"
    >
      <h1 class="text-3xl md:text-6xl font-serif tracking-wide">
        Portfolio – Lola Herpin
      </h1>
      <p class="mt-2 text-base md:text-xl opacity-90">
        Graphisme, identité visuelle & édition
      </p>
    </div>
  </section>

  <!-- Sommaire pleine largeur -->
  <section class="w-full px-4 md:px-8 py-8 md:py-16">
    <h2 class="text-2xl md:text-3xl font-serif mb-6">Sommaire</h2>
    <div
      class="grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"
    >
      {#each projects as p}
        <a
          href={`#${p.title.replace(/\s+/g, "-").toLowerCase()}`}
          class="group block bg-white rounded-lg shadow-sm border border-stone-200 p-4 hover:shadow-md transition"
        >
          {#if iconMap[p.title]}
            {@const Icon = iconMap[p.title]}
            <Icon class="w-6 h-6 text-violet-700 mb-2" aria-hidden="true" />
          {/if}
          <div class="flex items-baseline justify-between">
            <h3 class="text-lg md:text-xl font-serif">{p.title}</h3>
            <span class="text-xs md:text-sm text-stone-500"
              >{p.photos.length} pages</span
            >
          </div>
          <p class="mt-2 text-sm text-stone-600 leading-relaxed">
            {projectIntro[p.title]}
          </p>
        </a>
      {/each}
    </div>
  </section>

  <!-- Chapitres pleine largeur -->
  {#each projects as project, i}
    <section
      id={project.title.replace(/\s+/g, "-").toLowerCase()}
      class="w-full px-4 md:px-8 py-12 md:py-20"
    >
      <!-- En-tête alterné -->
      <div class="grid grid-cols-12 gap-6 md:gap-8 items-center">
        {#if i % 2 === 0}
          <div class="col-span-12 md:col-span-7">
            <img
              src={getHero(project)}
              alt={project.title}
              class="w-full rounded-xl shadow-lg"
            />
          </div>
          <div class="col-span-12 md:col-span-5">
            <h2 class="text-2xl md:text-4xl font-serif mb-3 md:mb-4">
              {project.title}
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-stone-700">
              {projectIntro[project.title]}
            </p>
            <div class="mt-4 md:mt-6 h-px w-24 bg-stone-300"></div>
            <p class="mt-3 md:mt-4 text-xs md:text-sm text-stone-500">
              Chapitre {i + 1}
            </p>
          </div>
        {:else}
          <div class="col-span-12 md:col-span-5">
            <h2 class="text-2xl md:text-4xl font-serif mb-3 md:mb-4">
              {project.title}
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-stone-700">
              {projectIntro[project.title]}
            </p>
            <div class="mt-4 md:mt-6 h-px w-24 bg-stone-300"></div>
            <p class="mt-3 md:mt-4 text-xs md:text-sm text-stone-500">
              Chapitre {i + 1}
            </p>
          </div>
          <div class="col-span-12 md:col-span-7">
            <img
              src={getHero(project)}
              alt={project.title}
              class="w-full rounded-xl shadow-lg"
            />
          </div>
        {/if}
      </div>

      <p class="mt-6 text-xs md:text-sm text-stone-500">
        Toutes les images du projet sont présentées ci-dessous dans une mise en
        page magazine.
      </p>

      <!-- Mosaïque éditoriale pleine largeur -->
      <div
        class="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[8rem] md:auto-rows-[12rem] gap-4 md:gap-6 [grid-auto-flow:dense]"
      >
        {#each getMosaic(project) as photo, j}
          <button
            type="button"
            class={`relative ${mosaicSpan(j)} group cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-stone-50`}
            on:click={() => openModal(project.title, photo)}
            aria-label={`Ouvrir ${project.title} – page ${j + 2} en plein écran`}
          >
            <img
              src={photo}
              alt={`${project.title} – page ${j + 2}`}
              class="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
            />
            <span
              class="absolute bottom-2 left-2 bg-stone-900/60 text-stone-100 text-[10px] md:text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
            >
              {project.title} · {j + 2}
            </span>
          </button>
        {/each}
      </div>

      <!-- Fin de chapitre -->
      <div class="mt-12 md:mt-16 flex items-center gap-2 text-stone-400">
        <span class="h-px flex-1 bg-stone-300"></span>
        <span class="text-[10px] md:text-xs tracking-widest uppercase"
          >Fin du chapitre</span
        >
        <span class="h-px flex-1 bg-stone-300"></span>
      </div>
    </section>
  {/each}

  <!-- Page finale -->
  <section
    class="w-full px-4 md:px-8 py-16 md:py-24 bg-white border-t border-stone-200"
  >
    <div class="text-center">
      <h2 class="text-2xl md:text-4xl font-serif">Merci de la lecture</h2>
      <p class="mt-2 md:mt-3 text-stone-600">
        Portfolio magazine numérique – Lola Herpin
      </p>
      <div class="mt-6 md:mt-8 flex justify-center">
        <div class="h-px w-24 md:w-32 bg-stone-300"></div>
      </div>
    </div>
  </section>
</div>

<!-- Lightbox plein écran cinéma -->
{#if selectedPhoto}
  <div
    id="modal-container"
    role="dialog"
    aria-modal="true"
    aria-label="Image en grand format"
    class="fixed inset-0 w-screen h-screen bg-black flex flex-col items-center justify-center z-50"
    tabindex="0"
    on:keydown={handleKey}
    on:touchstart={handleTouchStart}
    on:touchend={handleTouchEnd}
    transition:fadeZoom
  >
    <!-- Fond cliquable (bouton accessible) -->
    <button
      type="button"
      class="absolute inset-0 cursor-pointer"
      aria-label="Fermer la fenêtre"
      on:click={closeModal}
    ></button>

    <!-- Contenu -->
    <div
      class="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-6"
    >
      <h4 class="text-lg md:text-xl font-serif mb-4 text-white z-10">
        {selectedProjectTitle}
      </h4>

      <!-- Image – glissement horizontal entre photos -->
      <img
        src={selectedPhoto}
        alt={selectedProjectTitle}
        class="w-full h-full object-contain rounded-lg shadow-lg z-10"
        transition:slideHorizontal={{ direction }}
      />

      <!-- Pagination visuelle -->
      {#if selectedProjectTitle}
        <div
          class="absolute bottom-20 flex flex-wrap justify-center items-center gap-2 z-10"
        >
          {#each projects.find((p) => p.title === selectedProjectTitle)?.photos as _, i}
            <button
              type="button"
              class={`w-3 h-3 md:w-4 md:h-4 rounded-full transition ${
                i === currentIndex()
                  ? "bg-violet-600"
                  : "bg-stone-500/70 hover:bg-stone-400"
              }`}
              on:click={() => {
                const project = projects.find(
                  (p) => p.title === selectedProjectTitle
                );
                if (project) {
                  direction = i > currentIndex() ? "right" : "left";
                  selectedPhoto = project.photos[i];
                }
              }}
              aria-label={`Aller à la page ${i + 1}`}
              title={`Page ${i + 1}`}
            ></button>
          {/each}
        </div>
      {/if}

      <!-- Boutons de navigation -->
      <div
        class="absolute bottom-6 flex justify-between items-center gap-4 z-10"
      >
        <button
          class="bg-stone-700 px-4 py-2 rounded hover:bg-stone-600"
          on:click={prevPhoto}>⬅ Précédent</button
        >
        <button
          class="bg-violet-600 px-6 py-2 rounded hover:bg-violet-700"
          on:click={closeModal}>Fermer</button
        >
        <button
          class="bg-stone-700 px-4 py-2 rounded hover:bg-stone-600"
          on:click={nextPhoto}>Suivant ➡</button
        >
      </div>
    </div>
  </div>
{/if}

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  /* Optionnel: styles fins pour lisibilité et focus */
  :global(button:focus-visible) {
    outline: none;
  }
</style>
