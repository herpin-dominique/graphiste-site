<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";
  onMount(() => { AOS.init({ duration: 600, once: true }); });

  // Formulaire multi-étapes
  let step = 1;
  const totalSteps = 4;

  let projectType = "";
  let budget = "";
  let delay = "";
  let name = "";
  let email = "";
  let message = "";
  let submitted = false;
  let sending = false;
  let error = "";

  const projectTypes = [
    { value: "logo", label: "Logo & Identité visuelle", icon: "✦" },
    { value: "motion", label: "Motion Design", icon: "▶" },
    { value: "print", label: "Print & Éditorial", icon: "◈" },
    { value: "reseaux", label: "Réseaux sociaux", icon: "◎" },
    { value: "pack", label: "Packaging", icon: "⬡" },
    { value: "autre", label: "Autre projet", icon: "+" },
  ];

  const budgets = [
    { value: "< 500€", label: "< 500 €", desc: "Petit projet" },
    { value: "500-1000€", label: "500 – 1 000 €", desc: "Projet standard" },
    { value: "1000-2000€", label: "1 000 – 2 000 €", desc: "Projet complet" },
    { value: "> 2000€", label: "> 2 000 €", desc: "Projet premium" },
  ];

  const delays = [
    { value: "urgent", label: "Urgent", desc: "< 2 semaines" },
    { value: "1 mois", label: "1 mois", desc: "Délai confortable" },
    { value: "2-3 mois", label: "2 – 3 mois", desc: "Projet réfléchi" },
    { value: "flexible", label: "Flexible", desc: "Pas de contrainte" },
  ];

  function next() { if (step < totalSteps) step++; }
  function prev() { if (step > 1) step--; }

  async function submit() {
    sending = true;
    error = "";
    try {
      const res = await fetch("https://formspree.io/f/xgvlgeqb", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          "Type de projet": projectType,
          "Budget": budget,
          "Délai": delay,
        }),
      });
      if (res.ok) {
        submitted = true;
      } else {
        error = "Une erreur est survenue, veuillez réessayer.";
      }
    } catch {
      error = "Une erreur est survenue, veuillez réessayer.";
    }
    sending = false;
  }
</script>

<svelte:head>
  <title>Contact graphiste Caen - Devis gratuit | Herpin Creative Studio</title>
  <meta name="description" content="Contactez Lola Herpin, graphiste freelance à Caen. Devis gratuit pour création de logo, identité visuelle, motion design. Basée à Caen, disponible dans toute la Normandie." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Herpin Creative Studio" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:title" content="Contactez votre graphiste à Caen | Herpin Creative Studio" />
  <meta property="og:description" content="Demandez un devis gratuit pour votre projet de design graphique ou motion design à Caen, Normandie." />
  <meta property="og:url" content="https://herpin-creative-studio.fr/contact" />
  <meta property="og:image" content="https://herpin-creative-studio.fr/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Contact graphiste Caen - Herpin Creative Studio" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://herpin-creative-studio.fr/og-image.png" />
</svelte:head>

<main
  class="relative z-0 min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900 px-4 md:px-6 lg:px-8 xl:px-12 py-16 lg:py-20"
>
  <!-- Header -->
  <div class="text-center mb-10 md:mb-16 lg:mb-20" data-aos="fade-up">
    <h1
      class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 lg:mb-8"
    >
      Contactez-moi
    </h1>
    <p
      class="text-violet-100 text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl mx-auto leading-relaxed"
    >
      Besoin d'un graphiste à Caen ? Demandez un devis gratuit !
    </p>
  </div>

  <div
    class="w-full max-w-[1600px] mx-auto grid md:grid-cols-2 gap-8 lg:gap-12"
  >
    <!-- Colonne gauche : Informations -->
    <div class="space-y-6 lg:space-y-8" data-aos="fade-up" data-aos-delay="100">
      <!-- Card Email -->
      <div
        class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
      >
        <div class="absolute -top-4 left-6 md:left-8 lg:left-10">
          <span
            class="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm md:text-base lg:text-lg font-bold px-4 md:px-5 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-wider"
          >
            Email
          </span>
        </div>
        <div class="flex items-center gap-4 md:gap-5 lg:gap-6 mt-6 lg:mt-8">
          <div
            class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-violet-200 text-base md:text-lg lg:text-xl">
              Écrivez-moi à
            </p>
            <a
              href="mailto:herpinlavie@gmail.com"
              class="text-white text-sm md:text-xl lg:text-2xl font-semibold hover:text-pink-300 transition-colors break-all"
            >
              herpinlavie@gmail.com
            </a>
          </div>
        </div>
      </div>

      <!-- Card Reseaux sociaux -->
      <div
        class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
      >
        <div class="absolute -top-4 left-6 md:left-8 lg:left-10">
          <span
            class="bg-violet-600 text-white text-sm md:text-base lg:text-lg font-bold px-4 md:px-5 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-wider"
          >
            Réseaux
          </span>
        </div>
        <div class="flex items-center gap-4 md:gap-5 lg:gap-6 mt-6 lg:mt-8">
          <div
            class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-violet-600 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-violet-200 text-base md:text-lg lg:text-xl">
              Suivez-moi sur
            </p>
            <a
              href="https://instagram.com/herpincreativestudio"
              target="_blank"
              rel="noopener"
              class="text-white text-base md:text-xl lg:text-2xl font-semibold hover:text-violet-300 transition-colors"
            >
              @herpincreativestudio
            </a>
          </div>
        </div>
      </div>

      <!-- Card Localisation -->
      <div
        class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-3xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
      >
        <div class="absolute -top-4 left-6 md:left-8 lg:left-10">
          <span
            class="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm md:text-base lg:text-lg font-bold px-4 md:px-5 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-wider"
          >
            Localisation
          </span>
        </div>
        <div class="flex items-center gap-4 md:gap-5 lg:gap-6 mt-6 lg:mt-8">
          <div
            class="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <div class="min-w-0 flex-1">
            <p class="text-violet-200 text-base md:text-lg lg:text-xl">
              Basée à
            </p>
            <p
              class="text-white text-base md:text-xl lg:text-2xl font-semibold"
            >
              Caen, Normandie
            </p>
          </div>
        </div>
      </div>

      <!-- Message d'encouragement -->
      <div
        class="bg-violet-800/30 p-6 md:p-8 lg:p-10 rounded-3xl border border-violet-600/30"
      >
        <p
          class="text-violet-100 text-base md:text-lg lg:text-xl leading-relaxed"
        >
          Vous avez un projet créatif, une idée ou une collaboration en tête ?
          N'hésitez pas à m'envoyer un message, je vous répondrai sous 48h.
        </p>
      </div>
    </div>

    <!-- Colonne droite : Formulaire multi-étapes -->
    <div
      class="relative bg-gradient-to-b from-violet-800/90 to-violet-950/90 backdrop-blur-sm p-6 md:p-10 lg:p-12 rounded-3xl border-2 border-pink-500/50 hover:border-pink-400/70 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <!-- Tag -->
      <div class="absolute -top-4 left-6 md:left-8 lg:left-10">
        <span class="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm md:text-base font-bold px-4 md:px-5 py-2 rounded-full uppercase tracking-wider">
          Devis gratuit
        </span>
      </div>

      {#if submitted}
        <!-- Confirmation -->
        <div class="flex flex-col items-center justify-center py-12 text-center">
          <div class="w-20 h-20 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mb-6">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-white mb-4">Message envoyé !</h2>
          <p class="text-violet-200 text-lg">Je vous répondrai sous 24 à 48h. À très vite !</p>
        </div>

      {:else}
        <!-- Indicateur de progression -->
        <div class="flex items-center gap-2 mt-6 mb-8">
          {#each Array(totalSteps) as _, i}
            <div class="h-1.5 flex-1 rounded-full transition-all duration-500 {i + 1 <= step ? 'bg-gradient-to-r from-pink-500 to-violet-500' : 'bg-violet-700/50'}"></div>
          {/each}
          <span class="text-violet-300 text-sm font-medium ml-1 whitespace-nowrap">{step}/{totalSteps}</span>
        </div>

        <!-- Étape 1 : Type de projet -->
        {#if step === 1}
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Quel est votre projet ?</h2>
          <p class="text-violet-300 mb-6">Sélectionnez le type de prestation souhaitée.</p>
          <div class="grid grid-cols-2 gap-3">
            {#each projectTypes as pt}
              <button
                on:click={() => { projectType = pt.value; next(); }}
                class="flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-200 text-center
                  {projectType === pt.value
                    ? 'bg-gradient-to-br from-pink-500/30 to-violet-500/30 border-pink-400 text-white'
                    : 'bg-violet-900/40 border-violet-600/40 text-violet-200 hover:border-violet-400 hover:text-white'}"
              >
                <span class="text-2xl">{pt.icon}</span>
                <span class="text-sm font-medium leading-tight">{pt.label}</span>
              </button>
            {/each}
          </div>

        <!-- Étape 2 : Budget -->
        {:else if step === 2}
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Quel est votre budget ?</h2>
          <p class="text-violet-300 mb-6">Une estimation pour mieux adapter ma proposition.</p>
          <div class="space-y-3">
            {#each budgets as b}
              <button
                on:click={() => { budget = b.value; next(); }}
                class="w-full flex items-center justify-between px-5 py-4 rounded-2xl border transition-all duration-200
                  {budget === b.value
                    ? 'bg-gradient-to-r from-pink-500/30 to-violet-500/30 border-pink-400 text-white'
                    : 'bg-violet-900/40 border-violet-600/40 text-violet-200 hover:border-violet-400 hover:text-white'}"
              >
                <span class="font-bold text-lg">{b.label}</span>
                <span class="text-sm opacity-70">{b.desc}</span>
              </button>
            {/each}
          </div>
          <button on:click={prev} class="mt-4 text-violet-400 hover:text-violet-200 text-sm transition-colors">← Retour</button>

        <!-- Étape 3 : Délai -->
        {:else if step === 3}
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Quel est votre délai ?</h2>
          <p class="text-violet-300 mb-6">Pour que je puisse planifier votre projet.</p>
          <div class="space-y-3">
            {#each delays as d}
              <button
                on:click={() => { delay = d.value; next(); }}
                class="w-full flex items-center justify-between px-5 py-4 rounded-2xl border transition-all duration-200
                  {delay === d.value
                    ? 'bg-gradient-to-r from-pink-500/30 to-violet-500/30 border-pink-400 text-white'
                    : 'bg-violet-900/40 border-violet-600/40 text-violet-200 hover:border-violet-400 hover:text-white'}"
              >
                <span class="font-bold text-lg">{d.label}</span>
                <span class="text-sm opacity-70">{d.desc}</span>
              </button>
            {/each}
          </div>
          <button on:click={prev} class="mt-4 text-violet-400 hover:text-violet-200 text-sm transition-colors">← Retour</button>

        <!-- Étape 4 : Coordonnées -->
        {:else if step === 4}
          <h2 class="text-2xl md:text-3xl font-bold text-white mb-2">Vos coordonnées</h2>
          <p class="text-violet-300 mb-6">Je vous réponds sous 24 à 48h.</p>
          <div class="space-y-4">
            <input
              type="text"
              bind:value={name}
              placeholder="Votre nom"
              required
              class="w-full px-5 py-4 bg-violet-900/50 border border-violet-600/50 text-white rounded-2xl placeholder-violet-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all"
            />
            <input
              type="email"
              bind:value={email}
              placeholder="Votre email"
              required
              class="w-full px-5 py-4 bg-violet-900/50 border border-violet-600/50 text-white rounded-2xl placeholder-violet-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all"
            />
            <textarea
              bind:value={message}
              rows="4"
              placeholder="Décrivez votre projet en quelques mots..."
              class="w-full px-5 py-4 bg-violet-900/50 border border-violet-600/50 text-white rounded-2xl placeholder-violet-400 resize-none focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all"
            ></textarea>
            {#if error}
              <p class="text-red-400 text-sm">{error}</p>
            {/if}
            <button
              on:click={submit}
              disabled={!name || !email || sending}
              class="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 disabled:opacity-50 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 flex items-center justify-center gap-3"
            >
              {#if sending}
                <span class="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                Envoi en cours...
              {:else}
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Envoyer ma demande
              {/if}
            </button>
          </div>
          <button on:click={prev} class="mt-4 text-violet-400 hover:text-violet-200 text-sm transition-colors">← Retour</button>
        {/if}
      {/if}
    </div>
  </div>

  <!-- Note -->
  <p
    class="text-center text-violet-200 mt-12 md:mt-16 lg:mt-20 max-w-4xl mx-auto text-base md:text-xl lg:text-2xl xl:text-3xl leading-relaxed px-2"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    Graphiste freelance basée à Caen, je réponds sous 24 à 48 heures.
    Disponible pour les entreprises, commerces et associations en Normandie.
  </p>
</main>
