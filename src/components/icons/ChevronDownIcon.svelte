<script>
  export let turn = false;
</script>

<style>
  svg {
    color: #a8a8a8;
    transition: transform 250ms linear, color 250ms linear;
  }

  svg.open {
    transform: rotate(-180deg) translate(0, 2px);
  }
</style>

<svg
  class:open={turn}
  class="h-full w-full"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 10 16">
  <path d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z" />
</svg>
