<script>
// import { createEventDispatcher } from "svelte";
export let Class = null;
// export let color = null;


 function location(){
     console.log('hi');
 }

// const dispatch = createEventDispatcher();

</script>
<style>
    button {
        border-radius: 40px;
        font-size: 10px;
        background:white;
        color: black;
        -webkit-transition: none;
        -moz-transition: none;
        transition: none;
        padding: 5px 25px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

  button:hover{
       cursor: pointer;
       font-size: 10px;
       /* cursor: url("./images/Speeding.png"), pointer;	 */
    }

</style>

<button class={Class} on:click={location} ><slot /></button>