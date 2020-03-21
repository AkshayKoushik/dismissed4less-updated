<script>
  import PageTransition from "../components/PageTransition.svelte";
  import GavelIcon from "../components/icons/GavelIcon.svelte";
  import ServicesGrid from "../components/OurServices/ServicesGrid.svelte";
  import WhyChooseUs from "../components/WhyChooseUs/WhyChoseUs.svelte";
  import ImageCarousel from "../components/ImageCarousel/ImageCarousel.svelte";
</script>

<style>
  .hero {
    height: 60vh;
  }
  .hero img {
    top: -10px;
  }
  .hero > div {
    left: 5%;
    top: 25%;
    width: 65%;
  }
  @media (min-width: 400px) {
    .hero > div {
      top: 35%;
    }
  }
  @media (min-width: 768px) {
    .hero {
      height: 85vh;
    }
  }
  @media (min-width: 1024px) {
    .hero {
      height: 65vh;
    }
  }
  @media (min-width: 1280px) {
    .hero {
      height: 85vh;
    }
  }
</style>

<svelte:head>
  <title>dismissed4less - Home Page</title>
</svelte:head>

<PageTransition>
  <section class="hero relative">
    <img
      class="h-full w-full absolute"
      src="./Home-Hero-Image.png"
      alt="Home Hero Image" />
    <div class="absolute font-black">
      <h3 class="font-black text-xl lg:text-5xl">
        Most Affordable Traffic Ticket Dismissal In California
      </h3>
      <p class="font-medium mt-1 text-xs lg:text-lg">
        Beat your traffic ticket without going to court.
      </p>

      <div class="font-black mt-3 text-xl relative lg:text-3xl">
        ONLY $99
        <a
          class="bg-black rounded-full py-2 px-5 text-gray-100 text-xs absolute
          flex top-auto left-auto my-3 text-brand-green-default lg:text-xl
          lg:px-6 lg:py-4"
          href="get-started">
          <span class="mr-2 lg:flex items-center">
            <GavelIcon />
          </span>
          Dismiss My Ticket
        </a>
      </div>
    </div>
  </section>
</PageTransition>

  
  <section>
    <ServicesGrid />
  </section>
    <WhyChooseUs />
<div>
    <ImageCarousel />
</div>

