<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";

  onMount(() => {
    AOS.init({ duration: 600, once: true });
  });

  const values = [
    {
      icon: "👂",
      title: "L'écoute avant tout",
      desc: "Je prends le temps de comprendre votre projet, vos valeurs et vos clients avant de poser le premier trait. Un bon design commence par une bonne conversation.",
      gradient: "from-pink-500 to-violet-500",
    },
    {
      icon: "✦",
      title: "Qualité sans compromis",
      desc: "Chaque projet reçoit la même attention, qu'il s'agisse d'un logo ou d'une identité complète. Vous démarrez votre activité — votre image mérite d'être prise au sérieux dès le début.",
      gradient: "from-violet-500 to-blue-500",
    },
    {
      icon: "🤝",
      title: "Transparence totale",
      desc: "Devis clair, délais respectés, communication régulière. Vous savez toujours où en est votre projet, sans avoir à relancer.",
      gradient: "from-amber-500 to-pink-500",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Découverte",
      desc: "On échange sur votre activité, votre cible et ce que vous voulez transmettre. Cette étape, je ne la zappe jamais.",
    },
    {
      num: "02",
      title: "Création",
      desc: "Je développe des pistes créatives basées sur votre brief et mes recherches. On affine ensemble jusqu'à trouver la bonne direction.",
    },
    {
      num: "03",
      title: "Ajustements",
      desc: "Retours, corrections, itérations — jusqu'à ce que le résultat vous ressemble vraiment.",
    },
    {
      num: "04",
      title: "Livraison",
      desc: "Tous vos fichiers en formats utilisables (print, web, réseaux), prêts à l'emploi.",
    },
  ];
</script>

<svelte:head>
  <title>À propos — Lola Herpin, graphiste à Caen | Herpin Creative Studio</title>
  <meta name="description" content="Lola Herpin, graphiste freelance basée à Caen en Normandie. Licenciée en design, elle accompagne les petites entreprises et artisans dans la création de leur identité visuelle." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Herpin Creative Studio" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:title" content="À propos — Lola Herpin, graphiste à Caen" />
  <meta property="og:description" content="Graphiste freelance à Caen, je mets le design au service des petites entreprises qui méritent une belle image dès le départ." />
  <meta property="og:url" content="https://herpin-creative-studio.fr/a-propos" />
  <meta property="og:image" content="https://herpin-creative-studio.fr/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Lola Herpin - Graphiste & Motion Designer à Caen" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://herpin-creative-studio.fr/og-image.png" />
</svelte:head>

<main class="relative z-0 min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900">

  <!-- Hero -->
  <section class="px-4 md:px-6 lg:px-8 xl:px-12 pt-10 pb-20 lg:pb-28">
    <div class="w-full max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

      <!-- Photo -->
      <div class="relative" data-aos="fade-right">
        <div class="aspect-square max-w-md mx-auto md:max-w-full rounded-3xl overflow-hidden shadow-2xl shadow-violet-900/50">
          <img
            src="/projets/lolaherpinphotosite.png"
            alt="Lola Herpin — Herpin Creative Studio"
            class="w-full h-full object-cover"
          />
        </div>
        <!-- Deco -->
        <div class="absolute -bottom-4 -right-4 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-pink-500 to-violet-500 rounded-2xl -z-10 opacity-80"></div>
        <div class="absolute -top-4 -left-4 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-violet-400 to-blue-500 rounded-xl -z-10 opacity-60"></div>
      </div>

      <!-- Texte intro -->
      <div data-aos="fade-left">
        <div class="inline-block mb-6">
          <span class="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm font-bold px-5 py-2 rounded-full uppercase tracking-wider">
            À propos
          </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          Hello, moi c'est <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-300">Lola</span>
        </h1>
        <div class="space-y-5 text-violet-100 text-lg md:text-xl leading-relaxed">
          <p>
            Graphiste freelance basée à <strong class="text-white">Caen, en Normandie</strong>, j'ai lancé Herpin Creative Studio avec une conviction simple : une petite entreprise mérite une identité visuelle aussi soignée qu'une grande.
          </p>
          <p>
            Diplômée en design, je viens de démarrer mon activité — et c'est précisément pour ça que <strong class="text-white">chaque projet compte</strong>. Pas de client traité à la chaîne, pas de template recyclé. Juste du travail sur-mesure et une vraie implication.
          </p>
          <p>
            Je travaille principalement avec des <strong class="text-white">artisans, commerçants et créateurs</strong> qui construisent quelque chose de beau et qui ont besoin d'une image à la hauteur de leur ambition.
          </p>
        </div>

        <a
          href="/contact"
          class="inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105"
        >
          Discutons de votre projet
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Ce qui m'anime -->
  <section class="bg-white/5 backdrop-blur-sm py-20 lg:py-28 px-4 md:px-6 lg:px-8 xl:px-12">
    <div class="w-full max-w-[1400px] mx-auto">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Ce qui m'anime
          </h2>
          <div class="space-y-6 text-violet-100 text-lg leading-relaxed">
            <p>
              Je suis convaincue que le design a un <strong class="text-white">impact réel sur la vie des petites structures</strong>. Un logo qui inspire confiance, une charte cohérente, une animation qui accroche l'œil sur les réseaux — ce sont des outils qui changent concrètement la perception d'une activité.
            </p>
            <p>
              Quand un artisan ou une créatrice me dit que ses clients remarquent enfin son sérieux, que ses visuels font vraiment pro — <strong class="text-white">c'est ça qui me donne envie de continuer</strong>.
            </p>
            <p>
              Je me spécialise en <strong class="text-white">identité visuelle</strong> et en <strong class="text-white">motion design</strong> parce que ce sont les deux disciplines qui me permettent de raconter une histoire — l'une de façon statique, l'autre en mouvement.
            </p>
          </div>
        </div>

        <!-- Citation mise en valeur -->
        <div data-aos="fade-up" data-aos-delay="100">
          <blockquote class="relative bg-gradient-to-br from-violet-800/60 to-violet-900/60 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-violet-600/30">
            <div class="absolute -top-5 left-8 text-7xl text-pink-400/40 font-serif leading-none select-none">"</div>
            <p class="text-white text-xl md:text-2xl font-medium leading-relaxed pt-4">
              Une petite entreprise qui démarre n'a pas moins besoin d'une belle image — elle en a souvent <em>plus</em> besoin, pour se démarquer dès le premier regard.
            </p>
            <footer class="mt-6 flex items-center gap-3">
              <div class="w-10 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500"></div>
              <span class="text-violet-300 font-semibold">Lola Herpin</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>

  <!-- Mes valeurs -->
  <section class="py-20 lg:py-28 px-4 md:px-6 lg:px-8 xl:px-12">
    <div class="w-full max-w-[1400px] mx-auto">
      <div class="text-center mb-14" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Mes valeurs</h2>
        <p class="text-violet-300 text-lg max-w-xl mx-auto">Ce qui guide chaque projet que j'accompagne.</p>
      </div>
      <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
        {#each values as v, i}
          <div
            class="relative bg-gradient-to-b from-violet-800/50 to-violet-900/50 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-violet-700/40 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div class="w-14 h-14 bg-gradient-to-r {v.gradient} rounded-2xl flex items-center justify-center text-2xl mb-6">
              {v.icon}
            </div>
            <h3 class="text-white text-xl lg:text-2xl font-bold mb-3">{v.title}</h3>
            <p class="text-violet-200 leading-relaxed">{v.desc}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Comment je travaille -->
  <section class="bg-white/5 backdrop-blur-sm py-20 lg:py-28 px-4 md:px-6 lg:px-8 xl:px-12">
    <div class="w-full max-w-[1400px] mx-auto">
      <div class="text-center mb-14" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Comment ça se passe</h2>
        <p class="text-violet-300 text-lg max-w-xl mx-auto">Un process simple et transparent, de la première prise de contact à la livraison.</p>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {#each steps as s, i}
          <div
            class="relative p-8 rounded-3xl bg-gradient-to-b from-violet-800/40 to-violet-900/40 border border-violet-700/40"
            data-aos="fade-up"
            data-aos-delay={i * 80}
          >
            <!-- Numéro -->
            <div class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-pink-400/60 to-violet-400/20 mb-4 select-none">
              {s.num}
            </div>
            <h3 class="text-white text-xl font-bold mb-3">{s.title}</h3>
            <p class="text-violet-200 text-sm leading-relaxed">{s.desc}</p>
            <!-- Connecteur -->
            {#if i < steps.length - 1}
              <div class="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-500/50 to-violet-500/50"></div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- CTA final -->
  <section class="py-20 lg:py-28 px-4 md:px-6 lg:px-8 xl:px-12 text-center" data-aos="fade-up">
    <div class="max-w-2xl mx-auto">
      <p class="text-violet-300 text-lg mb-4">Vous aussi vous démarrez quelque chose ?</p>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
        Construisons votre image ensemble.
      </h2>
      <a
        href="/contact"
        class="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/30 hover:scale-105"
      >
        Demander un devis gratuit
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </section>

</main>
