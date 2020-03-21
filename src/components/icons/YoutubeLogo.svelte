<script>
  export let color = "color: #58B63A;",
    header = true;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 576 512"
  class="cursor-pointer fill-current text-brand-green-default
  focus:text-brand-green-light hover:text-red-700"
  class:ml-4={header}
  class:md:ml-5={header}
  class:h-5={header}
  class:w-5={header}
  class:w-full={!header}
  class:h-full={!header}
  style={color}>
  <path
    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288
    64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284
    48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412
    132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288
    448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821
    11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51
    213.508V175.185l142.739 81.205-142.739 81.201z" />
</svg>
