import { parkInfoTemplate, footerTemplate } from "./templates.mjs";
import { enableNavigation } from "./navigation.mjs";

export function setHeaderInfo(data) {
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.data[0].url;
  disclaimer.innerHTML = data.data[0].fullName;
  document.querySelector("head > title").textContent = data.data[0].fullName;
  document.querySelector(".hero-banner > img").src = data.data[0].images[0].url;
  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);
}

export function setFooterInfo(info) {
  const footer = document.querySelector("#park-footer");
  footer.innerHTML = footerTemplate(info);
}

export function setHeaderFooter(data){
    setHeaderInfo(data);
    setFooterInfo(data);
    enableNavigation();
}