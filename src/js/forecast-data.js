import { key } from "./variables.js";

import {
  today,
  todayLocation,
  historicLocation,
  date1,
  date2,
  todayUnitGroup,
  historicUnitGroup,
} from "./variables.js";

console.log(key);

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
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
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
    console.log(forecastData);
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
