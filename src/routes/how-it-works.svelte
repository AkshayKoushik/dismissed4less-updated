<script>
  import { onMount } from "svelte";

  import PageTransition from "../components/PageTransition.svelte";
  let roadSectionRef;

  onMount(() => {
    console.log(roadSectionRef);
    console.log(roadSectionRef.clientHeight);
    console.log(roadSectionRef.clientWidth);
  });
</script>

<style>
  .hero {
    height: 45vh;
  }
  .hero img {
    top: -10px;
  }
  .hero > div {
    left: 5%;
    top: 25%;
    width: 65%;
  }
  .h-i-w {
    top: 16%;
    left: 6%;
  }
  .p-y-d {
    top: 32%;
    left: 0%;
  }

  .p-y-d > div {
    font-size: 0.75rem;
  }

  .d-c {
    top: 68%;
    right: 1rem;
  }

  .l-d-t {
    top: 92%;
    left: 45%;
  }

  section.-mt-20 > img {
    left: 3.5rem;
  }
  @media (min-width: 400px) {
    .hero > div {
      top: 35%;
    }

    .p-y-d > div {
      font-size: 0.875rem;
    }
  }
  @media (min-width: 768px) {
    .hero {
      height: 60vh;
    }
    .h-i-w {
      top: 20%;
    }
    .p-y-d {
      top: 38%;
    }
  }
  @media (min-width: 1024px) {
    .hero {
      height: 65vh;
    }
    .p-y-d {
      top: 36%;
      left: 72%;
    }
    .p-y-d > div {
      font-size: 1.25rem;
    }
    .l-d-t {
      top: 94%;
      left: 45%;
    }
  }

  @media (min-width: 1280px) {
    .h-i-w {
      top: 20%;
      left: 83%;
    }
    .p-y-d {
      top: 42%;
      left: 73%;
    }
    .p-y-d > div {
      font-size: 1.25rem;
    }
  }
</style>

<svelte:head>
  <title>dismissed4less - How It Works Page</title>
</svelte:head>

<PageTransition>
  <section class="hero relative z-10">
    <img
      class="h-full w-full absolute"
      src="./How-It-Works-Hero-Image.png"
      alt="How It Works Hero Image" />
    <div class="absolute font-black">
      <h3 class="font-black text-xl md:text-3xl lg:text-4xl">How It Works?</h3>
      <p class="font-medium mt-1 text-lg font-base md:text-xl lg:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        quidem.
      </p>
    </div>
  </section>

  <section
    class="relative -mt-20 md:-mt-40 lg:-mt-56 lg:w-9/12"
    bind:this={roadSectionRef}>
    <img
      class="w-full max-w-full"
      src="./How-It-Works-Road.png"
      alt="How It Works Road" />
    <!--  Section 1 start-->
    <div
      class="absolute w-7/12 h-i-w flex flex-col xl:w-6/12 xl:flex-row
      xl:flex-wrap">
      <div class="h-10 w-10 mx-auto md:h-16 md:w-16 xl:h-20 xl:w-20 xl:mx-0">
        <img
          class="mx-auto h-full w-auto"
          src="./Upload-Violation-Icon.png"
          alt="Upload Violation Icon" />
      </div>
      <h3
        class="text-red-700 font-bold text-center md:text-2xl lg:text-3xl
        lg:mt-4 xl:w-auto xl:flex xl:items-center xl:text-4xl xl:ml-4">
        Upload Violation Ticket
      </h3>
      <div
        class="text-xs text-center leading-tight tracking-tight
        md:leading-normal md:tracking-normal md:text-base lg:text-xl xl:mt-6
        xl:text-xl xl:w-9/12">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
        reprehenderit repellendus. Praesentium.
      </div>
    </div>
    <!--  Section 1 end-->

    <!--  Section 2 start-->

    <div
      class="absolute w-5/12 p-y-d flex flex-col xl:w-6/12 xl:flex-row
      xl:flex-wrap">
      <div class="h-10 w-10 mx-auto md:h-16 md:w-16 xl:h-20 xl:w-20 xl:mx-0">
        <img
          class="mx-auto h-full w-auto"
          src="./Provide-Your-Details-Icon.png"
          alt="Provide your details Icon" />
      </div>
      <h3
        class="text-yellow-700 font-bold text-center md:text-2xl lg:text-3xl
        lg:mt-4 xl:w-auto xl:flex xl:items-center xl:text-4xl xl:ml-4">
        Provide your details
      </h3>
      <div
        class="text-xs text-center leading-tight tracking-tight
        md:leading-normal md:tracking-normal md:text-base lg:text-xl xl:mt-6
        xl:text-xl xl:w-9/12">
        Your story is important. Provide details about your alleged violation
        for out team to use when writing your statement. Officers make mistakes.
        Our experienced staff will use your story and the ticket issued to
        provide a detailed statement for dismissal.
      </div>
    </div>
    <!--  Section 2 end-->

    <!--  Section 3 start-->

    <div
      class="absolute w-7/12 d-c flex flex-col xl:w-6/12 xl:flex-row
      xl:flex-wrap">
      <div class="h-10 w-10 mx-auto md:h-16 md:w-16 xl:h-20 xl:w-20 xl:mx-0">
        <img
          class="mx-auto h-full w-auto"
          src="./Defence-Completed-Icon.png"
          alt="Defence Completed Icon" />
      </div>
      <h3
        class="text-green-700 font-bold text-center md:text-2xl lg:text-3xl
        lg:mt-4 xl:w-auto xl:flex xl:items-center xl:text-4xl xl:ml-4">
        Defence Completed
      </h3>
      <div
        class="text-xs text-center leading-tight tracking-tight
        md:leading-normal md:tracking-normal md:text-base lg:text-xl xl:mt-6
        xl:text-xl xl:w-9/12">
        Print your dismissal statement and mail it to court. You will have a
        chance to read your statement and provide changes if needed.
      </div>
    </div>
    <!--  Section 3 end-->

    <!--  Section 4 start-->
    <div
      class="absolute w-6/12 l-d-t flex flex-col l-d-t lg:flex-row xl:w-6/12
      xl:flex-row xl:flex-wrap">
      <div class="h-10 w-10 mx-auto md:h-16 md:w-16 xl:h-20 xl:w-20 xl:mx-0">
        <img
          class="mx-auto h-full w-auto"
          src="./Lets-Do-This-Icon.png"
          alt="Lets Do This Icon" />
      </div>
      <a
        style="background-image: linear-gradient(rgb(153, 228, 119), rgb(89,
        185, 62));"
        class="shadow-lg mt-3 text-white w-8/12 mx-auto text-xs rounded-full
        py-2 px-4 font-bold text-center lg:order-first lg:text-2xl lg:text-black
        lg:justify-center lg:flex lg:items-center"
        href="get-started">
        Let's Do This
      </a>
    </div>
    <!--  Section 4 end-->

  </section>

</PageTransition>
