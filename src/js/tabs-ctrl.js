import {
  tabBtnsDiv,
  tabBtns,
  todayTabBtn,
  datesDiv,
  date1Input,
  date2Input,
  today,
  todayMinusNine,
  forecastDivs,
  todayForecastDiv,
} from "./variables";

export function selectForecastTab() {
  todayTabBtn.classList.add("tab-btn--active");
  todayForecastDiv.classList.add("forecast-info--active");

  tabBtnsDiv.addEventListener("pointerdown", (e) => {
    console.log(e.target.dataset.tab);

    tabBtns.forEach((btn) => {
      btn.classList.remove("tab-btn--active");
    });

    forecastDivs.forEach((div) => {
      div.classList.remove("forecast-info--active");
      if (div.dataset.name === e.target.dataset.tab) {
        div.classList.add("forecast-info--active");
        e.target.classList.add("tab-btn--active");
      }

      if (e.target.dataset.tab === "historic") {
        date1Input.value = todayMinusNine;
        date2Input.value = today;
        datesDiv.style.display = "initial";
      } else {
        datesDiv.style.display = "none";
      }
    });
  });
}
