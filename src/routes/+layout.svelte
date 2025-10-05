<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();
  import "../app.css";
</script>

{@render children()}
