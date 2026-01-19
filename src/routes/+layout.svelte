<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import "../app.css";
  import AOS from "aos";
  import "aos/dist/aos.css";

  onMount(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: -200, // Déclencher les animations plus tôt (même pour les éléments juste en dessous du viewport)
    });
  });

  // Réinitialiser AOS après chaque navigation pour que les animations fonctionnent
  afterNavigate(() => {
    // Scroller en haut de page
    window.scrollTo(0, 0);

    // Réinitialiser AOS
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  });

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/tarifs", label: "Forfaits" },
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

<!-- Header style magazine -->
<Header links={navLinks} transparent={!scrolled} />

<!-- Contenu principal -->
<main class="pt-20 md:pt-24">
  <slot />
</main>

<!-- Footer -->
<footer
  class="bg-violet-900 text-violet-200 py-10 text-center text-lg tracking-wide uppercase"
>
  © 2025 Lola Herpin. Tous droits réservés.
</footer>
