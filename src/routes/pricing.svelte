<script>
  import { ChevronLeftIcon, ChevronRightIcon } from "svelte-feather-icons";

  import PageTransition from "../components/PageTransition.svelte";
  import TitleSection from "../components/TitleSection.svelte";
</script>

<style>
  a {
    animation: breathing 3s linear infinite;
    -ms-animation: breathing 3s linear infinite;
    -webkit-animation: breathing 3s linear infinite;
    -moz-animation: breathing 3s linear infinite;
    -o-animation: breathing 3s linear infinite;
  }
  .hero {
    height: 45vh;
  }
  .hero img {
    top: -10px;
  }
  .hero > div {
    top: 25%;
  }
  div > span {
    left: -50%;
  }
  hr {
    top: 50%;
  }
  @media (min-width: 400px) {
    .hero > div {
      top: 35%;
    }
  }
  @media (min-width: 768px) {
    .hero {
      height: 60vh;
    }
  }
  @media (min-width: 1024px) {
    .hero {
      height: 65vh;
    }
  }
</style>

<svelte:head>
  <title>dismissed4less - Pricing Page</title>
</svelte:head>

<PageTransition>
  <section class="hero relative z-10">
    <img
      class="h-full w-full absolute"
      src="./Pricing-Hero-Image.png"
      alt="Pricing Hero Image" />
    <div class="absolute font-black text-center md:inset-x-0">
      <h3 class="font-black text-xl md:text-3xl lg:text-4xl">
        Why Use Dismissed 4 Less?
      </h3>
      <p class="font-medium mt-1 text-lg font-base md:text-xl lg:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        quidem.
      </p>
    </div>
  </section>
  <TitleSection title="MOST AFFORDABLE DISMISSAL SERVICE" />
  <div
    class="rounded-lg w-9/12 mx-auto text-center bg-white mt-4 lg:mt-6 lg:w-7/12
    xl:w-5/12">
    <h1
      class="border-black border-dotted border-b my-2 font-black py-6
      lg:text-3xl xl:text-4xl">
      ANY CALIFORNIA INFRACTION
    </h1>
    <div class="flex justify-center py-3">
      <div
        class="text-brand-green-default relative text-5xl font-black lg:text-6xl">
        <span class="absolute text-sm font-medium lg:text-base">Only</span>
        $99
      </div>
    </div>
    <div class="lg:text-xl xl:text-2xl">
      No hassel, flat rate $99 per violation
    </div>
    <div
      class="mt-6 h-16 w-full flex flex-col items-center relative lg:h-20
      xl:h-24">
      <div class="h-full z-10">
        <img
          src="./Barcode.jpg"
          alt="Barcode"
          class="h-full w-8/12 mx-auto xl:w-6/12" />
      </div>
      <hr class="absolute border border-dotted w-full border-black" />
    </div>
    <a
      href="get-started"
      class="w-full text-xl text-white py-4 flex items-center justify-center
      font-black rounded-b-lg mt-6 lg:mt-8 lg:text-3xl xl:text-4xl"
      style="background-image: linear-gradient(#99e477, #59b93e);">
      DISMISS MY TICKET
    </a>
  </div>

  <TitleSection
    title="RUSH SERVICE"
    paragraph="Need your documents fast? We've got you covered. Add on a rush
    service option at checkout." />
  <div class="w-10/12 mx-auto lg:w-9/12 mt-10 xl:mt-10">
    <picture>
      <source media="(min-width: 250px)" srcset="./Rush-Service-Wheel.png" />
      <source media="(min-width: 768px)" srcset="./Rush-Service-Wheel.png" />
      <img src="./Rush-Service-Wheel.png" alt="Flowers" style="width:auto;" />
    </picture>
  </div>
</PageTransition>
