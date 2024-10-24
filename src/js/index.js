console.log("Weather App");

import { selectForecastTab } from "./tabs-ctrl";

import { getTodayInput, getHistoricInput } from "./user-input";

document.addEventListener("DOMContentLoaded", () => {
  selectForecastTab();
  getTodayInput();
  getHistoricInput();
});
