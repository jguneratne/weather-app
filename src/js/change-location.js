import { location, locationsMenu, locationValues } from "./variables";

import { getTodayForecast } from "./forecast-data";

export function toggleLocation() {
  locationsMenu.addEventListener("change", () => {
    locationValues.forEach((value) => {
      if (value.selected) {
        location.enteredLocation = value.textContent;
        console.log(location.userLocation);
      }
    });
    getTodayForecast();
  });
}
