console.log("Weather App");

import { toggleLocation } from "./change-location";

import { getAndToggleUnits } from "./toggle-units";

import { selectForecastTab } from "./tabs-ctrl";

import { handleFormSubmit } from "./user-input";

document.addEventListener("DOMContentLoaded", () => {
  toggleLocation();
  getAndToggleUnits();
  selectForecastTab();
  handleFormSubmit();
});
