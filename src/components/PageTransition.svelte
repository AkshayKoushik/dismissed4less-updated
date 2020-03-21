<script>
  import { slide } from "svelte/transition";
</script>

<main in:slide={{ delay: 300, duration: 300 }} out:slide={{ duration: 300 }}>
  <slot />
</main>
