<script lang="ts">
</script>

<svelte:head>
  <title>Contact - Graphiste</title>
</svelte:head>

<a
  href="/"
  class="inline-block mt-24 mb-6 bg-white text-violet-600 font-semibold px-6 py-3 rounded hover:bg-violet-100 transition duration-300"
>
  ← Retour à l'accueil
</a>

<main
  class="min-h-screen bg-gradient-to-br from-violet-900 to-violet-700 flex items-center justify-center px-6 py-12 text-white"
>
  <section
    class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-violet-950 p-12 rounded-xl shadow-xl animate-fade-in"
  >
    <!-- Colonne gauche : titre + texte -->
    <div class="flex flex-col justify-center">
      <h1 class="text-4xl font-display font-bold text-violet-100 mb-6">
        Contactez-moi
      </h1>
      <p class="text-violet-300 leading-relaxed">
        Vous avez un projet créatif, une idée ou une collaboration en tête ?
        N’hésitez pas à m’envoyer un message, je vous répondrai rapidement.
      </p>
    </div>

    <!-- Colonne droite : formulaire -->
    <form
      action="https://formspree.io/f/xgvlgeqb"
      method="POST"
      class="space-y-6"
    >
      <!-- Email -->
      <div>
        <label
          for="email"
          class="block text-sm font-medium text-violet-300 mb-1"
        >
          Votre email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="exemple@domaine.com"
          class="w-full px-4 py-3 border border-violet-600 bg-violet-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
        />
      </div>

      <!-- Message -->
      <div>
        <label
          for="message"
          class="block text-sm font-medium text-violet-300 mb-1"
        >
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          placeholder="Écrivez votre message ici..."
          class="w-full px-4 py-3 border border-violet-600 bg-violet-900 text-white rounded-lg shadow-sm resize-none focus:ring-2 focus:ring-violet-500 focus:outline-none transition"
        ></textarea>
      </div>

      <!-- Redirection après envoi -->
      <input type="hidden" name="_redirect" value="http://localhost:5173/" />

      <!-- Bouton -->
      <button
        type="submit"
        class="w-full bg-gradient-to-r from-violet-600 to-violet-500 text-white py-3 rounded-lg font-semibold shadow-md hover:from-violet-700 hover:to-violet-600 transition duration-300"
      >
        ✉️ Envoyer
      </button>
    </form>
  </section>
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
</style>
