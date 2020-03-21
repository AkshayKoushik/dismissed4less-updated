<script>
  export let title = "",
    paragraph = "",
    style = "";
</script>

<style>
  div > h3::before,
  div > h3::after {
    content: "";
    display: inline-flex;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    background-size: 2rem 2rem;
    height: 2rem;
    width: 2rem;
    top: 0px;
    bottom: 0px;
    justify-content: center;
    align-items: center;
  }

  div > h3::before {
    background-image: url("/dismissed4less-steering-left.png");
    left: -2.5rem;
  }
  div > h3::after {
    background-image: url("/dismissed4less-steering-right.png");
    right: -2.5rem;
  }

  @media (min-width: 640px) {
    div > h3::before,
    div > h3::after {
      background-size: 2.5rem 2.5rem;
      height: 2.5rem;
      width: 2.5rem;
    }
    div > h3::before {
      left: -3.5rem;
    }
    div > h3::after {
      right: -3.5rem;
    }
  }

  @media (min-width: 768px) {
    div > h3::before,
    div > h3::after {
      background-size: 3.5rem 3.5rem;
      height: 3.5rem;
      width: 3.5rem;
    }
    div > h3::before {
      left: -4.5rem;
    }
    div > h3::after {
      right: -4.5rem;
    }

    div > p {
      text-align: center;
      font-size: 18px;
    }
  }

  @media (min-width: 1024px) {
    div > h3::before {
      left: -5rem;
    }
    div > h3::after {
      right: -5rem;
    }
  }

  @media (min-width: 1280px) {
    div > h3::before {
      left: -6rem;
    }
    div > h3::after {
      right: -6rem;
    }
  }
</style>

<div
  class="flex flex-col items-center mt-10 md:mt-16 lg:mt-20 xl:mt-24"
  {style}>
  <h3
    class="w-8/12 text-center flex items-center justify-center text-xl font-bold
    mt-8 mb-4 mx-auto relative sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
    {title}
  </h3>
  {#if paragraph.length > 0}
    <p class="text-center text-lg">{paragraph}</p>
  {/if}
</div>
