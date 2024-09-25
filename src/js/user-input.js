import {
  todayForm,
  historicForm,
  todayLocationInput,
  historicLocationInput,
  todayLocation,
  historicLocation,
  date1Input,
  date1,
  date2Input,
  date2,
  todayUnitsInput,
  historicUnitsInput,
  todayUnitGroup,
  historicUnitGroup,
} from "./variables";

import { getTodayForecast, getHistoricForecast } from "./forecast-data";

export function getTodayInput() {
  todayForm.addEventListener("submit", (e) => {
    e.preventDefault();

    todayLocation.enteredTodayLocation = todayLocationInput.value;

    for (let unit of todayUnitsInput) {
      if (unit.checked) {
        todayUnitGroup.enteredTodayUnitGroup = unit.value;
      }
    }

    getTodayForecast();
    // console.log(todayLocation.userTodayLocation);
    // console.log(todayUnitGroup.userTodayUnitGroup);
    // console.log(todayForm.value);
  });
}

export function getHistoricInput() {
  historicForm.addEventListener("submit", (e) => {
    e.preventDefault();

    historicLocation.enteredHistoricLocation = historicLocationInput.value;
    date1.enteredDate1 = date1Input.value;
    date2.enteredDate2 = date2Input.value;

    for (let unit of historicUnitsInput) {
      if (unit.checked) {
        historicUnitGroup.enteredHistoricUnitGroup = unit.value;
      }
    }

    getHistoricForecast();
    // console.log(historicLocation.userHistoricLocation);
    // console.log(date1.userDate1);
    // console.log(date2.userDate2);
    // console.log(historicUnitGroup.userHistoricUnitGroup);
  });
}
