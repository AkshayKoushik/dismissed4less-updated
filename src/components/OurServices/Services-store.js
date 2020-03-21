import { writable } from "svelte/store";

const services = writable([
    {
        heading: "Speading",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        images: "./services/SPEEDING.png",
        buttonText: "Explore Now",
        altText:"Speading"
    },
    {
        heading: "Red Light",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        images: "./services/RED LIGHT.png",
        buttonText: "Explore Now",
        altText:"Speading"
    },
    {
        heading: "Out of lane",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        images: "./services/OUT OF LANE.png",
        buttonText: "Explore Now",
        altText:"Out of lane"
    },
    {
        heading: "Red light camera",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        images: "./services/RED LIGHT CAMERA.png",
        buttonText: "Explore Now",
        altText:"Red light camera"
    },
    {
        heading: "Sign",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        images: "./services/SIGN.png",
        buttonText: "Explore Now",
        altText:"Sign"
    },
    {
        heading: "carpool",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        images: "./services/CARPOOL.png",
        buttonText: "Explore Now",
        altText:"carpool"
    },
    {
        heading: "cellphone",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        images: "./services/CELLPHONE.png",
        buttonText: "Explore Now",
        altText:"cellphone"
    },
    {
        heading: "commercial violation",
        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
        images: "./services/COMMERCIAL VIOLATION.png",
        buttonText: "Explore Now",
        altText:"commercial violation"
    },
]);

export default services;
