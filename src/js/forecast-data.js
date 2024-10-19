import {
  key,
  today,
  todayLocation,
  historicLocation,
  date1,
  date2,
  todayUnitGroup,
  historicUnitGroup,
  forecastLatitude,
  forecastLongitude,
} from "./variables.js";

import { getLocationName } from "./location.js";

export async function getTodayForecast() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        todayLocation.userTodayLocation +
        "/" +
        today +
        "?unitGroup=" +
        todayUnitGroup.userTodayUnitGroup +
        "&key=" +
        key,

      {
        mode: "cors",
        credentials: "omit",
      }
    );
    const forecastData = await response.json();
    console.log(forecastData);

    forecastLatitude.userLatitude = forecastData.latitude;
    forecastLongitude.userLongitude = forecastData.longitude;
    console.log(forecastLatitude.latitude);
    console.log(forecastLongitude.longitude);
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  } finally {
    getLocationName();
  }
}

export async function getHistoricForecast() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        historicLocation.userHistoricLocation +
        "/" +
        date1.userDate1 +
        "/" +
        date2.userDate2 +
        "?unitGroup=" +
        historicUnitGroup.userHistoricUnitGroup +
        "&key=" +
        key,

      {
        mode: "cors",
        credentials: "omit",
      }
    );
    const forecastData = await response.json();
    forecastLatitude.userLatitude = forecastData.latitude;
    forecastLongitude.userLongitude = forecastData.longitude;
    console.log(forecastLatitude.latitude);
    console.log(forecastLongitude.longitude);
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  } finally {
    getLocationName();
  }
}
