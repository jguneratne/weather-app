import {
  form,
  locationInput,
  location,
  inputError,
  unitsInput,
  unitGroup,
  date1Input,
  date1,
  date2Input,
  date2,
  locationsMenu,
  todayForecastDiv,
  fifteenForecastDiv,
  historicForecastDiv,
} from "./variables";

import { getTodayForecast, getHistoricForecast } from "./forecast-data";

export function handleFormSubmit() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!locationInput.value && !locationsMenu.value) {
      inputError.style.display = "initial";
      console.log("No location input");
    } else {
      inputError.style.display = "none";
      console.log("Click!");
      fetchForecast();
    }
  });
}

export function fetchForecast() {
  if (
    todayForecastDiv.classList.contains("forecast-info--active") ||
    fifteenForecastDiv.classList.contains("forecast-info--active")
  ) {
    console.log("Loading Today...");
    handleInput();
    getTodayForecast();
    clearLocationField();
  } else if (historicForecastDiv.classList.contains("forecast-info--active")) {
    console.log("Loading Historic...");
    handleInput();
    getHistoricForecast();
    clearLocationField();
  }
}

function handleInput() {
  if (!locationInput.value && locationsMenu.value) {
    location.enteredLocation = locationsMenu.value;
    console.log(location.userLocation);
  } else {
    location.enteredLocation = locationInput.value;
    console.log(location.userLocation);
  }

  date1.enteredDate1 = date1Input.value;
  date2.enteredDate2 = date2Input.value;

  for (let unit of unitsInput) {
    if (unit.checked) {
      unitGroup.enteredUnitGroup = unit.value;
    }
  }

  console.log(location.userLocation);
  console.log(date1.userDate1);
  console.log(date2.userDate2);
  console.log(unitGroup.userUnitGroup);
}

function clearLocationField() {
  locationInput.value = "";
}
