<script lang="ts">
  export let title: string;
  export let photo: string;
  // On accepte n'importe quel composant Svelte (typeof d'une icône)
  export let icon: typeof import("phosphor-svelte").ImageSquare;
  export let onClick: () => void;
</script>

<button
  type="button"
  class="bg-violet-950 p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:border hover:border-violet-500 transition-all duration-300 ease-in-out cursor-pointer animate-fade-in w-full text-left"
  on:click={onClick}
>
  <div class="flex items-center gap-2 mb-4">
    <svelte:component
      this={icon}
      size={24}
      weight="duotone"
      class="text-violet-400"
    />
    <h3 class="text-lg font-semibold text-violet-100">{title}</h3>
  </div>
  <img
    src={photo}
    alt={`Projet ${title}`}
    class="w-full h-40 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
  />
</button>

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
    animation: fade-in 0.6s ease-out;
  }
</style>
