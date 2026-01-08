<script lang="ts">
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";

  export let links: { href: string; label: string }[] = [];
  export let transparent = false;

  let isOpen = false;

  const base =
    "fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-300 border-b border-violet-700";
  const solid = "bg-violet-900/95 text-white shadow-md";
  const glass = "bg-transparent text-white";
</script>

<header class={`${base} ${transparent ? glass : solid}`}>
  <div
    class="max-w-7xl mx-auto flex justify-between md:justify-center items-center px-10 py-12"
  >
    <!-- Logo illustré -->
    <a href="/" class="block w-[220px] md:w-[300px] h-auto">
      <img
        src="/LOGO HERPIN CREATIVE STUDIOb_4.svg"
        alt="Herpin Creative Studio"
        class="w-full h-auto"
        loading="lazy"
      />
    </a>

    <!-- Menu desktop -->
    <nav class="hidden md:flex gap-16">
      {#each links as link}
        <a
          href={link.href}
          class={`text-3xl md:text-4xl font-semibold uppercase tracking-widest transition-colors duration-200 ${
            $page.url.pathname === link.href
              ? "text-violet-300 border-b-4 border-violet-300 pb-2"
              : "hover:text-violet-300"
          }`}
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <!-- Bouton mobile -->
    <button
      class="md:hidden p-3 text-violet-300 focus:outline-none text-3xl"
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
      class={`md:hidden px-8 py-6 space-y-6 transition-colors duration-300 ${
        transparent ? "bg-violet-800/70" : "bg-violet-800"
      }`}
      transition:fade
    >
      {#each links as link}
        <a
          href={link.href}
          class={`block text-2xl uppercase tracking-widest transition-colors duration-200 ${
            $page.url.pathname === link.href
              ? "text-violet-300 font-bold"
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
