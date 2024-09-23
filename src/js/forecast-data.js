import { key } from "./variables.js";

import { location, date1, date2, unitGroup } from "./variables.js";

console.log(key);

export async function getForecast() {
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
