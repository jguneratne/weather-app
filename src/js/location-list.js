import { locationsMenu, locationValues } from "./variables";

export function handleLocationDropdown() {
  replaceLocationEntries();
  addLocationEntries();
}

function addLocationEntries() {
  const disabledOption = document.createElement("option");
  disabledOption.value = "";
  disabledOption.setAttribute("disabled", true);
  disabledOption.textContent = "--Please choose a location--";
  locationsMenu.appendChild(disabledOption);

  for (let i = 0; i < locationValues.length; i++) {
    const option = document.createElement("option");
    option.value = locationValues[i];
    option.textContent = locationValues[i];

    locationsMenu.appendChild(option);

    if (option.value === locationValues[locationValues.length - 1]) {
      option.setAttribute("selected", true);
    }
  }
}

function replaceLocationEntries() {
  while (locationsMenu.firstChild) {
    locationsMenu.removeChild(locationsMenu.firstChild);
  }
}
