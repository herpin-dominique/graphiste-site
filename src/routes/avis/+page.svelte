<script lang="ts">
  const testimonials = [
    {
      name: "Gabriel S.",
      role: "Potier artisan — Région caennaise",
      text: "Lola a vraiment pris le temps de comprendre mon métier, ma façon de travailler, ce qui fait l'essence de la poterie. Elle n'a pas cherché à imposer une direction — elle a écouté, posé les bonnes questions, et a su traduire visuellement ce que j'avais du mal à formuler moi-même. Le résultat colle parfaitement à mon activité. Je suis ravi de cette collaboration et je la recommande à tous les artisans qui cherchent quelqu'un qui s'investit vraiment dans votre projet.",
      stars: 5,
      service: "Identité visuelle artisanale",
      gradient: "from-amber-600 to-orange-500",
    },
    {
      name: "Sophie M.",
      role: "Fondatrice d'une boutique — Normandie",
      text: "Lola a su capter l'essence de ma boutique dès notre premier échange. Le logo qu'elle a créé reflète exactement l'univers que je voulais transmettre. Mes clientes me complimentent dessus régulièrement. Je recommande sans hésitation.",
      stars: 5,
      service: "Logo & Charte graphique",
      gradient: "from-pink-500 to-violet-500",
    },
    {
      name: "Thomas R.",
      role: "Artisan indépendant — Calvados",
      text: "J'avais un logo que j'osais à peine mettre sur mes devis. Lola a tout repris avec une vraie démarche professionnelle : elle m'a posé les bonnes questions, proposé plusieurs pistes, et le résultat est bluffant. Mon activité a enfin une image à la hauteur de mon travail.",
      stars: 5,
      service: "Refonte identité visuelle",
      gradient: "from-violet-500 to-blue-500",
    },
  ];
</script>

<svelte:head>
  <title>Avis clients — Herpin Creative Studio</title>
  <meta name="description" content="Découvrez les témoignages de clients satisfaits par Herpin Creative Studio : logos, chartes graphiques, motion design. Graphiste freelance à Caen, Normandie." />
</svelte:head>

<!-- ── HERO ── -->
<section class="bg-gradient-to-br from-violet-950 via-purple-950 to-violet-900 py-24 md:py-32 text-center px-6">
  <div class="max-w-3xl mx-auto">
    <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-violet-200 text-sm font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
      Témoignages
    </div>
    <h1 class="font-montserrat text-4xl md:text-5xl font-black text-white leading-tight mb-6">
      Ce que disent<br/><span class="bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text text-transparent">mes clients</span>
    </h1>
    <p class="text-violet-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
      Des entrepreneurs, artisans et indépendants qui ont fait confiance à Herpin Creative Studio pour leur identité visuelle.
    </p>
    <!-- Stars -->
    <div class="flex items-center justify-center gap-2 mt-8">
      <div class="flex gap-1">
        {#each Array(5) as _}
          <svg class="w-6 h-6 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        {/each}
      </div>
      <span class="text-white font-bold text-xl">5/5</span>
      <span class="text-violet-400 text-sm">· {testimonials.length} premiers avis</span>
    </div>
  </div>
</section>

<!-- ── TESTIMONIALS GRID ── -->
<section class="bg-gray-50 py-20 px-6">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each testimonials as t, i}
        <article
          class="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
         
          data-aos-delay={i * 80}
        >
          <!-- Stars -->
          <div class="flex gap-1">
            {#each Array(t.stars) as _}
              <svg class="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            {/each}
          </div>

          <!-- Quote -->
          <p class="text-gray-600 leading-relaxed text-sm flex-1">
            « {t.text} »
          </p>

          <!-- Service tag -->
          <div class="inline-flex w-fit">
            <span class="bg-gradient-to-r {t.gradient} text-white text-xs font-semibold px-3 py-1 rounded-full">
              {t.service}
            </span>
          </div>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-2 border-t border-gray-100">
            <div class="w-9 h-9 rounded-full bg-gradient-to-br {t.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              {t.name[0]}
            </div>
            <div>
              <p class="font-semibold text-gray-800 text-sm">{t.name}</p>
              <p class="text-gray-400 text-xs">{t.role}</p>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>

<!-- ── LAISSER UN AVIS ── -->
<section class="bg-white py-20 px-6">
  <div class="max-w-3xl mx-auto text-center">
    <h2 class="font-montserrat text-3xl md:text-4xl font-black text-violet-900 mb-4">
      Vous avez travaillé avec moi ?
    </h2>
    <p class="text-gray-500 text-lg mb-10 leading-relaxed">
      Votre avis compte énormément — pour moi, et pour les entrepreneurs qui cherchent un graphiste de confiance.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="https://g.page/r/herpin-creative-studio/review"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-3 bg-white border-2 border-gray-200 hover:border-violet-400 text-gray-700 hover:text-violet-700 font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow"
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Laisser un avis Google
      </a>
      <a
        href="/contact"
        class="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-400 hover:to-violet-500 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
      >
        Démarrer un projet
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
    </div>
  </div>
</section>
