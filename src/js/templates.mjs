import spritePath from '../images/sprite.symbol.svg';

export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.data[0].name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.data[0].designation}</span>
    <span>${info.data[0].states}</span>
  </p>`;
}

export function introTemplate(info) {
  return `<h2>${info.data[0].fullName}</h2>
  <p>${info.data[0].description}</p>`;
}

export function mediaCardTemplate(info, park) {
  return `<div class="media-card">
    <img src="${info.image}" alt="${info.name}" class="media-card__img"/>
    <div class="media-card__content">
      <a href="pages/${info.link}"><h3 class="media-card__title">${info.name}</h3></a>
      <p class="media-card__caption">${info.description}</p>
    </div>
  </div>`;
}

export function footerTemplate(info) {
  const mailingAddress = info.data[0].addresses.find((address) => address.type === "Mailing");
  const voiceNumber = info.data[0].contacts.phoneNumbers.find((number) => number.type === "Voice");

  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailingAddress.line1}<p>
  <p>${mailingAddress.city}, ${mailingAddress.stateCode} ${mailingAddress.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voiceNumber.phoneNumber}</p>
  </section>`;
}

export function alertTemplate(alert) {
  let alertType = "";
  switch (alert.category) {
    case "Park Closure":
      alertType = "closure";
      break;
    default:
      alertType = alert.category.toLowerCase();
  }
  return `<li class="alert">
  <svg class="icon" focusable="false" aria-hidden="true">
    <use xlink:href="${spritePath}#alert-${alertType}"></use>
  </svg>
  <div>
    <h3 class="alert-${alertType}">${alert.title}</h3>
    <p>${alert.description}</p>
  </div></li>`;
}

export function visitorCenterTemplate(center) {
  return `<li>
    <h3 class="visitor-center-card__title">${center.name}</h3>
    <p class="visitor-center-card__description">${center.description}</p>
    <p class="vistor-center-card__directions"><strong>Directions:</strong> ${center.directionsInfo}</p>
  </li>`;
}

export function activityTemplate(activity) {
  return `<li class="activityName">${activity.name}</li>`;
}