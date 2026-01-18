<main
  class="min-h-screen bg-gradient-to-br from-violet-900 to-violet-700 px-6 md:px-12 lg:px-20 xl:px-32 py-10 text-white"
>
  <h2
    class="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-12 text-center text-violet-100 animate-fade-in"
  >
    Mes services
  </h2>

  <!-- Grille responsive -->
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1600px] mx-auto md:h-[calc(100vh-12rem)] auto-rows-auto animate-fade-in"
  >
    <!-- Carte 1 -->
    <div
      class="bg-violet-950 flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 rounded-xl"
    >
      <h3
        class="text-2xl sm:text-3xl md:text-4xl font-semibold text-violet-100 mb-6"
      >
        Identité visuelle
      </h3>
      <p
        class="text-base sm:text-lg md:text-2xl text-violet-300 text-center max-w-xl"
      >
        Création de logos, chartes graphiques et déclinaisons visuelles adaptées
        à vos besoins.
      </p>
    </div>

    <!-- Carte 2 -->
    <div
      class="bg-violet-950 flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 rounded-xl"
    >
      <h3
        class="text-2xl sm:text-3xl md:text-4xl font-semibold text-violet-100 mb-6"
      >
        Supports de communication
      </h3>
      <p
        class="text-base sm:text-lg md:text-2xl text-violet-300 text-center max-w-xl"
      >
        Affiches, brochures, flyers, cartes de visite, présentations
        professionnelles…
      </p>
    </div>

    <!-- Carte 3 -->
    <div
      class="bg-violet-950 flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 rounded-xl"
    >
      <h3
        class="text-2xl sm:text-3xl md:text-4xl font-semibold text-violet-100 mb-6"
      >
        Web & digital
      </h3>
      <p
        class="text-base sm:text-lg md:text-2xl text-violet-300 text-center max-w-xl"
      >
        Bannières, visuels pour réseaux sociaux, newsletters.
      </p>
    </div>

    <!-- Carte 4 -->
    <div
      class="bg-violet-950 flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 rounded-xl"
    >
      <h3
        class="text-2xl sm:text-3xl md:text-4xl font-semibold text-violet-100 mb-6"
      >
        Illustration
      </h3>
      <p
        class="text-base sm:text-lg md:text-2xl text-violet-300 text-center max-w-xl"
      >
        Illustrations sur mesure pour vos projets éditoriaux ou numériques.
      </p>
    </div>
  </div>
</main>

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.8s ease-out;
  }
</style>
