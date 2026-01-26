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
    { href: "/billing", label: "Facturation" },
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
<main class="pt-24 md:pt-32 lg:pt-36">
  <slot />
</main>

<!-- Footer -->
<footer class="bg-gradient-to-b from-violet-950 to-purple-950 text-violet-200">
  <div class="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16">
    <!-- Contenu principal du footer -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-12">
      <!-- Logo et description -->
      <div class="lg:col-span-1">
        <a href="/" class="inline-block mb-4">
          <img
            src="/LOGO HERPIN CREATIVE STUDIOb_4.svg"
            alt="Herpin Creative Studio"
            class="w-[180px] md:w-[220px] h-auto"
          />
        </a>
        <p class="text-violet-300 text-sm md:text-base leading-relaxed">
          Studio de création graphique et motion design basé à Caen, Normandie.
        </p>
      </div>

      <!-- Liens rapides -->
      <div>
        <h3 class="text-white font-bold text-lg mb-4 uppercase tracking-wider">Navigation</h3>
        <ul class="space-y-2">
          <li><a href="/" class="text-violet-300 hover:text-white transition-colors">Accueil</a></li>
          <li><a href="/portfolio" class="text-violet-300 hover:text-white transition-colors">Portfolio</a></li>
          <li><a href="/services" class="text-violet-300 hover:text-white transition-colors">Services</a></li>
          <li><a href="/tarifs" class="text-violet-300 hover:text-white transition-colors">Forfaits</a></li>
          <li><a href="/contact" class="text-violet-300 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h3 class="text-white font-bold text-lg mb-4 uppercase tracking-wider">Contact</h3>
        <ul class="space-y-3">
          <li>
            <a href="mailto:herpinlavie@gmail.com" class="text-violet-300 hover:text-pink-400 transition-colors flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              herpinlavie@gmail.com
            </a>
          </li>
          <li class="flex items-center gap-2 text-violet-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Caen, Normandie
          </li>
        </ul>

        <!-- Réseaux sociaux -->
        <div class="mt-6">
          <h4 class="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Suivez-moi</h4>
          <div class="flex gap-3">
            <a
              href="https://instagram.com/herpincreativestudio"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-violet-800/50 hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 rounded-lg flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/lola-herpin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-violet-800/50 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://www.behance.net/lolaherpin"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 bg-violet-800/50 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-all duration-300"
              aria-label="Behance"
            >
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Mentions légales -->
      <div>
        <h3 class="text-white font-bold text-lg mb-4 uppercase tracking-wider">Mentions légales</h3>
        <ul class="space-y-2 text-sm text-violet-300">
          <li><strong class="text-violet-200">Statut :</strong> Auto-entrepreneur</li>
          <li><strong class="text-violet-200">Responsable :</strong> Lola Herpin</li>
          <li><strong class="text-violet-200">TVA :</strong> Non applicable (art. 293 B du CGI)</li>
          <li class="pt-2 text-xs leading-relaxed">
            Toutes les créations présentées sur ce site sont la propriété intellectuelle de Herpin Creative Studio.
            Toute reproduction ou utilisation sans autorisation est interdite.
          </li>
        </ul>
      </div>
    </div>

    <!-- Séparateur -->
    <div class="border-t border-violet-800/50 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-violet-400 text-sm">
          © {new Date().getFullYear()} Herpin Creative Studio. Tous droits réservés.
        </p>
        <p class="text-violet-500 text-xs">
          Site réalisé avec passion
        </p>
      </div>
    </div>
  </div>
</footer>
