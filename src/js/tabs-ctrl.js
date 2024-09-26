import {
  tabBtns,
  selectToday,
  selectHistoric,
  todayForecastDiv,
  historicForecastDiv,
} from "./variables";

export function selectForecastTab() {
  todayForecastDiv.classList.add("form-div--active");

  tabBtns.forEach((btn) => {
    btn.addEventListener("pointerdown", (e) => {
      if (e.target === selectToday) {
        todayForecastDiv.classList.add("form-div--active");
        historicForecastDiv.classList.remove("form-div--active");
      } else if (e.target === selectHistoric) {
        todayForecastDiv.classList.remove("form-div--active");
        historicForecastDiv.classList.add("form-div--active");
      }
    });
  });
}
