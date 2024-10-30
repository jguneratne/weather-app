import { location, locationsMenu } from "./variables";

import { fetchForecast } from "./user-input";

export function toggleLocation() {
  locationsMenu.addEventListener("change", () => {
    const menuOptions = Array.from(locationsMenu);

    for (let option of menuOptions) {
      option.removeAttribute("selected", true);
      if (option.selected) {
        option.setAttribute("selected", true);
        location.enteredLocation = option.value;
        console.log(location.userLocation);
        fetchForecast();
      }
    }
  });
}
