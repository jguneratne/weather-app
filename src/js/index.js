console.log("Weather App");

import { getAndToggleUnits } from "./toggle-units";

import { selectForecastTab } from "./tabs-ctrl";

import { getTodayInput, getHistoricInput } from "./user-input";

document.addEventListener("DOMContentLoaded", () => {
  getAndToggleUnits();
  selectForecastTab();
  getTodayInput();
  getHistoricInput();
});
