<script>
  import { slide } from "svelte/transition";

  // #a0e77f #64be48
</script>

<style>
  div {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: transparent;
    position: relative;
    margin: 2rem auto;
  }
  div::after,
  div::before {
    content: "";
    display: block;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
  }
  div::after {
    background-color: #f4f4f4;
    position: absolute;
    top: 0;
    left: 0;
    border: 4px solid transparent;
    border-top-color: #a0e77f;
    border-bottom-color: #a0e77f;
    animation: spinny 2s linear infinite;
  }
  @keyframes spinny {
    0% {
      transform: rotate(0deg) scale(1);
      background-color: #64be48;
      border-top-color: #a0e77f;
      border-bottom-color: #a0e77f;
    }
    50% {
      transform: rotate(180deg) scale(1.2);
      background-color: #a0e77f;
      border-top-color: #64be48;
      border-bottom-color: #64be48;
    }
    100% {
      transform: rotate(360deg) scale(1);
      background-color: #64be48;
      border-top-color: #a0e77f;
      border-bottom-color: #a0e77f;
    }
  }
</style>

<div
  in:slide={{ delay: 300, duration: 300 }}
  out:slide={{ duration: 300 }}
  class="spinner" />
