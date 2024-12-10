import {
  today,
  todayOnScreen,
  hourlyForecastDiv,
  fifteenForecastDiv,
  historicForecastDiv,
} from "./variables";

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

  // remove old icon
  if (todayIconDiv.hasChildNodes()) {
    todayIconDiv.firstChild.remove();
  }

  const iconName = todayData.days[0].icon;
  const iconURL = weatherIcons[iconName];

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

export function displayHourly(todayData) {
  removeHourly();
  const date = new Date();
  const currentHour = date.getHours().toString().padStart(2, "0") + ":00:00";

  const todayHours = todayData.days[0].hours;
  const tomorrowHours = todayData.days[1].hours;
  const forecastHours = [...todayHours, ...tomorrowHours];
  console.log(forecastHours);

  const thisHour = forecastHours.find(
    ({ datetime }) => datetime === currentHour, //Look for the first forecastHours[i].datetime that matches the current hour
  );
  // console.log(thisHour);
  const thisHourIndex = forecastHours.indexOf(thisHour);

  for (let i = thisHourIndex; i < thisHourIndex + 12; i++) {
    console.log(forecastHours[i]);

    const forecastCard = document.createElement("div");
    forecastCard.classList = "forecast-card";

    const hourLine = document.createElement("div");
    hourLine.classList = "data-line hour-line";

    const hour = document.createElement("p");
    hour.classList = "hour";
    hour.style.fontWeight = "bold";
    hour.textContent = forecastHours[i].datetime;

    const iconDiv = document.createElement("div");
    iconDiv.classList = "data-line hourly-icon-div";

    const hourlyIconName = forecastHours[i].icon;
    const hourlyIconURL = weatherIcons[hourlyIconName];

    if (hourlyIconURL) {
      const hourlyWeatherIcon = document.createElement("img");
      hourlyWeatherIcon.src = hourlyIconURL;
      hourlyWeatherIcon.classList.add("weather-icon");
      hourlyWeatherIcon.setAttribute("alt", hourlyIconName + "icon");
      iconDiv.appendChild(hourlyWeatherIcon);
    }

    const hourlyTempDiv = document.createElement("div");
    hourlyTempDiv.classList = "hourly-temp-feel-div";

    const tempLine = document.createElement("div");
    tempLine.classList = "data-line temp-line";

    const tempHeading = document.createElement("p");
    tempHeading.classList = "data-heading";
    tempHeading.textContent = "Temp";

    const todayTemp = document.createElement("p");
    todayTemp.classList = "today-temp";
    todayTemp.textContent = forecastHours[i].temp;

    const feelHeading = document.createElement("p");
    feelHeading.classList = "data-heading";
    feelHeading.textContent = "Feel:";

    const todayFeel = document.createElement("p");
    todayFeel.classList = "today-feels";
    todayFeel.textContent = forecastHours[i].feelslike;

    hourlyForecastDiv.appendChild(forecastCard);
    forecastCard.appendChild(hourLine);
    hourLine.appendChild(hour);
    forecastCard.appendChild(iconDiv);
    forecastCard.appendChild(hourlyTempDiv);
    hourlyTempDiv.appendChild(tempLine);
    tempLine.appendChild(tempHeading);
    tempLine.appendChild(todayTemp);
    hourlyTempDiv.appendChild(tempLine);
    tempLine.appendChild(feelHeading);
    tempLine.appendChild(todayFeel);
  }
}

export function displayFifteenDay(todayData) {
  removeFifteen();
  const fifteenDay = todayData.days;
  // console.log(fifteenDay);
  fifteenDay.forEach((day) => {
    const forecastCard = document.createElement("div");
    forecastCard.classList = "forecast-card";

    const dateLine = document.createElement("div");
    dateLine.classList = "data-line date-line";

    const date = document.createElement("p");
    date.classList = "date";
    date.style.fontWeight = "bold";

    const iconDiv = document.createElement("div");
    iconDiv.classList = "data-line icon-div";

    const minMaxDiv = document.createElement("div");
    minMaxDiv.classList = "min-max-div";

    const minLine = document.createElement("div");
    minLine.classList = "data-line min-line";

    const minHeading = document.createElement("p");
    minHeading.classList = "data-heading min-heading";
    minHeading.textContent = "Min:";

    const minTemp = document.createElement("p");
    minTemp.classList = "min";

    const maxLine = document.createElement("div");
    maxLine.classList = "data-line max-line";

    const maxHeading = document.createElement("p");
    maxHeading.classList = "data-heading max-heading";
    maxHeading.textContent = "Max:";

    const maxTemp = document.createElement("p");
    maxTemp.classList = "max";

    const dateContent = new Date(day.datetime).toString().slice(0, 15);
    // console.log(dateContent);
    date.textContent = dateContent;

    const fifteenIconName = day.icon;
    const fifteenIconURL = weatherIcons[fifteenIconName];

    if (fifteenIconURL) {
      const fifteenWeatherIcon = document.createElement("img");
      fifteenWeatherIcon.src = fifteenIconURL;
      fifteenWeatherIcon.classList.add("weather-icon");
      fifteenWeatherIcon.setAttribute("alt", fifteenIconName + "icon");
      iconDiv.appendChild(fifteenWeatherIcon);
    }

    minTemp.textContent = day.tempmin;
    maxTemp.textContent = day.tempmax;

    fifteenForecastDiv.appendChild(forecastCard);
    forecastCard.appendChild(dateLine);
    dateLine.appendChild(date);
    forecastCard.appendChild(iconDiv);
    forecastCard.appendChild(minMaxDiv);
    minMaxDiv.appendChild(minLine);
    minLine.appendChild(minHeading);
    minLine.appendChild(minTemp);
    minMaxDiv.appendChild(maxLine);
    maxLine.appendChild(maxHeading);
    maxLine.appendChild(maxTemp);
  });
}

export function displayHistoricDays(historicData) {
  removeHistoric();

  const historicDays = historicData.days;
  historicDays.forEach((day) => {
    const forecastCard = document.createElement("div");
    forecastCard.classList = "forecast-card";

    const dateLine = document.createElement("div");
    dateLine.classList = "data-line date-line";

    const date = document.createElement("p");
    date.classList = "date";
    date.style.fontWeight = "bold";

    const iconDiv = document.createElement("div");
    iconDiv.classList = "data-line icon-div";

    const minMaxDiv = document.createElement("div");
    minMaxDiv.classList = "min-max-div";

    const minLine = document.createElement("div");
    minLine.classList = "data-line min-line";

    const minHeading = document.createElement("p");
    minHeading.classList = "data-heading min-heading";
    minHeading.textContent = "Min:";

    const minTemp = document.createElement("p");
    minTemp.classList = "min";

    const maxLine = document.createElement("div");
    maxLine.classList = "data-line max-line";

    const maxHeading = document.createElement("p");
    maxHeading.classList = "data-heading max-heading";
    maxHeading.textContent = "Max:";

    const maxTemp = document.createElement("p");
    maxTemp.classList = "max";

    const dateContent = new Date(day.datetime).toString().slice(0, 15);
    console.log(dateContent);
    date.textContent = dateContent;

    const historicIconName = day.icon;
    const historicIconURL = weatherIcons[historicIconName];

    if (historicIconURL) {
      const historicWeatherIcon = document.createElement("img");
      historicWeatherIcon.src = historicIconURL;
      historicWeatherIcon.classList.add("weather-icon");
      historicWeatherIcon.setAttribute("alt", historicIconName + "icon");
      iconDiv.appendChild(historicWeatherIcon);
    }

    minTemp.textContent = day.tempmin;
    maxTemp.textContent = day.tempmax;

    historicForecastDiv.appendChild(forecastCard);
    forecastCard.appendChild(dateLine);
    dateLine.appendChild(date);
    forecastCard.appendChild(iconDiv);
    forecastCard.appendChild(minMaxDiv);
    minMaxDiv.appendChild(minLine);
    minLine.appendChild(minHeading);
    minLine.appendChild(minTemp);
    minMaxDiv.appendChild(maxLine);
    maxLine.appendChild(maxHeading);
    maxLine.appendChild(maxTemp);
  });
}

function removeHourly() {
  while (hourlyForecastDiv.firstChild) {
    hourlyForecastDiv.removeChild(hourlyForecastDiv.firstChild);
  }
}

function removeFifteen() {
  while (fifteenForecastDiv.firstChild) {
    fifteenForecastDiv.removeChild(fifteenForecastDiv.firstChild);
  }
}

function removeHistoric() {
  while (historicForecastDiv.firstChild) {
    historicForecastDiv.removeChild(historicForecastDiv.firstChild);
  }
}
