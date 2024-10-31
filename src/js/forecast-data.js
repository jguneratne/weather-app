import {
  key,
  today,
  todayPlusFifteen,
  location,
  unitGroup,
  date1,
  date2,
  forecastLatitude,
  forecastLongitude,
} from "./variables.js";

import { getLocationName } from "./location.js";

export async function getTodayForecast() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location.userLocation +
        "/" +
        today +
        "/" +
        todayPlusFifteen +
        "?unitGroup=" +
        unitGroup.userUnitGroup +
        "&key=" +
        key,

      {
        mode: "cors",
        credentials: "omit",
      }
    );
    const todayData = await response.json();
    console.log(todayData);

    forecastLatitude.userLatitude = todayData.latitude;
    forecastLongitude.userLongitude = todayData.longitude;
    console.log(forecastLatitude.latitude);
    console.log(forecastLongitude.longitude);
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  } finally {
    getLocationName();
  }
}

export async function getHistoricForecast() {
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
        unitGroup.userUnitGroup +
        "&key=" +
        key +
        "&include=days",

      {
        mode: "cors",
        credentials: "omit",
      }
    );
    const historicData = await response.json();
    console.log(historicData);
    forecastLatitude.userLatitude = historicData.latitude;
    forecastLongitude.userLongitude = historicData.longitude;
    console.log(forecastLatitude.latitude);
    console.log(forecastLongitude.longitude);
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  } finally {
    getLocationName();
  }
}
