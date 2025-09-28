export function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

export function introTemplate(info) {
  return `<h2>${info.fullName}</h2>
  <p>${info.description}</p>`;
}

export function mediaCardTemplate(info) {
  return `<div class="media-card">
    <img src="${info.image}" alt="${info.name}" class="media-card__img"/>
    <div class="media-card__content">
      <h3 class="media-card__title">${info.name}</h3>
      <p class="media-card__caption">${info.description}</p>
    </div>
  </div>`;
}

export function footerTemplate(info) {
  const mailingAddress = info.addresses.find((address) => address.type === "Mailing");
  const voiceNumber = info.contacts.phoneNumbers.find((number) => number.type === "Voice");

  return `<section class="contact">
  <h3>Contact Info</h3>
  <h4>Mailing Address:</h4>
  <div><p>${mailingAddress.line1}<p>
  <p>${mailingAddress.city}, ${mailingAddress.stateCode} ${mailingAddress.postalCode}</p></div>
  <h4>Phone:</h4>
  <p>${voiceNumber.phoneNumber}</p>
  </section>`;
}