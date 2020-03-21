<script>
  import { blur } from "svelte/transition";

  import HeaderTop from "./HeaderTop.svelte";
  import CloseIcon from "./icons/CloseIcon.svelte";
  import GavelIcon from "./icons/GavelIcon.svelte";

  export let segment;
  let showNav = false;

  const showNavbar = () => {
    showNav = true;
    document.body.classList.add("overflow-y-hidden");
  };
  const hideNavbar = () => {
    showNav = false;
    document.body.classList.remove("overflow-y-hidden");
  };
</script>

<style>
  a > span {
    right: 26px;
    bottom: -6px;
  }
  a > div {
    bottom: 10%;
    left: 35%;
  }
  div.relative > button {
    right: 1rem;
  }
  div.h-screen > nav {
    height: 80%;
    max-height: 80%;
  }
  @media (min-width: 640px) {
    div.relative > button {
      right: 2rem;
    }
  }

  @media (min-width: 768px) {
    div.relative > button {
      right: 2.5rem;
    }
  }
</style>

<section class="absolute inset-x-0 z-20">
  <HeaderTop />
  <header
    class="flex justify-between items-center px-4 py-2 bg-transparent text-black
    lg:py-0 lg:items-stretch lg:max-w-screen-xl lg:mx-auto">
    <a
      class="text-xs font-semibold border border-gray-900 rounded-full py-1 px-2
      lg:order-last z-10 lg:flex lg:items-center my-2 lg:px-4"
      class:z-10={!showNav}
      href="https://client.dismissed4less.com"
      target="_blank"
      rel="noopener noreferrer">
      LOGIN
    </a>

    <nav class="hidden lg:flex lg:block lg:mx-12 lg:z-10">
      <ul class="flex font-bold text-gray-900 bg-transparent">
        <li>
          <a
            class="h-full w-full flex items-center justify-center py-3 px-5 mx-3
            lg:mx-6"
            class:bg-black={segment === undefined}
            class:text-brand-green-default={segment === undefined}
            href=".">
            <!-- <GavelIcon /> -->
            HOME
          </a>
        </li>
        <li>
          <a
            class="h-full w-full flex items-center justify-center py-3 px-5 mx-3
            lg:mx-6"
            href="get-started"
            class:bg-black={segment === 'get-started'}
            class:text-brand-green-default={segment === 'get-started'}>
            <!-- <GavelIcon /> -->
            GET STARTED
          </a>
        </li>
        <li>
          <a
            class="h-full w-full flex items-center justify-center py-3 px-5 mx-3
            lg:mx-6"
            href="how-it-works"
            class:bg-black={segment === 'how-it-works'}
            class:text-brand-green-default={segment === 'how-it-works'}>
            <!-- <GavelIcon /> -->
            HOW IT WORKS
          </a>
        </li>
        <li>
          <a
            class="h-full w-full flex items-center justify-center py-3 px-5 mx-3
            lg:mx-6"
            href="pricing"
            class:bg-black={segment === 'pricing'}
            class:text-brand-green-default={segment === 'pricing'}>
            <!-- <GavelIcon /> -->
            PRICING
          </a>
        </li>
        <li>
          <a
            class="h-full w-full flex items-center justify-center py-3 px-5 mx-3
            lg:mx-6"
            href="contact-us"
            class:bg-black={segment === 'contact-us'}
            class:text-brand-green-default={segment === 'contact-us'}>
            <!-- <GavelIcon /> -->
            CONTACT US
          </a>
        </li>
      </ul>
    </nav>

    <a
      href="."
      class="h-10 relative lg:order-first lg:h-16 z-10 lg:flex"
      class:z-10={!showNav}>
      <img
        class="max-h-full"
        src="./Dismissed-4-Less-Logo-Black.png"
        alt="Dismissed 4 Less Logo" />
      <span class="text-xs font-bold absolute inset-auto lg:hidden">
        800-460-9491
      </span>
    </a>
    <button
      class:z-10={!showNav}
      class="h-8 w-8 ml-3 lg:hidden"
      on:click={showNavbar}>
      <img src="./hamburger-icon.svg" alt="Hamburger Icon" />
    </button>

    {#if showNav}
      <div
        on:click={hideNavbar}
        in:blur={{ delay: 0, duration: 300 }}
        out:blur={{ duration: 0 }}
        class="max-h-screen h-screen w-screen min-h-screen fixed inset-0
        bg-brand-green-default text-white absolute lg:hidden z-10">
        <div class="relative">
          <a href="." class="px-4 py-2 relative flex justify-center h-16 mx-16">
            <img
              class="max-h-full mx-2"
              src="Dismissed-4-Less-Logo-White.png"
              alt="Dismissed 4 Less Logo - White" />
            <div class="text-xs font-bold absolute inset-auto">
              800-460-9491
            </div>
          </a>
          <button
            class="absolute inset-y-0 h-full w-8 text-gray-100 fill-current mx-2">
            <CloseIcon />
          </button>
        </div>
        <nav class="border-green-200 border-solid border-t">
          <ul
            class="h-full text-center flex flex-col font-black items-stretch
            justify-center">
            <li class="flex py-3 px-5">
              <a
                class="bg-gray-900 h-full w-full flex items-center
                justify-center py-3 px-5 rounded-lg mx-3"
                class:bg-gray-900={segment === undefined}
                href=".">
                HOME
              </a>
            </li>
            <li class="flex py-3 px-5">
              <a
                class="bg-gray-900 h-full w-full flex items-center
                justify-center py-3 px-5 rounded-lg mx-3"
                href="get-started"
                class:bg-gray-900={segment === 'get-started'}>
                GET STARTED
              </a>
            </li>
            <li class="flex">
              <a
                class="bg-gray-900 h-full w-full flex items-center
                justify-center py-3 px-5 rounded-lg mx-3"
                href="how-it-works"
                class:bg-gray-900={segment === 'how-it-works'}>
                HOW IT WORKS
              </a>
            </li>
            <li class="flex">
              <a
                class="bg-gray-900 h-full w-full flex items-center
                justify-center py-3 px-5 rounded-lg mx-3"
                href="pricing"
                class:bg-gray-900={segment === 'pricing'}>
                PRICING
              </a>
            </li>
            <li class="flex">
              <a
                class="bg-gray-900 h-full w-full flex items-center
                justify-center py-3 px-5 rounded-lg mx-3"
                href="contact-us"
                class:bg-gray-900={segment === 'contact-us'}>
                CONTACT US
              </a>
            </li>
          </ul>
        </nav>
        <div
          class="flex items-center border-green-200 border-solid border-t
          justify-center h-16">
          &copy; Copyright 2020 Dismissed 4 Less
        </div>
      </div>
    {/if}
  </header>
</section>
