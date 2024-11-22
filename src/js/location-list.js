import { locationsMenu } from "./variables";

export function handleLocationDropdown() {
  console.log(JSON.parse(localStorage.getItem("locationValues")));

  replaceLocationEntries();
  addLocationEntries();
}

function addLocationEntries() {
  const disabledOption = document.createElement("option");
  disabledOption.value = "";
  disabledOption.setAttribute("disabled", true);
  disabledOption.textContent = "--Please choose a location--";
  locationsMenu.appendChild(disabledOption);

  const menuItems = JSON.parse(localStorage.getItem("locationValues"));

  for (let i = 0; i < menuItems.length; i++) {
    const option = document.createElement("option");
    option.value = menuItems[i];
    option.textContent = menuItems[i];

    locationsMenu.appendChild(option);

    if (option.value === menuItems[menuItems.length - 1]) {
      option.setAttribute("selected", true);
    }
  }
}

function replaceLocationEntries() {
  while (locationsMenu.firstChild) {
    locationsMenu.removeChild(locationsMenu.firstChild);
  }
}
