<script lang="ts">
  import { onMount } from "svelte";
  import AOS from "aos";

  onMount(() => {
    AOS.init({ duration: 600, once: true });
  });
</script>

<svelte:head>
  <title>Contact - Herpin Creative Studio</title>
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
      Une idée, un projet ? Discutons-en ensemble !
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

    <!-- Colonne droite : Formulaire -->
    <div
      class="relative bg-gradient-to-b from-violet-800/90 to-violet-950/90 backdrop-blur-sm p-6 md:p-10 lg:p-12 rounded-3xl border-2 border-pink-500/50 hover:border-pink-400/70 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <!-- Tag -->
      <div class="absolute -top-4 left-6 md:left-8 lg:left-10">
        <span
          class="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm md:text-base lg:text-lg font-bold px-4 md:px-5 lg:px-6 py-2 lg:py-3 rounded-full uppercase tracking-wider"
        >
          Formulaire
        </span>
      </div>

      <h2
        class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mt-6 lg:mt-8 mb-6 md:mb-8 lg:mb-10"
      >
        Envoyez-moi un message
      </h2>

      <form
        action="https://formspree.io/f/xgvlgeqb"
        method="POST"
        class="space-y-5 md:space-y-6 lg:space-y-8"
      >
        <!-- Nom -->
        <div>
          <label
            for="name"
            class="block text-base md:text-lg lg:text-xl font-medium text-violet-100 mb-2 md:mb-3"
          >
            Votre nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jean Dupont"
            class="w-full px-4 md:px-5 lg:px-6 py-3 md:py-4 lg:py-5 bg-violet-900/50 border border-violet-600/50 text-white text-base md:text-lg lg:text-xl rounded-xl md:rounded-2xl placeholder-violet-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
          />
        </div>

        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-base md:text-lg lg:text-xl font-medium text-violet-100 mb-2 md:mb-3"
          >
            Votre email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="exemple@domaine.com"
            class="w-full px-4 md:px-5 lg:px-6 py-3 md:py-4 lg:py-5 bg-violet-900/50 border border-violet-600/50 text-white text-base md:text-lg lg:text-xl rounded-xl md:rounded-2xl placeholder-violet-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
          />
        </div>

        <!-- Sujet -->
        <div>
          <label
            for="subject"
            class="block text-base md:text-lg lg:text-xl font-medium text-violet-100 mb-2 md:mb-3"
          >
            Sujet
          </label>
          <select
            id="subject"
            name="subject"
            class="w-full px-4 md:px-5 lg:px-6 py-3 md:py-4 lg:py-5 bg-violet-900/50 border border-violet-600/50 text-white text-base md:text-lg lg:text-xl rounded-xl md:rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
          >
            <option value="devis">Demande de devis</option>
            <option value="collaboration">Collaboration</option>
            <option value="question">Question</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <!-- Message -->
        <div>
          <label
            for="message"
            class="block text-base md:text-lg lg:text-xl font-medium text-violet-100 mb-2 md:mb-3"
          >
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            placeholder="Décrivez votre projet ou votre demande..."
            class="w-full px-4 md:px-5 lg:px-6 py-3 md:py-4 lg:py-5 bg-violet-900/50 border border-violet-600/50 text-white text-base md:text-lg lg:text-xl rounded-xl md:rounded-2xl placeholder-violet-400 resize-none focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
          ></textarea>
        </div>

        <!-- Bouton -->
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold py-4 md:py-5 lg:py-6 px-6 md:px-8 rounded-xl md:rounded-2xl text-lg md:text-xl lg:text-2xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 flex items-center justify-center gap-2 md:gap-3"
        >
          <svg
            class="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
          Envoyer le message
        </button>
      </form>
    </div>
  </div>

  <!-- Note -->
  <p
    class="text-center text-violet-200 mt-12 md:mt-16 lg:mt-20 max-w-4xl mx-auto text-base md:text-xl lg:text-2xl xl:text-3xl leading-relaxed px-2"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    Je réponds généralement sous 24 à 48 heures. Pour les projets urgents,
    n'hésitez pas à le préciser dans votre message.
  </p>
</main>
