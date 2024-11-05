export let weatherIconsData = [];

// Weather Icons

const clearDay = new Image();
clearDay.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/clear-day.svg";

const clearNight = new Image();
clearNight.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/clear-night.svg";

const cloudy = new Image();
cloudy.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/cloudy.svg";

const fog = new Image();
fog.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/fog.svg";

const hail = new Image();
hail.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/hail.svg";

const partlyCloudyDay = new Image();
partlyCloudyDay.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/partly-cloudy-day.svg";

const partlyCloudyNight = new Image();
partlyCloudyNight.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/partly-cloudy-night.svg";

const rainSnowShowersDay = new Image();
rainSnowShowersDay.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/rain-snow-showers-day.svg";

const rainSnowShowersNight = new Image();
rainSnowShowersNight.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/rain-snow-showers-night.svg";

const rainSnow = new Image();
rainSnow.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/rain-snow.svg";

const rain = new Image();
rain.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/rain.svg";

const showersDay = new Image();
showersDay.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/showers-day.svg";

const showersNight = new Image();
showersNight.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/showers-night.svg";

const sleet = new Image();
sleet.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/sleet.svg";

const snowShowersDay = new Image();
snowShowersDay.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/snow-showers-day.svg";

const snowShowersNight = new Image();
snowShowersNight.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/snow-showers-night.svg";

const snow = new Image();
snow.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/snow.svg";

const thunderRain = new Image();
thunderRain.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/thunder-rain.svg";

const thunderShowersDay = new Image();
thunderShowersDay.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/thunder-showers-day.svg";

const thunderShowersNight = new Image();
thunderShowersNight.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/thunder-showers-night.svg";

const thunder = new Image();
thunder.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/thunder.svg";

const wind = new Image();
wind.src =
  "/Users/jguneratne/repos/weather-app/src/assets/imgs/weather-icons/wind.svg";

// Weather Data

const clearDayData = {
  image: clearDay,
  iconName: "clear-day",
};

const clearNightData = {
  image: clearNight,
  iconName: "clear-night",
};

const cloudyData = {
  image: cloudy,
  iconName: "cloudy",
};

const fogData = {
  image: cloudy,
  iconName: "fog",
};

const hailData = {
  image: hail,
  iconName: "hail",
};

const partlyCloudyDayData = {
  image: partlyCloudyDay,
  iconName: "partly-cloudy-day",
};

const partlyCloudyNightData = {
  image: partlyCloudyNight,
  iconName: "partly-cloudy-night",
};

const rainSnowShowersDayData = {
  image: rainSnowShowersDay,
  iconName: "rain-snow-shower-day",
};

const rainSnowShowersNightData = {
  image: rainSnowShowersNight,
  iconName: "rain-snow-shower-night",
};

const rainSnowData = {
  image: rainSnow,
  iconName: "rain-snow",
};

const rainData = {
  image: rain,
  iconName: "rain",
};

const showersDayData = {
  image: showersDay,
  iconName: "showers-day",
};

const showersNightData = {
  image: showersNight,
  iconName: "showers-night",
};

const sleetData = {
  image: sleet,
  iconName: "sleet",
};

const snowShowersDayData = {
  image: snowShowersDay,
  iconName: "snow-showers-day",
};

const snowShowersNightData = {
  image: snowShowersNight,
  iconName: "snow-showers-night",
};

const snowData = {
  image: snow,
  iconName: "snow",
};

const thunderRainData = {
  image: thunderRain,
  iconName: "thunder-rain",
};

const thunderShowersDayData = {
  image: thunderShowersDay,
  iconName: "thunder-showers-day",
};

const thunderShowersNightData = {
  image: thunderShowersNight,
  iconName: "thunder-showers-night",
};

const thunderData = {
  image: thunder,
  iconName: "thunder",
};

const windData = {
  image: wind,
  iconName: "wind",
};

weatherIconsData.push(
  clearDayData,
  clearNightData,
  cloudyData,
  fogData,
  hailData,
  partlyCloudyDayData,
  partlyCloudyNightData,
  rainSnowShowersDayData,
  rainSnowShowersNightData,
  rainSnowData,
  rainData,
  showersDayData,
  showersNightData,
  sleetData,
  snowShowersDayData,
  snowShowersNightData,
  snowData,
  thunderRainData,
  thunderShowersDayData,
  thunderShowersNightData,
  thunderData,
  windData
);
