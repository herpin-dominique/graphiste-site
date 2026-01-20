<script lang="ts">
  import { authStore } from '$lib/stores/auth';
  import { Lock, Eye, EyeOff } from 'lucide-svelte';

  let password = '';
  let error = '';
  let loading = false;
  let showPassword = false;

  async function handleSubmit() {
    if (!password.trim()) {
      error = 'Veuillez entrer le mot de passe';
      return;
    }

    loading = true;
    error = '';

    try {
      const success = await authStore.login(password);
      if (!success) {
        error = 'Mot de passe incorrect';
        password = '';
      }
    } catch {
      error = 'Une erreur est survenue';
    } finally {
      loading = false;
    }
  }
</script>

<div class="min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 py-8 md:py-12 lg:py-16">
  <div class="w-full max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl">
    <div class="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">

      <!-- Header décoratif -->
      <div class="bg-gradient-to-r from-violet-600/30 to-purple-600/30 px-8 py-6 md:px-12 md:py-8 lg:px-16 lg:py-10 border-b border-white/10">
        <div class="flex items-center justify-center gap-4 md:gap-6">
          <div class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-violet-500/30">
            <Lock class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <div class="text-left">
            <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white">
              Espace Facturation
            </h1>
            <p class="text-violet-200 text-sm md:text-base lg:text-lg mt-1">
              Herpin Creative Studio
            </p>
          </div>
        </div>
      </div>

      <!-- Contenu principal -->
      <div class="p-8 md:p-12 lg:p-16 xl:p-20">
        <div class="max-w-md md:max-w-lg lg:max-w-xl mx-auto">

          <!-- Message d'accueil -->
          <div class="text-center mb-8 md:mb-10 lg:mb-12">
            <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2">
              Bienvenue
            </h2>
            <p class="text-violet-300/80 text-sm md:text-base lg:text-lg">
              Connectez-vous pour accéder à la gestion des devis et factures
            </p>
          </div>

          <!-- Formulaire -->
          <form on:submit|preventDefault={handleSubmit} class="space-y-6 md:space-y-8">
            <div>
              <label for="password" class="block text-sm md:text-base lg:text-lg font-medium text-violet-200 mb-3 md:mb-4">
                Mot de passe
              </label>
              <div class="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  bind:value={password}
                  placeholder="Entrez votre mot de passe"
                  disabled={loading}
                  class="w-full px-5 md:px-6 py-4 md:py-5 lg:py-6
                         bg-white/95 text-gray-900 text-base md:text-lg lg:text-xl
                         border-2 border-transparent rounded-xl
                         placeholder-gray-400
                         focus:ring-4 focus:ring-violet-500/50 focus:border-violet-500
                         disabled:opacity-50 transition-all duration-200
                         shadow-lg"
                />
                <button
                  type="button"
                  on:click={() => showPassword = !showPassword}
                  class="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-violet-600 transition-colors"
                >
                  {#if showPassword}
                    <EyeOff class="w-5 h-5 md:w-6 md:h-6" />
                  {:else}
                    <Eye class="w-5 h-5 md:w-6 md:h-6" />
                  {/if}
                </button>
              </div>
            </div>

            {#if error}
              <div class="bg-red-500/20 border border-red-400/50 rounded-xl p-4 md:p-5 backdrop-blur-sm">
                <p class="text-red-200 text-sm md:text-base text-center font-medium">
                  {error}
                </p>
              </div>
            {/if}

            <button
              type="submit"
              disabled={loading}
              class="w-full py-4 md:py-5 lg:py-6 px-6
                     bg-gradient-to-r from-violet-600 to-purple-600
                     text-white text-base md:text-lg lg:text-xl font-bold rounded-xl
                     shadow-xl shadow-violet-500/30
                     hover:from-violet-500 hover:to-purple-500 hover:shadow-2xl hover:shadow-violet-500/40
                     focus:ring-4 focus:ring-violet-500/50
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              {#if loading}
                <span class="flex items-center justify-center gap-3">
                  <svg class="animate-spin h-6 w-6 md:h-7 md:w-7" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Connexion en cours...
                </span>
              {:else}
                Se connecter
              {/if}
            </button>
          </form>

          <!-- Footer -->
          <div class="mt-10 md:mt-12 lg:mt-14 pt-6 md:pt-8 border-t border-white/10">
            <p class="text-center text-violet-300/50 text-xs md:text-sm lg:text-base">
              Accès réservé aux administrateurs du studio
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
