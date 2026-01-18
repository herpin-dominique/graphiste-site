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

<main class="min-h-screen bg-gradient-to-br from-violet-950 via-purple-900 to-violet-900 px-4 md:px-6 py-12">
  <!-- Header -->
  <div class="text-center mb-12" data-aos="fade-up">
    <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
      Contactez-moi
    </h1>
    <p class="text-violet-200 text-lg max-w-2xl mx-auto">
      Une idee, un projet ? Discutons-en ensemble !
    </p>
  </div>

  <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

    <!-- Colonne gauche : Informations -->
    <div class="space-y-6" data-aos="fade-up" data-aos-delay="100">

      <!-- Card Email -->
      <div class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-6 rounded-2xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
        <div class="absolute -top-3 left-6">
          <span class="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Email
          </span>
        </div>
        <div class="flex items-center gap-4 mt-4">
          <div class="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div>
            <p class="text-violet-300 text-sm">Ecrivez-moi a</p>
            <a href="mailto:contact@herpincreative.studio" class="text-white font-semibold hover:text-pink-300 transition-colors">
              contact@herpincreative.studio
            </a>
          </div>
        </div>
      </div>

      <!-- Card Reseaux sociaux -->
      <div class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-6 rounded-2xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
        <div class="absolute -top-3 left-6">
          <span class="bg-violet-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Reseaux
          </span>
        </div>
        <div class="flex items-center gap-4 mt-4">
          <div class="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div>
            <p class="text-violet-300 text-sm">Suivez-moi sur</p>
            <a href="https://instagram.com/herpincreativestudio" target="_blank" rel="noopener" class="text-white font-semibold hover:text-violet-300 transition-colors">
              @herpincreativestudio
            </a>
          </div>
        </div>
      </div>

      <!-- Card Localisation -->
      <div class="relative bg-gradient-to-b from-violet-900/80 to-violet-950/80 backdrop-blur-sm p-6 rounded-2xl border border-violet-700/50 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/10">
        <div class="absolute -top-3 left-6">
          <span class="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Localisation
          </span>
        </div>
        <div class="flex items-center gap-4 mt-4">
          <div class="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
          <div>
            <p class="text-violet-300 text-sm">Basee a</p>
            <p class="text-white font-semibold">Caen, Normandie</p>
          </div>
        </div>
      </div>

      <!-- Message d'encouragement -->
      <div class="bg-violet-800/30 p-6 rounded-2xl border border-violet-600/30">
        <p class="text-violet-200 text-sm leading-relaxed">
          Vous avez un projet creatif, une idee ou une collaboration en tete ?
          N'hesitez pas a m'envoyer un message, je vous repondrai sous 48h.
        </p>
      </div>
    </div>

    <!-- Colonne droite : Formulaire -->
    <div
      class="relative bg-gradient-to-b from-violet-800/90 to-violet-950/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border-2 border-pink-500/50 hover:border-pink-400/70 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/10"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <!-- Tag -->
      <div class="absolute -top-3 left-6">
        <span class="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Formulaire
        </span>
      </div>

      <h2 class="text-2xl font-bold text-white mt-4 mb-6">Envoyez-moi un message</h2>

      <form
        action="https://formspree.io/f/xgvlgeqb"
        method="POST"
        class="space-y-5"
      >
        <!-- Nom -->
        <div>
          <label for="name" class="block text-sm font-medium text-violet-200 mb-2">
            Votre nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jean Dupont"
            class="w-full px-4 py-3 bg-violet-900/50 border border-violet-600/50 text-white rounded-xl placeholder-violet-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-violet-200 mb-2">
            Votre email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="exemple@domaine.com"
            class="w-full px-4 py-3 bg-violet-900/50 border border-violet-600/50 text-white rounded-xl placeholder-violet-400 focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
          />
        </div>

        <!-- Sujet -->
        <div>
          <label for="subject" class="block text-sm font-medium text-violet-200 mb-2">
            Sujet
          </label>
          <select
            id="subject"
            name="subject"
            class="w-full px-4 py-3 bg-violet-900/50 border border-violet-600/50 text-white rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
          >
            <option value="devis">Demande de devis</option>
            <option value="collaboration">Collaboration</option>
            <option value="question">Question</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <!-- Message -->
        <div>
          <label for="message" class="block text-sm font-medium text-violet-200 mb-2">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Decrivez votre projet ou votre demande..."
            class="w-full px-4 py-3 bg-violet-900/50 border border-violet-600/50 text-white rounded-xl placeholder-violet-400 resize-none focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
          ></textarea>
        </div>

        <!-- Bouton -->
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-400 hover:to-violet-400 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/30 flex items-center justify-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
          Envoyer le message
        </button>
      </form>
    </div>
  </div>

  <!-- Note -->
  <p class="text-center text-violet-300 mt-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
    Je reponds generalement sous 24 a 48 heures. Pour les projets urgents, n'hesitez pas a le preciser dans votre message.
  </p>
</main>
