<script>
  import FaceBookLogo from "./icons/FaceBookLogo.svelte";
  import TwitterLogo from "./icons/TwitterLogo.svelte";
  import YoutubeLogo from "./icons/YoutubeLogo.svelte";
</script>

<div
  class="hidden md:flex text-sm bg-black text-brand-green-default items-center
  justify-end pr-10 py-2 lg:z-10">
  <span class="mr-2">Call Now : 800 - 460 - 9491</span>
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FaceBookLogo />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <TwitterLogo />
  </a>
  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
    <YoutubeLogo />
  </a>
</div>
