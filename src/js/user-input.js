import {
  form,
  locationInput,
  location,
  unitsInput,
  unitGroup,
  date1Input,
  date1,
  date2Input,
  date2,
  todayBtn,
  historicBtn,
  todayForecastDiv,
  fifteenForecastDiv,
  historicForecastDiv,
} from "./variables";

import { getTodayForecast, getHistoricForecast } from "./forecast-data";

export function handleFormSubmit() {
  todayBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    handleTodayInput();
    fetchForecast();
  });

  historicBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    handleHistoricInput();
    fetchForecast();
  });
}

export function fetchForecast() {
  if (
    todayForecastDiv.classList.contains("forecast-info--active") ||
    fifteenForecastDiv.classList.contains("forecast-info--active")
  ) {
    console.log("Loading Today...");
    getTodayForecast();
    clearLocationField();
  } else if (historicForecastDiv.classList.contains("forecast-info--active")) {
    console.log("Loading Historic...");
    getHistoricForecast();
    clearLocationField();
  }
}

function handleTodayInput() {
  location.enteredLocation = locationInput.value;

  for (let unit of unitsInput) {
    if (unit.checked) {
      unitGroup.enteredUnitGroup = unit.value;
    }
  }

  // console.log(location.userLocation);
  // console.log(unitGroup.userUnitGroup);
}

function handleHistoricInput() {
  location.enteredLocation = locationInput.value;

  date1.enteredDate1 = date1Input.value;
  date2.enteredDate2 = date2Input.value;

  for (let unit of unitsInput) {
    if (unit.checked) {
      unitGroup.enteredUnitGroup = unit.value;
    }
  }

  // console.log(location.userLocation);
  // console.log(date1.userDate1);
  // console.log(date2.userDate2);
  // console.log(unitGroup.userUnitGroup);
}

function clearLocationField() {
  locationInput.value = "";
}
