<script lang="ts">
  import Layout from "$lib/components/Layout.svelte";
</script>

<svelte:head>
  <title>Contact - Graphiste</title>
</svelte:head>

<Layout pageTitle="Contact" bannerImage="/src/lib/assets/BANNIERE.png">
  <a
    href="/"
    class="inline-block mb-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition duration-300"
  >
    ← Retour à l'accueil
  </a>

  <main
    class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-6 py-12"
  >
    <section
      class="max-w-lg w-full bg-white p-8 rounded-xl shadow-xl animate-fade-in"
    >
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">
        Contactez-moi
      </h1>

      <form
        action="https://formspree.io/f/xgvlgeqb"
        method="POST"
        class="space-y-6"
      >
        <!-- Email -->
        <div>
          <label
            for="email"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Votre email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="exemple@domaine.com"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        <!-- Message -->
        <div>
          <label
            for="message"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Votre message</label
          >
          <textarea
            id="message"
            name="message"
            rows="6"
            required
            placeholder="Écrivez votre message ici..."
            class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          ></textarea>
        </div>

        <!-- Redirection après envoi -->
        <input type="hidden" name="_redirect" value="http://localhost:5173/" />

        <!-- Bouton -->
        <button
          type="submit"
          class="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-md hover:from-blue-700 hover:to-blue-600 transition duration-300"
        >
          ✉️ Envoyer
        </button>
      </form>
    </section>
  </main>
</Layout>

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
