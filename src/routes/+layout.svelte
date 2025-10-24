<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import { onMount } from "svelte";
  import "../app.css";

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  let scrolled = false;
  let threshold = 24; // px de scroll avant que le header devienne opaque

  onMount(() => {
    const onScroll = () => {
      scrolled = window.scrollY > threshold;
    };
    onScroll(); // init
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<!-- Header -->
<Header links={navLinks} transparent={!scrolled} />

<!-- Contenu principal -->
<main class="pt-20">
  <slot />
  <!-- indispensable pour afficher les pages enfants -->
</main>

<!-- Footer -->
<footer class="bg-violet-900 text-violet-200 py-6 text-center">
  © 2025 Lola Herpin. Tous droits réservés.
</footer>
