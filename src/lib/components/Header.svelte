<script lang="ts">
  import { page } from "$app/stores";
  import { fade, fly } from "svelte/transition";

  export let links: { href: string; label: string }[] = [];
  export let moreLinks: { href: string; label: string }[] = [];
  export let transparent = false;
  export let scrolled = false;

  let isOpen = false;
  let isMoreOpen = false;

  function closeMenu() {
    isOpen = false;
  }

  function toggleMore() {
    isMoreOpen = !isMoreOpen;
  }

  function closeMore() {
    isMoreOpen = false;
  }

  $: isMoreActive = moreLinks.some(l => $page.url.pathname === l.href);
</script>

<header
  class="fixed top-0 left-0 w-full z-50 transition-all duration-500 {transparent ? 'bg-transparent' : 'bg-violet-950/95 backdrop-blur-lg shadow-lg'}"
>
  <div class="w-full flex justify-between items-center px-6 md:px-12 lg:px-16 xl:px-24 transition-all duration-500 {scrolled ? 'py-2 md:py-3' : 'py-5 md:py-8'}">
    <!-- Logo -->
    <a href="/" class="relative z-10 group">
      <img
        src="/LOGO HERPIN CREATIVE STUDIOb_4.svg"
        alt="Herpin Creative Studio"
        class="h-auto transition-all duration-500 group-hover:scale-105 {scrolled ? 'w-[100px] md:w-[160px] lg:w-[200px]' : 'w-[160px] md:w-[280px] lg:w-[340px] xl:w-[400px]'}"
        loading="lazy"
      />
    </a>

    <!-- Menu desktop -->
    <nav class="hidden md:flex items-center gap-1 lg:gap-2">
      {#each links as link}
        <a
          href={link.href}
          class="relative px-3 lg:px-4 py-2 font-bold uppercase tracking-wide transition-all duration-300 rounded-full text-xs lg:text-sm xl:text-base whitespace-nowrap {$page.url.pathname === link.href ? 'text-white bg-violet-600' : 'text-violet-100 hover:text-white hover:bg-white/10'}"
        >
          {link.label}
        </a>
      {/each}

      {#if moreLinks.length > 0}
        <div class="relative">
          <button
            on:click={toggleMore}
            class="relative px-3 lg:px-4 py-2 font-bold uppercase tracking-wide transition-all duration-300 rounded-full flex items-center gap-1 text-xs lg:text-sm xl:text-base whitespace-nowrap {isMoreActive ? 'text-white bg-violet-600' : 'text-violet-100 hover:text-white hover:bg-white/10'}"
          >
            Plus
            <svg class="w-4 h-4 transition-transform duration-200 {isMoreOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {#if isMoreOpen}
            <div
              class="absolute right-0 top-full mt-2 w-44 bg-violet-950/98 backdrop-blur-lg rounded-2xl shadow-xl border border-violet-800 overflow-hidden z-50"
              transition:fade={{ duration: 150 }}
            >
              {#each moreLinks as link}
                <a
                  href={link.href}
                  on:click={closeMore}
                  class="block px-5 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-200 {$page.url.pathname === link.href ? 'text-white bg-violet-600' : 'text-violet-100 hover:text-white hover:bg-violet-800/50'}"
                >
                  {link.label}
                </a>
              {/each}
            </div>

            <!-- Overlay pour fermer -->
            <button
              class="fixed inset-0 z-40"
              on:click={closeMore}
              aria-label="Fermer"
              tabindex="-1"
            ></button>
          {/if}
        </div>
      {/if}
    </nav>

    <!-- Bouton menu mobile -->
    <button
      class="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-violet-600/20 hover:bg-violet-600/40 transition-colors"
      aria-label="Menu"
      on:click={() => (isOpen = !isOpen)}
    >
      <span
        class="w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center {isOpen ? 'rotate-45 translate-y-2' : ''}"
      ></span>
      <span
        class="w-5 h-0.5 bg-white rounded-full transition-all duration-300 {isOpen ? 'opacity-0' : ''}"
      ></span>
      <span
        class="w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center {isOpen ? '-rotate-45 -translate-y-2' : ''}"
      ></span>
    </button>
  </div>

  <!-- Menu mobile dropdown (dans le header) -->
  {#if isOpen}
    <nav
      class="md:hidden bg-violet-950/98 backdrop-blur-lg border-t border-violet-800"
      transition:fade={{ duration: 150 }}
    >
      <div class="flex flex-col py-4">
        {#each links as link, i}
          <a
            href={link.href}
            class="px-6 py-3 text-lg font-medium uppercase tracking-wider transition-all duration-300 {$page.url.pathname === link.href ? 'text-violet-300 bg-violet-800/50' : 'text-white/80 hover:text-white hover:bg-violet-800/30'}"
            on:click={closeMenu}
            in:fly={{ y: -10, delay: i * 30, duration: 200 }}
          >
            {link.label}
          </a>
        {/each}
      </div>
    </nav>
  {/if}
</header>

<!-- Overlay pour fermer le menu en cliquant ailleurs -->
{#if isOpen}
  <button
    class="md:hidden fixed inset-0 bg-black/50 z-40"
    on:click={closeMenu}
    aria-label="Fermer le menu"
    transition:fade={{ duration: 150 }}
  ></button>
{/if}
