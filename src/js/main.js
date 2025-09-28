import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { parkInfoTemplate, mediaCardTemplate, introTemplate } from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks();

function setHeroImage(info) {
  const heroImg = document.getElementById("hero-img");
  heroImg.src = info.images[0].url;
  heroImg.alt = info.images[0].altText;
}

function setPageTitle(info){
  const title = document.querySelector("title");
  title.innerText = `${info.name}`;
}

function setIntro(info){
  const intro = document.getElementById("intro-text");
  intro.innerHTML = introTemplate(info);
}

function setMediaCards(cardsArray) {
  const mediaCards = document.getElementById("media-cards");
  cardsArray.forEach((card) => {
    mediaCards.innerHTML += mediaCardTemplate(card);
  });
}

setHeaderFooter(parkData);
setPageTitle(parkData);
setHeroImage(parkData);

setIntro(parkData);
setMediaCards(parkInfoLinks);
