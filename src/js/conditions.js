import { getParkData, getParkAlerts, getVisitorCenterData } from "./parkService.mjs";
import { alertTemplate, visitorCenterTemplate, activityTemplate } from "./templates.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
  const alertsContainer = document.querySelector(".alerts > ul");
  alertsContainer.innerHTML = "";
  const html = alerts.map(alertTemplate);
  alertsContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(centers) {
  const centersContainer = document.querySelector("#centerList");
  centersContainer.innerHTML = "";
  const html = centers.map(visitorCenterTemplate);
  centersContainer.insertAdjacentHTML("beforeend", html.join(""));
}

function setActivities(activities) {
  const activitiesContainer = document.querySelector("#activityList");
  activitiesContainer.innerHTML = "";
  const html = activities.map(activityTemplate);
  activitiesContainer.insertAdjacentHTML("beforeend", html.join(""));
}

async function init() {
  const parkData = await getParkData();
  console.log(parkData);
  const alerts = await getParkAlerts(parkData.data[0].parkCode);
  setHeaderFooter(parkData);
  setAlerts(alerts);
  const visitorCenters = await getVisitorCenterData(parkData.data[0].parkCode);
  setVisitorCenters(visitorCenters);
    setActivities(parkData.data[0].activities);
}

init();