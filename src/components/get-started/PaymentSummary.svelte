<script>
  import { onMount } from "svelte";
  export let ticketPriceLookup, totalPrice, deliveryPrice, ticketChosenArray;
</script>

<div class="w-full lg:w-9/12 my-12 mx-auto shadow-2xl rounded-md">
  <h4
    style="background: linear-gradient(#a0e77f 0%, #64be48 100%);"
    class="text-white text-base font-black p-2 mb-6 lg:text-xl lg:p-4">
    PAYMENT SUMMARY
  </h4>
  <section class="pb-4 lg:pb-6">

    {#each ticketChosenArray as ticket}
      <div class="flex mx-auto mt-1 lg:mt-2">
        <span class="w-6/12 text-sm md:text-base">{ticket.name}</span>
        <span class="w-6/12">$ {ticketPriceLookup[ticket.id]}</span>
      </div>
    {/each}
    <div class="flex mx-auto mt-1 lg:mt-2">
      <span class="w-6/12 text-sm md:text-base">Delivery Charge</span>
      <span class="w-6/12">$ {deliveryPrice}</span>
    </div>
    <hr class="my-2 mx-8" />
    <div class="flex mx-auto mt-1 lg:mt-2">
      <span class="w-6/12">TOTAL</span>
      <span class="w-6/12">$ {totalPrice}</span>
    </div>
  </section>
</div>
