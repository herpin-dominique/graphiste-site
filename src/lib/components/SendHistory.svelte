<script lang="ts">
  import type { SendEvent } from '$lib/stores/billing';
  import { FileText, Send, Bell, Edit, CheckCircle, Clock } from 'lucide-svelte';

  export let events: SendEvent[] = [];

  function getEventIcon(type: SendEvent['type']) {
    switch (type) {
      case 'created': return FileText;
      case 'sent': return Send;
      case 'reminder': return Bell;
      case 'updated': return Edit;
      case 'paid': return CheckCircle;
      default: return Clock;
    }
  }

  function getEventColor(type: SendEvent['type']): string {
    switch (type) {
      case 'created': return 'bg-blue-500';
      case 'sent': return 'bg-violet-500';
      case 'reminder': return 'bg-orange-500';
      case 'updated': return 'bg-gray-500';
      case 'paid': return 'bg-green-500';
      default: return 'bg-gray-400';
    }
  }

  function getEventLabel(type: SendEvent['type']): string {
    switch (type) {
      case 'created': return 'Créé';
      case 'sent': return 'Envoyé';
      case 'reminder': return 'Relance';
      case 'updated': return 'Modifié';
      case 'paid': return 'Payé';
      default: return 'Événement';
    }
  }

  function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  // Trier les événements du plus récent au plus ancien
  $: sortedEvents = [...events].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
</script>

<div class="space-y-0">
  {#if sortedEvents.length === 0}
    <p class="text-violet-300 text-center py-4">Aucun historique</p>
  {:else}
    <div class="relative">
      <!-- Ligne verticale -->
      <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-violet-500/30"></div>

      {#each sortedEvents as event, index}
        <div class="relative flex items-start gap-4 pb-6 last:pb-0">
          <!-- Point sur la timeline -->
          <div class="relative z-10 flex-shrink-0 w-8 h-8 rounded-full {getEventColor(event.type)}
                      flex items-center justify-center shadow-md">
            <svelte:component this={getEventIcon(event.type)} class="w-4 h-4 text-white" />
          </div>

          <!-- Contenu -->
          <div class="flex-1 min-w-0 pt-0.5">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="font-medium text-white">
                {getEventLabel(event.type)}
              </span>
              <span class="text-xs text-violet-300">
                {formatDate(event.date)}
              </span>
            </div>

            {#if event.note}
              <p class="mt-1 text-sm text-violet-200">
                {event.note}
              </p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
