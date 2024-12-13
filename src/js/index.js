console.log("Weather App");

import { locationInput, locationsMenu } from "./variables";

import { toggleLocation } from "./change-location";

import { getAndToggleUnits } from "./toggle-units";

import { selectForecastTab } from "./tabs-ctrl";

import { handleFormSubmit, fetchForecast } from "./user-input";

import { handleLocationDropdown } from "./location-list";

import { editLocationList } from "./location-edit-form";

import { clearErr } from "./clear-loading-err";

document.addEventListener("DOMContentLoaded", () => {
  handleLocationDropdown();
  toggleLocation();
  getAndToggleUnits();
  selectForecastTab();
  handleFormSubmit();
  editLocationList();
  clearErr();
});

window.addEventListener("load", () => {
  if (!locationInput.value && !locationsMenu.value) {
    return;
  } else {
    fetchForecast();
  }
});
