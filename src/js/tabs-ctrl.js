import {
  tabBtns,
  datesDiv,
  date1Input,
  date2Input,
  today,
  todayMinusTen,
  forecastDivs,
  todayForecastDiv,
} from "./variables";

export function selectForecastTab() {
  todayForecastDiv.classList.add("forecast-info--active");

  tabBtns.forEach((btn) => {
    btn.addEventListener("pointerdown", (e) => {
      forecastDivs.forEach((div) => {
        div.classList.remove("forecast-info--active");
        if (btn.dataset.tab === div.dataset.name) {
          div.classList.add("forecast-info--active");
        }

        if (btn.dataset.tab === "historic") {
          date1Input.value = todayMinusTen;
          date2Input.value = today;
          datesDiv.style.display = "initial";
        } else {
          datesDiv.style.display = "none";
        }
      });
    });
  });
}
