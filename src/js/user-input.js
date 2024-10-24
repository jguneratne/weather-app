import {
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
} from "./variables";

import { getTodayForecast, getHistoricForecast } from "./forecast-data";

export function getTodayInput() {
  todayBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    console.log("CLICK!");

    location.enteredLocation = locationInput.value;

    for (let unit of unitsInput) {
      if (unit.checked) {
        unitGroup.enteredUnitGroup = unit.value;
      }
    }
    getTodayForecast();
  });
}

export function getHistoricInput() {
  historicBtn.addEventListener("pointerdown", (e) => {
    e.preventDefault();

    location.enteredLocation = locationInput.value;
    date1.enteredDate1 = date1Input.value;
    date2.enteredDate2 = date2Input.value;

    for (let unit of unitsInput) {
      if (unit.checked) {
        unitGroup.enteredUnitGroup = unit.value;
      }
    }

    getHistoricForecast();
  });
}
