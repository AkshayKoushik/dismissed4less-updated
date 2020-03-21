<script>
  export let controlType = "input",
    id,
    label,
    rows = 3,
    value,
    inputType = "text",
    dataName,
    required = false,
    activateInput = false,
    fullWidthOnLg = false;

  $: activateInput = value.length === 0 ? false : true;

  let touched = false;
</script>

<style>
  div {
    float: left;
    width: 40%;
    margin: 20px 3%;
    position: relative;
  }

  div::after {
    content: " ";
    display: block;
    height: 0;
    clear: both;
  }

  input {
    /* font-family: "Lato", sans-serif; */
    outline: none;
    color: #333;
    width: 100%;
    box-sizing: border-box;
    letter-spacing: 1px;
    border: 1px solid #ccc;
    padding: 7px 14px;
    transition: 0.4s;
    background: transparent;
    border-radius: 5px;
  }

  input ~ span::before,
  input ~ span::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #4caf50;
    transition: all 0.3s linear;
    border-radius: 5px;
  }

  input.activated ~ span::before {
    width: 100%;
  }

  input.activated ~ span::after {
    width: 100%;
  }

  input ~ span::after {
    top: auto;
    bottom: 0;
    left: auto;
    right: 0;
  }

  input ~ span i::before,
  input ~ span i::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 0;
    background-color: #4caf50;
    transition: all 0.4s linear;
    border-radius: 5px;
  }

  input ~ span i::after {
    left: auto;
    right: 0;
    top: auto;
    bottom: 0;
  }

  input:focus ~ span::before,
  input:focus ~ span::after {
    width: 100%;
    transition: all 0.3s linear;
  }

  .span-activated {
    width: 100%;
    transition: all 0.3s linear;
  }

  input:focus ~ span i::before,
  input:focus ~ span i::after {
    height: 100%;
    transition: all 0.4s linear;
  }

  .span-activated i::before,
  .span-activated i::after {
    height: 100%;
    transition: all 0.4s linear;
  }

  input ~ label {
    position: absolute;
    left: 14px;
    width: 80%;
    top: 10px;
    color: #aaa;
    transition: 0.3s;
    z-index: -1;
    letter-spacing: 0.5px;
    text-align: initial;
  }

  input:focus ~ label {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #4caf50;
    transition: all 0.3s linear;
  }

  .label-activated {
    top: -18px;
    left: 0;
    font-size: 12px;
    color: #4caf50;
    transition: all 0.3s linear;
  }

  @media (max-width: 767px) {
    div {
      width: 80%;
      margin: 10px auto;
    }
  }
  @media (min-width: 1024px) {
    .fullwidth {
      width: 100%;
    }
  }
</style>

{#if fullWidthOnLg}
  <div class="fullwidth">
    {#if controlType === 'textarea'}
      <textarea on:input name="" data-name={id} {id} cols="30" {rows}>
        {value}
      </textarea>
    {:else}
      <input
        on:input
        {id}
        name={dataName}
        data-name={id}
        type={inputType}
        {value}
        placeholder=""
        {required}
        class:activated={value.length > 0} />
    {/if}
    <label class:label-activated={activateInput} for={id}>{label}</label>
    <span class:span-activated={activateInput}>
      <i />
    </span>
    <slot />
  </div>
{:else}
  <div>
    {#if controlType === 'textarea'}
      <textarea on:input name="" data-name={id} {id} cols="30" {rows}>
        {value}
      </textarea>
    {:else}
      <input
        on:input
        {id}
        name={dataName}
        data-name={id}
        type={inputType}
        {value}
        placeholder=""
        {required}
        class:activated={value.length > 0} />
    {/if}
    <label class:label-activated={activateInput} for={id}>{label}</label>
    <span class:span-activated={activateInput}>
      <i />
    </span>
    <slot />
  </div>
{/if}
