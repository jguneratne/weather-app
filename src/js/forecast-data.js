import { key } from "./variables.js";

console.log(key);

export async function getForecast() {
  const location = "Worcester, MA";
  const date1 = "2024-09-17";
  const date2 = "2024-09-30";

  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location +
        "/" +
        date1 +
        "/" +
        date2 +
        "?key=" +
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
