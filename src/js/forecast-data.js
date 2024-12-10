import {
  loader,
  key,
  today,
  todayPlusFourteen,
  location,
  unitValue,
  date1,
  date2,
  forecastLatitude,
  forecastLongitude,
} from "./variables.js";

import { getLocationName } from "./location.js";

import {
  displayToday,
  displayHourly,
  displayFifteenDay,
  displayHistoricDays,
} from "./display-forecasts.js";

export async function getTodayForecast() {
  try {
    loader.style.display = "initial";

    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location.userLocation +
        "/" +
        today +
        "/" +
        todayPlusFourteen +
        "?unitGroup=" +
        unitValue.userUnitValue +
        "&key=" +
        key,

      {
        mode: "cors",
        credentials: "omit",
      },
    );
    const todayData = await response.json();
    console.log(todayData);

    forecastLatitude.userLatitude = todayData.latitude;
    forecastLongitude.userLongitude = todayData.longitude;

    loader.style.display = "none";
    displayToday(todayData);
    displayHourly(todayData);
    displayFifteenDay(todayData);
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  } finally {
    getLocationName();
  }
}

export async function getHistoricForecast() {
  loader.style.display = "initial";
  console.log(date1.userDate1);
  console.log(date2.userDate2);

  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location.userLocation +
        "/" +
        date1.userDate1 +
        "/" +
        date2.userDate2 +
        "?unitGroup=" +
        unitValue.userUnitValue +
        "&key=" +
        key +
        "&include=days",

      {
        mode: "cors",
        credentials: "omit",
      },
    );
    const historicData = await response.json();
    console.log(historicData);
    loader.style.display = "none";
    forecastLatitude.userLatitude = historicData.latitude;
    forecastLongitude.userLongitude = historicData.longitude;
    displayHistoricDays(historicData);
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  } finally {
    getLocationName();
  }
}
