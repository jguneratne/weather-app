import { today, todayOnScreen } from "./variables";

import { weatherIcons } from "./weather-icons";

export function displayToday(todayData) {
  const todayDate = document.querySelector(".today-date");
  const todayDescrip = document.querySelector(".today-description");
  const todayIconDiv = document.querySelector(".today-icon-div");
  const todayTemp = document.querySelector(".today-temp");
  const todayFeelsLike = document.querySelector(".today-feels");
  const todayMin = document.querySelector(".today-min");
  const todayMax = document.querySelector(".today-max");

  if (today === todayData.days[0].datetime) {
    todayDate.textContent = todayOnScreen;
    todayDate.style.fontWeight = "bold";
  }

  todayDescrip.textContent = todayData.days[0].description;

  const iconName = todayData.days[0].icon;
  const iconURL = weatherIcons[iconName];

  // remove old icon
  if (todayIconDiv.hasChildNodes()) {
    todayIconDiv.firstChild.remove();
  }

  // add new icon
  if (iconURL) {
    const weatherIcon = document.createElement("img");
    weatherIcon.src = iconURL;
    weatherIcon.classList.add("weather-icon");
    weatherIcon.setAttribute("alt", iconName + "icon");
    todayIconDiv.appendChild(weatherIcon);
  }

  todayTemp.textContent = todayData.days[0].temp + "°";

  todayFeelsLike.textContent = todayData.days[0].feelslike + "°";

  todayMin.textContent = todayData.days[0].tempmin + "°";

  todayMax.textContent = todayData.days[0].tempmax + "°";
}
