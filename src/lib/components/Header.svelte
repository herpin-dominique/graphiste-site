<script lang="ts">
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";

  export let links: { href: string; label: string }[] = [];
  export let transparent = false;

  let isOpen = false;

  const base =
    "fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300";
  const solid = "bg-violet-900/95 text-white shadow-md";
  const glass = "bg-transparent text-white";
</script>

<header class={`${base} ${transparent ? glass : solid}`}>
  <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
    <!-- Logo -->
    <a href="/" class="text-2xl font-bold text-violet-300">Lola</a>

    <!-- Menu desktop -->
    <nav class="hidden md:flex space-x-8">
      {#each links as link}
        <a
          href={link.href}
          class={`transition-colors duration-200 ${
            $page.url.pathname === link.href
              ? "text-violet-300 border-b-2 border-violet-300 pb-1"
              : "hover:text-violet-300"
          }`}
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <!-- Bouton mobile -->
    <button
      class="md:hidden p-2 text-violet-300 focus:outline-none"
      aria-label="Menu"
      on:click={() => (isOpen = !isOpen)}
    >
      {#if isOpen}
        ✖
      {:else}
        ☰
      {/if}
    </button>
  </div>

  <!-- Menu mobile -->
  {#if isOpen}
    <nav
      class={`md:hidden px-6 py-4 space-y-4 transition-colors duration-300 ${
        transparent ? "bg-violet-800/70" : "bg-violet-800"
      }`}
      transition:fade
    >
      {#each links as link}
        <a
          href={link.href}
          class={`block transition-colors duration-200 ${
            $page.url.pathname === link.href
              ? "text-violet-300 font-semibold"
              : "hover:text-violet-300"
          }`}
          on:click={() => (isOpen = false)}
        >
          {link.label}
        </a>
      {/each}
    </nav>
  {/if}
</header>
