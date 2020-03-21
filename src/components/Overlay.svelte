<script>
  export let showOverlay = true;
</script>

{#if showOverlay}
  <div
    class="w-full h-full fixed cursor-pointer z-20 inset-0 bg-overlay-bg"
    id="overlay"
    on:click />
{/if}
