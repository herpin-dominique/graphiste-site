<script lang="ts">
  import { page } from "$app/stores";
  import { fade, fly } from "svelte/transition";

  export let links: { href: string; label: string }[] = [];
  export let transparent = false;

  let isOpen = false;

  function closeMenu() {
    isOpen = false;
  }
</script>

<header
  class="fixed top-0 left-0 w-full z-50 transition-all duration-500 {transparent ? 'bg-transparent' : 'bg-violet-950/95 backdrop-blur-lg shadow-lg'}"
>
  <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 md:px-10 md:py-5">
    <!-- Logo -->
    <a href="/" class="relative z-10 group">
      <img
        src="/LOGO HERPIN CREATIVE STUDIOb_4.svg"
        alt="Herpin Creative Studio"
        class="w-[140px] md:w-[180px] h-auto transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </a>

    <!-- Menu desktop -->
    <nav class="hidden md:flex items-center gap-2">
      {#each links as link}
        <a
          href={link.href}
          class="relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-full {$page.url.pathname === link.href ? 'text-white bg-violet-600' : 'text-violet-100 hover:text-white hover:bg-white/10'}"
        >
          {link.label}
        </a>
      {/each}
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
