import {
  form,
  locationInput,
  location,
  inputError,
  unitsInput,
  unitValue,
  date1Input,
  date1,
  date2Input,
  date2,
  locationsMenu,
  todayForecastDiv,
  hourlyForecastDiv,
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
    hourlyForecastDiv.classList.contains("forecast-info--active") ||
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
    // console.log(location.userLocation);
  } else if (
    (locationInput.value && !locationsMenu.value) ||
    (locationInput.value && locationsMenu.value)
  ) {
    location.enteredLocation = locationInput.value;
    console.log(location.userLocation);
  }

  date1.enteredDate1 = date1Input.value;
  date2.enteredDate2 = date2Input.value;

  for (let unit of unitsInput) {
    if (unit.checked) {
      unitValue.enteredUnitValue = JSON.parse(
        localStorage.getItem("unitValue"),
      );
    }
  }

  // console.log(location.userLocation);
  // console.log(date1.userDate1);
  // console.log(date2.userDate2);
  // console.log(unitValue.enteredUnitValue);
}

function clearLocationField() {
  locationInput.value = "";
}
