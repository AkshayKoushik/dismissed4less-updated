<script>
  import { onMount } from "svelte";

  import { MAPS_API_KEY } from "../api.js";
  import PageTransition from "../components/PageTransition.svelte";
  import TitleSection from "../components/TitleSection.svelte";
  import InputField from "../components/InputField.svelte";
  import Loader from "../components/Loader.svelte";

  let contactFormData = { name: "", email: "", phoneNumber: "" },
    isLoading = false,
    showForm = true,
    showFormSubmissionMessage = false,
    formMessage = "",
    successResponse = false;

  function updateContactFormData(e) {
    contactFormData = {
      ...contactFormData,
      [e.target.dataset.name]: e.target.value
    };
  }

  async function formSubmitHandler(e) {
    const contactFormDataWithDate = {
      ...contactFormData,
      timeStamp: new Date().toGMTString()
    };
    const V1_CONTACT_FORM_URL =
      "https://us-central1-dismissed4less.cloudfunctions.net/backend/api/contact-us";
    // Submit V2 Lead
    showForm = false;
    isLoading = true;
    const rawResponse = await fetch(V1_CONTACT_FORM_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactFormDataWithDate)
    });
    const jsonResponse = await rawResponse.json();
    const { success, message } = jsonResponse;
    formMessage = message;
    showFormSubmissionMessage = true;
    if (success) {
      successResponse = true;
    } else {
      successResponse = false;
    }
    isLoading = false;
  }

  onMount(() => {
    window.initMap = () => {
      const iehsLocation = { lat: 34.053233, lng: -118.2585357 };
      const map = new google.maps.Map(document.getElementById("map-section"), {
        zoom: 15,
        center: iehsLocation
      });
      const marker = new google.maps.Marker({
        position: iehsLocation,
        map: map
      });
    };
    if (typeof google !== "object") {
      const mapScript = document.createElement("script");
      mapScript.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=initMap`;
      mapScript.async = true;
      mapScript.defer = true;
      document.body.appendChild(mapScript);
    } else {
      window.initMap();
    }
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
  @media (min-width: 400px) {
    .hero > div {
      top: 35%;
    }
  }
  @media (min-width: 768px) {
    .hero {
      height: 60vh;
    }
  }
  @media (min-width: 1024px) {
    .hero {
      height: 65vh;
    }
  }
</style>

<svelte:head>
  <title>dismissed4less - Contact Page</title>
</svelte:head>

<PageTransition>
  <section class="hero relative">
    <img
      class="h-full w-full absolute"
      src="./Contact-Hero-Image.png"
      alt="Home Hero Image" />
    <div class="absolute font-black">
      <h3 class="font-black text-xl md:text-3xl lg:text-4xl">Contact Us</h3>
      <p class="font-medium mt-1 text-lg font-base md:text-xl lg:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        quidem.
      </p>
    </div>
  </section>

  <div class="lg:hidden">
    <TitleSection title="CONTACT US NOW" />
  </div>
  <div class="lg:flex lg:w-10/12 lg:mx-auto lg:mt-20">
    <div class="lg:w-6/12 lg:order-last lg:flex">
      {#if isLoading}
        <Loader />
      {:else if showFormSubmissionMessage && !successResponse}
        <div
          class="w-10/12 text-center text-red-700 py-2 px-1 border-red-600
          border-solid border-2 rounded-md mx-auto mt-4 lg:my-auto">
          {formMessage}
        </div>
      {:else if showFormSubmissionMessage && successResponse}
        <div
          class="w-10/12 text-center text-brand-green-default py-2 px-1
          border-green-600 border-solid border-2 rounded-md mx-auto mt-4
          lg:my-auto">
          {formMessage}
        </div>
      {:else}
        <form
          on:submit|preventDefault={formSubmitHandler}
          class="w-full mx-auto mt-2">
          <div class="flex w-full justify-center lg:w-11/12 mx-auto">
            <InputField
              label="Name"
              id="name"
              dataName="contactForm-name"
              inputType="text"
              value={contactFormData.name}
              required
              on:input={updateContactFormData}
              fullWidthOnLg />
          </div>
          <div class="flex w-full justify-center lg:w-11/12 mx-auto">
            <InputField
              label="Email"
              id="email"
              dataName="contactForm-email"
              inputType="email"
              value={contactFormData.email}
              required
              on:input={updateContactFormData}
              fullWidthOnLg />
          </div>
          <div class="flex w-full justify-center lg:w-11/12 mx-auto">
            <InputField
              label="Phone Number"
              id="phoneNumber"
              dataName="contactForm-phoneNumber"
              inputType="tel"
              value={contactFormData.phoneNumber}
              required
              on:input={updateContactFormData}
              fullWidthOnLg />
          </div>
          <div
            class="mt-4 flex w-full justify-center lg:w-11/12 mx-auto lg:mt-6">
            <button
              class="rounded-full px-8 py-3 text-white font-black lg:text-base
              lg:px-16 lg:py-3 shadow-sm hover:shadow-lg"
              style="background-image: linear-gradient(#99e477, #59b93e);"
              type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      {/if}
    </div>
    <section
      id="map-section"
      class="h-64 mt-10 w-11/12 mx-auto lg:w-6/12 lg:mt-6" />
  </div>

</PageTransition>
