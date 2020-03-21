<script>
  export let segment;
  console.log(segment);
  import YoutubeLogo from "./icons/YoutubeLogo.svelte";
  import FaceBookLogo from "./icons/FaceBookLogo.svelte";
  import TwitterLogo from "./icons/TwitterLogo.svelte";
</script>

<footer
  class="mt-10 pt-16 text-white md:mt-12 lg:mt-16 xl:mt-20"
  style="background-image: url('/Footer-Image.png'); background-size: cover;
  background-position: center; background-repeat: no-repeat;">

  <div class="flex flex-col z-10 pt-10 text-center">
    <!-- Email Section Start -->

    <div class="w-11/12 mx-auto lg:w-7/12">
      <div class="w-11/12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
        deleniti!
      </div>
      <form class="mt-6 bg-transparent w-full flex">
        <input
          type="email"
          class="bg-transparent border-white border-2 rounded-l-lg py-2 px-3
          mr-0 placeholder-gray-200 w-8/12 rounded-r-none"
          placeholder="Your E-mail Address" />
        <button
          class="border-2 border-white rounded-r-lg py-2 px-3 font-black ml-0
          w-4/12 text-xs min-h-full border-l-0"
          type="submit">
          ASK NOW
        </button>
      </form>
    </div>
    <!-- Email Section End -->

    <!-- Icon Section Start -->
    <div class="w-11/12 flex flex-col mx-auto mt-8">
      <img
        src="./Dismissed-4-Less-Logo-White.png"
        alt="Dismissed 4 Less Logo"
        class="w-8/12 mx-auto" />
      <div class="font-black mt-2 lg:text-2xl">
        <a href="tel:+18004609491">Call: 800 - 460 - 9491</a>
      </div>
      <div class="flex mt-2 w-6/12 mx-auto justify-around py-4 lg:mt-10">
        <a class="h-8 w-8" href="https://facebook.com">
          <FaceBookLogo color="color: #FFF;" header={false} />
        </a>
        <a class="h-8 w-8" href="https://twitter.com">
          <TwitterLogo color="color: #FFF;" header={false} />
        </a>
        <a class="h-8 w-8" href="https://youtube.com">
          <YoutubeLogo color="color: #FFF;" header={false} />
        </a>
      </div>
    </div>
    <!-- Icon Section End -->

    <!-- Links Section Start -->
    <div class="w-11/12 mx-auto flex justify-around mt-6 flex-wrap">
      <div class="w-5/12 ">
        <h4 class="text-xl font-black underline">Traffic Case</h4>
        <ul class="mt-2">
          <li>
            <a href=".">Lorem Ipsum</a>
          </li>
          <li>
            <a href=".">Dismiss 4 Less</a>
          </li>
          <li>
            <a href=".">Office</a>
          </li>
          <li>
            <a href=".">Traffic Cases</a>
          </li>
          <li>
            <a href=".">Consultant</a>
          </li>
        </ul>
      </div>
      <div class="w-5/12 ">
        <h4 class="text-xl font-black underline">Links</h4>
        <ul class="mt-2">
          <li>
            <a href=".">Home</a>
          </li>
          <li>
            <a href=".">About</a>
          </li>
          <li>
            <a href=".">Blog & Press</a>
          </li>
          <li>
            <a href=".">Listings</a>
          </li>
          <li>
            <a href=".">Help</a>
          </li>
        </ul>
      </div>

      <div class="w-5/12 mt-6">
        <h4 class="text-xl font-black underline">Social</h4>
        <ul class="mt-2">
          <li>
            <a href=".">Facebook</a>
          </li>
          <li>
            <a href=".">Twitter</a>
          </li>
          <li>
            <a href=".">G - Mail</a>
          </li>
          <li>
            <a href=".">Skype</a>
          </li>
          <li>
            <a href=".">Instagram</a>
          </li>
        </ul>
      </div>

      <div class="w-5/12 mt-6">
        <h4 class="text-xl font-black underline">Contact Us</h4>
        <div class="mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate,
          sed.
        </div>
        <p>1800003620</p>
      </div>
    </div>
    <!-- Links Section End -->

  </div>

  <!-- Copyright Section Start -->
  <div class="mt-10 text-sm text-center pb-6 lg:text-lg">
    &copy; Copyright 2020 Dismissed 4 Less by Agile Websites
  </div>
  <!-- Copyright Section End -->

</footer>
