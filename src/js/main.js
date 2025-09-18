import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

function setHeroImage(info) {
  const heroImg = document.getElementById("hero-img");
  heroImg.src = info.images[0].url;
  heroImg.alt = info.images[0].altText;
}

function setPageTitle(info){
    const title = document.querySelector("title");
    title.innerText = `${info.name}`;
}

setPageTitle(parkData);
setHeroImage(parkData);
parkInfoTemplate(parkData);