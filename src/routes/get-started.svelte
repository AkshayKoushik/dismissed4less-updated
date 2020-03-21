<script>
  import { onMount } from "svelte";

  import PageTransition from "../components/PageTransition.svelte";
  import InputField from "../components/InputField.svelte";
  import DatePicker from "../components/UIElements/DatePicker.svelte";
  import Loader from "../components/Loader.svelte";
  import TitleSection from "../components/TitleSection.svelte";
  import UploadIcon from "../components/icons/UploadIcon.svelte";
  import SendIcon from "../components/icons/SendIcon.svelte";
  import ChevronDownIcon from "../components/icons/ChevronDownIcon.svelte";
  import CancelIcon from "../components/icons/CancelIcon.svelte";
  import Overlay from "../components/Overlay.svelte";
  import PaymentSummary from "../components/get-started/PaymentSummary.svelte";

  // Data to confirm purchase

  let purchaseConfirmData = { documentId: "" };

  /*
  let items = [];
  let productsData = ticketChosenArray.map((ticket) => {name: nameIdLookup[ticket], price: };
  );
  items = productsData;
  purchaseConfirmData = {...purchaseConfirmData, ticketChosenArray: ticketPriceLookup[ticket]};
  */

  // Data to confirm purchase

  const firebaseInstances = {};
  const nameIdLookup = {
    cellPhone: "Cell Phone",
    seatBelt: "Seat Belt",
    redLightOfficerIssued: "Red Light (Officer Issued)",
    redLightCamera: "Red Light (Camera)",
    speeding: "Speeding",
    stopSignViolation: "Stop Sign Violation",
    laneViolation: "Lane Violation",
    carPoolViolation: "Carpool Violation",
    otherCATrafficTicket: "Other CA Traffic Ticket"
  };

  const ticketPriceLookup = {
    cellPhone: 99.0,
    seatBelt: 99.0,
    redLightOfficerIssued: 179.0,
    redLightCamera: 179.0,
    speeding: 179.0,
    stopSignViolation: 179.0,
    laneViolation: 179.0,
    carPoolViolation: 179.0,
    otherCATrafficTicket: 179.0
  };

  const deliveryDatePriceLookup = {
    noRush: 0,
    fiveDayDelivery: 10.0,
    nextDayDelivery: 20.0,
    sameDayDelivery: 30.0
  };
  const deliveryDateNameLookup = {
    noRush: "No Rush (10 Day Delivery)",
    fiveDayDelivery: " $10 - Five Day Delivery",
    nextDayDelivery: "$20 - Next Day Delivery",
    sameDayDelivery: "$30 - Same Day Delivery"
  };
  let firebaseAppLoaded = false,
    firebaseStorageLoaded = false,
    payPalScriptLoaded = false,
    fileUploadInput,
    fileUploadButton,
    fileUploadButtonDisabledState = true,
    fileUploadLabel,
    uploadFileLabelText = "No file selected",
    v2LeadFormData = {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: ""
    },
    v2FormValidity = false,
    isLoading = false,
    showV2LeadForm = true,
    showPaymentForm = false,
    showErrorMessage = false,
    responseData = { success: null, message: "" },
    showTrafficTicketDropDown = false,
    chosenTrafficTickets = {
      cellPhone: false,
      seatBelt: false,
      redLightOfficerIssued: false,
      redLightCamera: false,
      speeding: false,
      stopSignViolation: false,
      laneViolation: false,
      carPoolViolation: false,
      otherCATrafficTicket: false
    },
    ticketPrice = 0,
    ticketChosenArray = [],
    selectedDateDeliveryPlanRaw = "fiveDayDelivery",
    deliveryPrice = 10,
    showTrafficDeliveryDropdown = false,
    paypalElement;

  $: selectedDeliveryDatePlan =
    deliveryDateNameLookup[selectedDateDeliveryPlanRaw];
  $: showErrorMessage = responseData.success === false ? true : false;
  $: initializeFirebase = firebaseAppLoaded && firebaseStorageLoaded;
  $: initializeFirebase === true ? initializeFBApp() : null;
  $: totalPrice = ticketPrice + deliveryPrice;
  $: paypalElement && payPalScriptLoaded ? renderPayPalButtons() : null;
  $: deliveryPrice = deliveryDatePriceLookup[selectedDateDeliveryPlanRaw];

  const loadFirebaseAndPaypal = () => {
    if (!window.firebase) {
      const payPalScript = document.createElement("script");
      payPalScript.src =
        "https://www.paypal.com/sdk/js?client-id=AbSTeqn05w5Wl1mhJNkLhwmEqdHyw13RQFsJinlWzrqCnQ0Zu8aaFbF5UZpia6FjnS6iDbhZv9hgK3On&currency=USD";
      if (!window.paypal) {
        document.body.appendChild(payPalScript);
        payPalScript.addEventListener("load", () => {
          payPalScriptLoaded = true;
          isLoading = false;
        });
      } else {
        payPalScriptLoaded = true;
        isLoading = false;
      }

      const firebaseApp = document.createElement("script");
      firebaseApp.src =
        "https://www.gstatic.com/firebasejs/7.8.2/firebase-app.js";
      document.body.appendChild(firebaseApp);
      firebaseApp.addEventListener("load", () => {
        firebaseAppLoaded = true;

        const firebaseStorage = document.createElement("script");
        firebaseStorage.src =
          "https://www.gstatic.com/firebasejs/7.8.2/firebase-storage.js";
        document.body.appendChild(firebaseStorage);
        firebaseStorage.addEventListener("load", () => {
          firebaseStorageLoaded = true;
          fileUploadButtonDisabledState = false;
        });
      });
    }
  };
  const initializeFBApp = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyDHHsTF-oRzagi5jTJS2gdMm4MV520-A28",
      projectId: "dismissed4less",
      storageBucket: "dismissed4less.appspot.com",
      appId: "1:625846873468:web:de4061e96783a793e5c8f9"
    };
    window.firebase.initializeApp(firebaseConfig);
    firebaseInstances["storage"] = window.firebase.storage();
  };
  function updateV2FormData(e) {
    v2LeadFormData = {
      ...v2LeadFormData,
      [e.target.dataset.name]: e.target.value
    };
  }
  function uploadButtonClickHandler(e) {
    fileUploadInput.click();
  }
  function fileInputChangeHandler(e) {
    uploadFileLabelText = e.target.files[0].name;
    citationFile = e.target.files[0];
    v2LeadFormData = { ...v2LeadFormData, citationFile: e.target.files[0] };
  }
  function toggleTrafficTicketVisibility(e) {
    showTrafficTicketDropDown = !showTrafficTicketDropDown;
  }
  function toggleDeliveryDateVisibility(e) {
    showTrafficDeliveryDropdown = !showTrafficDeliveryDropdown;
  }
  async function handleV2FormSubmission(e) {
    const formDataWithDate = {
      ...v2LeadFormData,
      timeStamp: new Date().toGMTString()
    };
    const V2_LEAD_URL =
      "https://us-central1-dismissed4less.cloudfunctions.net/backend/api/get-started/addV2Lead";
    // Submit V2 Lead
    showV2LeadForm = false;
    isLoading = true;
    const rawResponse = await fetch(V2_LEAD_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDataWithDate)
    });
    const content = await rawResponse.json();
    responseData = content;
    const { success, message } = content;

    if (success) {
      purchaseConfirmData = {
        ...purchaseConfirmData,
        documentId: content.documentId
      };
      console.log(purchaseConfirmData);
      loadFirebaseAndPaypal();
      showPaymentForm = true;
    }
  }

  const renderPayPalButtons = () => {
    paypal
      .Buttons({
        style: {
          color: "blue",
          shape: "pill",
          label: "pay"
        },
        createOrder: function(data, actions) {
          // Need to validate if citation is uploaded and a ticket has been chosen
          let items = [];
          let productsData = [];
          ticketChosenArray.forEach(function(ticket) {
            productsData.push({
              name: nameIdLookup[ticket.id],
              unit_amount: {
                currency_code: "USD",
                value: ticketPriceLookup[ticket.id].toString()
              },
              quantity: "1"
            });
          });
          items = productsData;
          console.log(items);
          purchaseConfirmData = { ...purchaseConfirmData, items: items };
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: (totalPrice - ticketPrice).toString(),
                  currency_code: "USD"
                },
                items: items
              }
            ]
          });
        },
        onApprove: function(data, actions) {
          return actions.order.capture().then(function(details) {
            console.log("--- DETAILS FROM PAYPAL ---");
            console.log(details);
            console.log("--- DETAILS FROM PAYPAL ---");
            alert("Transaction completed by " + details.payer.name.given_name);
            console.log("PayPal -- -- --");
            console.log(data.orderID);
            console.log("PayPal -- -- --");
            // Call your server to save the transaction
            return fetch("/capture-paypal-transaction", {
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify({
                orderID: data.orderID
              })
            })
              .then(function(res) {
                return res.json();
              })
              .then(function(details) {
                if (details.error === "INSTRUMENT_DECLINED") {
                  return actions.restart();
                }
                console.log("Server Response after payment confirmation.");
                console.log(details);
                console.log("Server Response after payment confirmation.");
                alert(
                  "Transaction funds captured from " + details.payer_given_name
                );
              });
          });
        },
        onCancel: function(data) {
          console.log("Purchase Cancelled", data);
          // Show a cancel page, or return to cart
        },
        onError: function(data) {
          console.log("Error occoured", data);
        }
      })
      .render("#paypal-button-container");
  };
  async function modifyTicketsChosen(e) {
    const currentVal = chosenTrafficTickets[e.target.dataset.id];
    if (!currentVal) {
      ticketPrice += ticketPriceLookup[e.target.dataset.id];
    } else {
      ticketPrice -= ticketPriceLookup[e.target.dataset.id];
    }
    const tempObj = {
      ...chosenTrafficTickets,
      [e.target.dataset.id]: !currentVal
    };

    chosenTrafficTickets = tempObj;
    const myArr = [];
    Object.keys(chosenTrafficTickets).forEach(function(ticket) {
      if (chosenTrafficTickets[ticket]) {
        myArr.push({ id: ticket, name: nameIdLookup[ticket] });
      }
    });
    ticketChosenArray = myArr;
    totalPrice = totalPrice + ticketPrice + deliveryPrice;
  }

  async function handlePaymentFormSubmission(e) {
    console.log("Fired the payment form");
  }

  function updateDeliveryDatePlan(rawPlanName) {
    const prevdeliveryDatePrice =
      deliveryDatePriceLookup[selectedDateDeliveryPlanRaw];

    selectedDateDeliveryPlanRaw = rawPlanName;
    totalPrice =
      totalPrice - prevdeliveryDatePrice + deliveryDatePriceLookup[rawPlanName];
  }

  // Remove after testing

  // showV2LeadForm = false;
  // isLoading = false;
  // showPaymentForm = true;
  // onMount(() => loadFirebaseAndPaypal());

  // Remove after testing
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

  button {
    -webkit-appearance: none;
    border: 2px solid var(--button-blue);
    background-color: var(--button-blue);
    color: #fff;
    display: flex;
    padding: 0.7em 1em;
    border-radius: 26px;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    transition: transform 250ms linear, background-color 250ms linear;
    cursor: pointer;
    outline: none;
  }
  button:focus,
  button:active {
    border: 2px solid var(--button-blue-active);
    background-color: var(--button-blue-active);
  }
  button:hover {
    transform: scale(1.01);
    background-color: var(--button-blue-active);
  }

  section.form-section {
    width: 70%;
    margin: 2rem auto;
    text-align: center;
  }

  section.form-section::after {
    content: " ";
    display: block;
    height: 0;
    clear: both;
  }

  section.form-section form.v2form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  form.v2form::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
  section.form-section .form_field_2 {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  section.form-section .form_field_2::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
  .v2form button {
    margin-top: 25px;
    padding: 0.7em 1.2em;
  }

  .ticket-dropdown-container {
    position: relative;
    width: 100%;
    z-index: 0;
  }
  .ticket-dropdown-container.active {
    z-index: 21;
  }
  #traffic-ticket-list {
    border: 1px solid #d6d6d6;
    width: 100%;
    min-width: 200px;
    max-width: 100%;
    border-radius: 5px;
    display: block;
    transform: scale(0);
    opacity: 0;
    transition: transform 250ms linear;
  }
  #traffic-ticket-list > div {
    padding: 10px 0px 10px 5px;
  }
  #traffic-ticket-list.list-open {
    box-shadow: 0 0px 8px 3px rgba(0, 0, 0, 0.26);
    border: 1px solid #3f3f3f;
    transform: scale(1);
    opacity: 1;
    background-color: #fff;
    z-index: 21;
  }

  #selectTrafficTicket {
    border: 1px solid #3f3f3f;
    width: 100%;
    min-width: 200px;
    max-width: 100%;
    border-radius: 5px;
    height: 3.2rem;
    background-color: #fff;
    position: relative;
    text-align: left;
    transform: scale(1);
    color: #000;
  }
  #selectTrafficTicket:hover,
  #selectTrafficTicket:focus,
  #selectTrafficTicket:active {
    background-color: #ccc;
  }
  fieldset[aria-labelledby="trafficTicketListDropdown"] {
    border: none;
    position: absolute;
    width: 100%;
    transform: scale(0);
    transition: transform 250ms linear;
  }
  fieldset[aria-labelledby="trafficTicketListDropdown"].open-dropdown {
    transform: scale(1);
  }
  fieldset#chosen-ticket-container {
    border: none;
    margin-top: 10px;
  }
  button.ticket-selected-button {
    margin: 10px 10px;
    display: inline-flex;
    background-color: #e4e4e4;
    border: 1px solid #e4e4e4;
    color: #000;
    font-size: 14px;
    box-shadow: none;
    padding: 8px 10px;
    transition: box-shadow 250ms linear;
  }
  button.ticket-selected-button:hover {
    transform: scale(1);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }

  .delivery-date-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 1rem;
  }

  .delivery-date-picker-container {
    margin-top: 1.7rem;
    width: 100%;
  }

  .delivery-price-container {
    position: relative;
    width: 100%;
    z-index: 0;
    height: 3.2rem;
  }

  .delivery-price-container.active {
    z-index: 21;
  }
  .delivery-price-container button {
    background-color: white;
    color: #000;
    border: 1px solid #3f3f3f;
    border-radius: 5px;
    width: 100%;
    position: relative;
    height: 3.5rem;
  }
  .delivery-price-container button:hover {
    transform: scale(1);
    background-color: #ccc;
  }
  .delivery-price-container ul {
    position: absolute;
    top: 120%;
    width: 100%;
    opacity: 0;
    transform: translateX(-100%) scale(0);
    border-radius: 5px;
    background-color: #fff;
    transition: all 250ms linear;
  }
  .delivery-price-container ul.show {
    opacity: 1;
    transform: translateX(-1em) scale(1);
    box-shadow: 0 0px 8px 3px rgba(0, 0, 0, 0.26);
    border: 1px solid #3f3f3f;
    z-index: 21;
    padding: 10px 10px;
  }
  .delivery-price-container li {
    padding: 5px 10px;
    width: fit-content;
    border-radius: 5px;
    margin: 10px auto;
  }
  .delivery-price-container li:hover,
  .delivery-price-container li:active,
  .delivery-price-container li:focus {
    background-color: #ccc;
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
    #selectTrafficTicket {
      height: 3.5rem;
    }
    .delivery-date-container {
      height: 3.5rem;
      flex-direction: row;
      margin-top: 40px;
    }

    .delivery-date-picker-container {
      height: 3.5rem;
      margin-top: 0px;
      width: 40%;
    }
    .delivery-price-container {
      width: 40%;
    }
  }

  @media (max-width: 767px) {
    section.form-section {
      width: 90%;
    }

    section.form-section .form_field_2 {
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>dismissed4less - Get Started Page</title>
</svelte:head>

<PageTransition>
  <section class="hero relative">
    <img
      class="h-full w-full absolute"
      src="./Get-Started-Hero-Image.png"
      alt="Home Hero Image" />
    <div class="absolute font-black">
      <h3 class="font-black text-xl md:text-3xl lg:text-4xl">
        What is Lorem Ipsum
      </h3>
      <p class="font-medium mt-1 text-lg font-base md:text-xl lg:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        quidem.
      </p>
    </div>
  </section>
  {#if showErrorMessage}
    <div
      class="w-10/12 text-center text-red-700 py-2 px-1 border-red-600
      border-solid border-2 rounded-md mx-auto mt-4">
      {responseData.message}
    </div>
  {:else if showPaymentForm && responseData.message.length > 0}
    <div
      class="w-10/12 text-center text-brand-green-default py-2 px-1
      border-green-600 border-solid border-2 rounded-md mx-auto mt-4">
      {responseData.message}
    </div>
  {/if}

  {#if showV2LeadForm && !isLoading}
    <TitleSection
      title="LET'S BEGIN"
      paragraph="Provide us the details so we can help you win! Your information
      will remain 100% safe, private and secure." />
    <section class="form-section">
      <form class="v2form" on:submit|preventDefault={handleV2FormSubmission}>
        <div class="form_field_2">
          <InputField
            label="First Name"
            id="firstName"
            dataName="v2-firstName"
            inputType="text"
            value={v2LeadFormData.firstName}
            required
            on:input={updateV2FormData} />

          <InputField
            label="Last Name"
            id="lastName"
            dataName="v2-lastName"
            inputType="text"
            value={v2LeadFormData.lastName}
            on:input={updateV2FormData} />
        </div>
        <div class="form_field_2">

          <InputField
            label="Email"
            id="email"
            dataName="v2-email"
            inputType="email"
            value={v2LeadFormData.email}
            required
            on:input={updateV2FormData} />

          <InputField
            label="Phone Number"
            id="phoneNumber"
            dataName="v2-phoneNumber"
            inputType="tel"
            value={v2LeadFormData.phoneNumber}
            required
            on:input={updateV2FormData} />
        </div>

        <button type="submit">
          SUBMIT
          <SendIcon />
        </button>

      </form>
    </section>
  {:else if showPaymentForm && !isLoading}
    {#if showTrafficTicketDropDown}
      <Overlay on:click={toggleTrafficTicketVisibility} />
    {:else if showTrafficDeliveryDropdown}
      <Overlay on:click={toggleDeliveryDateVisibility} />
    {/if}

    <TitleSection
      title="TYPE OF TRAFFIC TICKET YOU RECEIVED"
      paragraph="Select as many violations that apply." />
    <section class="form-section">
      <form
        class="payment-form"
        on:submit|preventDefault={handlePaymentFormSubmission}>
        <div
          class="ticket-dropdown-container"
          class:active={showTrafficTicketDropDown}>
          <button
            type="button"
            id="selectTrafficTicket"
            class="text-xs sm:text-base md:text-lg lg-text-xl"
            aria-expanded="false"
            aria-labelledby="trafficTicketListDropdown trafficTicketList"
            on:click={toggleTrafficTicketVisibility}>
            Click here to select your ticket violations
            <span id="trafficTicketList" />
            <div
              class="absolute inset-y-0 flex h-full w-5"
              style="right: 1rem;">
              <ChevronDownIcon turn={showTrafficTicketDropDown} />
            </div>
          </button>
          <fieldset
            class:open-dropdown={showTrafficTicketDropDown}
            on:change={modifyTicketsChosen}
            aria-labelledby="trafficTicketListDropdown">
            <div
              class="p-4 bg-gray-200 text-gray-700"
              class:list-open={showTrafficTicketDropDown}
              id="traffic-ticket-list">
              <div
                class="w-8/12 mx-auto flex justify-around items-center md:w-3/12
                lg:w-3/12 mt-1 rounded-md"
                class:bg-green-300={chosenTrafficTickets['cellPhone']}>
                <span class="w-1/12">
                  <input
                    name="traffic-ticket-type"
                    type="checkbox"
                    id="cellPhone"
                    data-id="cellPhone"
                    data-name="Cell Phone"
                    checked={chosenTrafficTickets['cellPhone'] === true ? true : false} />
                </span>
                <label
                  class="w-11/12 font-bold cursor-pointer"
                  for="cellPhone"
                  aria-label="Cell Phone">
                  Cell Phone
                </label>
              </div>
              <div
                class="w-8/12 mx-auto flex justify-around items-center md:w-3/12
                lg:w-3/12 mt-1 rounded-md"
                class:bg-green-300={chosenTrafficTickets['seatBelt']}>
                <span class="w-1/12">
                  <input
                    name="traffic-ticket-type"
                    type="checkbox"
                    id="seatBelt"
                    data-id="seatBelt"
                    data-name="Seat Belt"
                    checked={chosenTrafficTickets['seatBelt'] === true ? true : false} />
                </span>
                <label
                  class="w-11/12 font-bold cursor-pointer"
                  for="seatBelt"
                  aria-label="Seat Belt">
                  Seat Belt
                </label>
              </div>
              <div
                class="w-8/12 mx-auto flex justify-around items-center md:w-3/12
                lg:w-3/12 mt-1 rounded-md"
                class:bg-green-300={chosenTrafficTickets['redLightOfficerIssued']}>
                <span class="w-1/12">
                  <input
                    name="traffic-ticket-type"
                    type="checkbox"
                    data-name="Red Light (Officer Issued)"
                    id="redLightOfficerIssued"
                    data-id="redLightOfficerIssued"
                    checked={chosenTrafficTickets['redLightOfficerIssued'] === true ? true : false} />
                </span>
                <label
                  class="w-11/12 font-bold cursor-pointer"
                  for="redLightOfficerIssued"
                  aria-label="Red Light (Officer Issued)">
                  Red Light (Officer Issued)
                </label>
              </div>
              <div
                class="w-8/12 mx-auto flex justify-around items-center md:w-3/12
                lg:w-3/12 mt-1 rounded-md"
                class:bg-green-300={chosenTrafficTickets['redLightCamera']}>
                <span class="w-1/12">
                  <input
                    name="traffic-ticket-type"
                    type="checkbox"
                    id="redLightCamera"
                    data-id="redLightCamera"
                    data-name="Red Light (Camera)"
                    checked={chosenTrafficTickets['redLightCamera'] === true ? true : false} />
                </span>
                <label
                  class="w-11/12 font-bold cursor-pointer"
                  for="redLightCamera"
                  aria-label="Red Light (Camera)">
                  Red Light (Camera)
                </label>
              </div>
              <div
                class="w-8/12 mx-auto flex justify-around items-center md:w-3/12
                lg:w-3/12 mt-1 rounded-md"
                class:bg-green-300={chosenTrafficTickets['speeding']}>
                <span class="w-1/12">
                  <input
                    name="traffic-ticket-type"
                    type="checkbox"
                    id="speeding"
                    data-id="speeding"
                    data-name="Speeding"
                    checked={chosenTrafficTickets['speeding'] === true ? true : false} />
                </span>
                <label
                  class="w-11/12 font-bold cursor-pointer"
                  for="speeding"
                  aria-label="Speeding">
                  Speeding
                </label>
              </div>
              <div
                class="w-8/12 mx-auto flex justify-around items-center md:w-3/12
                lg:w-3/12 mt-1 rounded-md"
                class:bg-green-300={chosenTrafficTickets['stopSignViolation']}>
                <span class="w-1/12">
                  <input
                    name="traffic-ticket-type"
                    type="checkbox"
                    id="stopSignViolation"
                    data-id="stopSignViolation"
                    data-name="Stop Sign Violation"
                    checked={chosenTrafficTickets['stopSignViolation'] === true ? true : false} />
                </span>
                <label
                  class="w-11/12 font-bold cursor-pointer"
                  for="stopSignViolation"
                  aria-label="Stop Sign Violation">
                  Stop Sign Violation
                </label>
              </div>
              <div
                class="w-8/12 mx-auto flex justify-around items-center md:w-3/12
                lg:w-3/12 mt-1 rounded-md"
                class:bg-green-300={chosenTrafficTickets['laneViolation']}>
                <span class="w-1/12">
                  <input
                    name="traffic-ticket-type"
                    type="checkbox"
                    id="laneViolation"
                    data-id="laneViolation"
                    data-name="Lane Violation"
                    checked={chosenTrafficTickets['laneViolation'] === true ? true : false} />
                </span>
                <label
                  class="w-11/12 font-bold cursor-pointer"
                  for="laneViolation"
                  aria-label="Lane Violation">
                  Lane Violation
                </label>
              </div>
              <div
                class="w-8/12 mx-auto flex justify-around items-center md:w-3/12
                lg:w-3/12 mt-1 rounded-md"
                class:bg-green-300={chosenTrafficTickets['carPoolViolation']}>
                <span class="w-1/12">

                  <input
                    name="traffic-ticket-type"
                    type="checkbox"
                    id="carPoolViolation"
                    data-id="carPoolViolation"
                    data-name="Carpool Violation"
                    checked={chosenTrafficTickets['carPoolViolation'] === true ? true : false} />
                </span>
                <label
                  class="w-11/12 font-bold cursor-pointer"
                  for="carPoolViolation"
                  aria-label="Carpool Violation">
                  Carpool Violation
                </label>
              </div>
              <div
                class="w-8/12 mx-auto flex justify-around items-center md:w-3/12
                lg:w-3/12 mt-1 rounded-md"
                class:bg-green-300={chosenTrafficTickets['otherCATrafficTicket']}>
                <span class="w-1/12">

                  <input
                    name="traffic-ticket-type"
                    type="checkbox"
                    id="otherCATrafficTicket"
                    data-id="otherCATrafficTicket"
                    data-name="Other CA Traffic Ticket"
                    checked={chosenTrafficTickets['otherCATrafficTicket'] === true ? true : false} />
                </span>
                <label
                  class="w-11/12 font-bold cursor-pointer"
                  for="otherCATrafficTicket"
                  aria-label="Other CA Traffic Ticket">
                  Other CA Traffic Ticket
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <fieldset
          id="chosen-ticket-container"
          aria-labelledby="traffic-tickets-selected">
          {#each ticketChosenArray as ticket}
            <button
              class="ticket-selected-button"
              data-name={ticket.name}
              data-id={ticket.id}
              type="button"
              on:click={modifyTicketsChosen}>
              {ticket.name}
              <CancelIcon idInfo={ticket.id} />
            </button>
          {/each}
        </fieldset>

        <div class="delivery-date-container">
          <div
            class="delivery-price-container"
            class:active={showTrafficDeliveryDropdown}>
            <button
              type="button"
              tabindex="0"
              on:click={toggleDeliveryDateVisibility}>
              {selectedDeliveryDatePlan}
              <div
                class="absolute inset-y-0 flex h-full w-5"
                style="right: 1rem;">
                <ChevronDownIcon turn={showTrafficDeliveryDropdown} />
              </div>
              <ul
                class="delivery-date-dropdown-container-list"
                class:show={showTrafficDeliveryDropdown}>
                <li
                  data-name="noRush"
                  class:bg-green-300={selectedDateDeliveryPlanRaw === 'noRush'}
                  on:click={() => updateDeliveryDatePlan('noRush')}>
                  No Rush (10 Day Delivery)
                </li>
                <li
                  data-name="fiveDayDelivery"
                  class:bg-green-300={selectedDateDeliveryPlanRaw === 'fiveDayDelivery'}
                  on:click={() => updateDeliveryDatePlan('fiveDayDelivery')}>
                  $10 - Five Day Delivery
                </li>
                <li
                  data-name="nextDayDelivery"
                  class:bg-green-300={selectedDateDeliveryPlanRaw === 'nextDayDelivery'}
                  on:click={() => updateDeliveryDatePlan('nextDayDelivery')}>
                  $20 - Next Day Delivery
                </li>
                <li
                  data-name="sameDayDelivery"
                  class:bg-green-300={selectedDateDeliveryPlanRaw === 'sameDayDelivery'}
                  on:click={() => updateDeliveryDatePlan('sameDayDelivery')}>
                  $30 - Same Day Delivery
                </li>
              </ul>
            </button>
          </div>

          <div class="delivery-date-picker-container">
            <DatePicker
              style="width: 100%;"
              on:dateSelected={e => {
                console.log(e.detail.date);
                purchaseConfirmData = { ...purchaseConfirmData, dueDate: e.detail.date };
              }} />
          </div>
        </div>

        <div
          class="mt-8 flex flex-col items-center lg:flex-row lg:justify-evenly
          lg:mt-16">
          <input
            class="hidden"
            bind:this={fileUploadInput}
            on:change={fileInputChangeHandler}
            type="file"
            name="citationFile"
            id="citationFile" />
          <button
            bind:this={fileUploadButton}
            disabled={fileUploadButtonDisabledState}
            class="w-8/12 flex text-white bg-blue-700 justify-center px-4 py-3
            rounded-full lg:w-4/12"
            on:click={uploadButtonClickHandler}
            type="button">
            <UploadIcon />
            UPLOAD CITATION
          </button>
          <label bind:this={fileUploadLabel} for="citationFile">
            {uploadFileLabelText}
          </label>
        </div>

        <PaymentSummary
          {ticketPriceLookup}
          {totalPrice}
          {deliveryPrice}
          {ticketChosenArray} />

        <TitleSection
          title="PAYMENT INFORMATION"
          paragraph="Your card information will remain 100% safe, private and
          secure." />

        <div id="paypal-button-container" bind:this={paypalElement} />

      </form>
    </section>
  {:else}
    <Loader />
  {/if}
</PageTransition>
