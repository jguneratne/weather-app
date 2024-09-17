console.log("Weather App");

import { getForecast } from "./forecast-data";

document.addEventListener("DOMContentLoaded", () => {
  getForecast();
});
