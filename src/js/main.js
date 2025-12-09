import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate, introTemplate } from "./templates.mjs";
import {setHeaderFooter} from "./setHeaderFooter.mjs";

// const parkData = getParkData();

async function init() {
  const parkData = await getParkData();
  const parkInfoLinks = getParkInfoLinks(parkData.data[0].images);

  setHeaderFooter(parkData);
  setIntro(parkData);
  // setParkInfoLinks(parkInfoLinks);
  setPageTitle(parkData);
  setHeroImage(parkData);
  setMediaCards(parkInfoLinks);
}

init();

function setHeroImage(info) {
  const heroImg = document.getElementById("hero-img");
  heroImg.src = info.data[0].images[0].url;
  heroImg.alt = info.data[0].images[0].altText;
}

function setPageTitle(info){
  const title = document.querySelector("title");
  title.innerText = `${info.data[0].name}`;
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

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
  document.querySelector(".global-nav").classList.toggle("show");
  if (target.tagName != "BUTTON") {
    target = target.closest("button");
  }
  if (document.querySelector(".global-nav").classList.contains("show")) {
    target.setAttribute("aria-expanded", true);
  } else {
    target.setAttribute("aria-expanded", false);
  }
  console.log("toggle");
  });
}
enableNavigation();