console.log("Weather App");

import { getTodayInput, getHistoricInput } from "./user-input";

document.addEventListener("DOMContentLoaded", () => {
  getTodayInput();
  getHistoricInput();
});
