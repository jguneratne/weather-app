import {
  dataForm,
  locationInput,
  location,
  date1Input,
  date1,
  date2Input,
  date2,
  unitsInput,
  unitGroup,
} from "./variables";

import { getForecast } from "./forecast-data";

export function getUserInput() {
  dataForm.addEventListener("submit", (e) => {
    e.preventDefault();

    location.enteredLocation = locationInput.value.toLowerCase();
    date1.enteredDate1 = date1Input.value;
    date2.enteredDate2 = date2Input.value;
    unitGroup.enteredUnitGroup = unitsInput.value.toLowerCase();

    // getForecast();
    console.log(location.userLocation);
    console.log(date1.userDate1);
    console.log(date2.userDate2);
    console.log(unitGroup.userUnitGroup);
  });
}
