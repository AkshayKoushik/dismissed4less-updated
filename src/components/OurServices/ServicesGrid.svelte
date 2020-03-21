<script>
    import { onDestroy } from "svelte"
    import Button from "./Button.svelte";
    import Services from "./Services-store.js";

    // let contents;

    // const unsubcribe = Services.subscribe(cts=> {
    //    contents = cts;
    // });

    // onDestroy(()=>{
    //     if(unsubcribe){
    //         unsubcribe();
    //     }
    // });

    
</script>

<style>
    * {
    box-sizing: border-box;
    }

    .heading {
        text-align: center;
        align-self: auto;
        font-style: italic;
        text-transform: uppercase;
    }
    .text{
        text-align: center;
        align-self: auto;
        font-style: italic;
        font-size: 12px;
        padding-bottom: 5px;
    }
    .row {
        display: -ms-flexbox; /* IE10 */
        display: flex;
        -ms-flex-wrap: wrap; /* IE10 */
        flex-wrap: wrap;
        padding-bottom: 10px;
        text-align: center;
        align-self: auto;
    }

    /* Create four equal columns that sits next to each other */
    .column {
        -ms-flex: 25%; /* IE10 */
        flex: 25%;
        max-width: 25%;
        padding: 20px 20px 20px 20px;
    }

    .column img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 25%;
    }

    /* Responsive layout - makes a two column-layout instead of four columns */
    @media screen and (max-width: 800px) {
        .column {
            -ms-flex: 50%;
            flex: 50%;
            max-width: 50%;
        }
    }

    /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
    @media screen and (max-width: 600px) {
        .column {
            -ms-flex: 100%;
            flex: 100%;
            max-width: 100%;
        }
    }
    img {
        position: relative;
        z-index: -1;
    }

    .row .column:hover  {    
        display: block;
        -ms-transform: scale(1.1); /* IE 9 */
        -webkit-transform: scale(1); /* Safari 3-8 */
        transform: scale(1.1);    
        background: #E6E6E6;
        background-image: linear-gradient(to bottom,
          rgba(119, 203, 91, 0.6),
          rgba(92, 162, 74, 0.6));
    }
    .container{
        padding: 50px;
    }


    
</style>
<div class="container">
<div class="row">
{#each $Services as content}
    <div class="column">
        <img class= "image" src="{content.images}" alt="{content.altText}">
        <h4 class="heading">{content.heading}</h4>
        <p class="text">{content.paragraph}</p>
        <Button>{content.buttonText}</Button>
    </div>  
{/each}
</div>
</div>
    

    
