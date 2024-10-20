console.log("Weather App");

import { today, date2Input } from "./variables";

import { selectForecastTab } from "./tabs-ctrl";

import { getTodayInput, getHistoricInput } from "./user-input";

document.addEventListener("DOMContentLoaded", () => {
  date2Input.setAttribute("max", today);

  selectForecastTab();
  getTodayInput();
  getHistoricInput();
});
