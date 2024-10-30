console.log("Weather App");

import { location, locationValues } from "./variables";

import { toggleLocation } from "./change-location";

import { getAndToggleUnits } from "./toggle-units";

import { selectForecastTab } from "./tabs-ctrl";

import { handleFormSubmit } from "./user-input";

document.addEventListener("DOMContentLoaded", () => {
  console.log(location.userLocation);
  console.log(locationValues);
  toggleLocation();
  getAndToggleUnits();
  selectForecastTab();
  handleFormSubmit();
});
