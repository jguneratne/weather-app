// Tabs Ctrl Variables

export const tabBtns = document.querySelectorAll(".tab-btn");
export const datesDiv = document.querySelector(".dates-div");
export const forecastDivs = document.querySelectorAll(".forecast-info");
export const todayForecastDiv = document.querySelector("[data-name='today']");
export const fifteenForecastDiv = document.querySelector(
  "[data-name='fifteen']",
);
export const historicForecastDiv = document.querySelector(
  "[data-name='historic']",
);

// Forecast Data Variables
export const key = "FYZ4WWVAF3DKLSGYMBZA734P4";

export const today = new Date().toISOString().substring(0, 10);
export const todayOnScreen = new Date().toString().slice(0, 15);

const futureDate = new Date();
futureDate.setDate(new Date().getDate() + 14);
export const todayPlusFourteen = futureDate.toISOString().substring(0, 10);

const pastDate = new Date();
pastDate.setDate(new Date().getDate() - 9);
export const todayMinusNine = pastDate.toISOString().substring(0, 10);

// Location Dropdown

export const locationsMenu = document.getElementById("saved-locations");
export const locationValues = [];

// Form Inputs

export const form = document.querySelector(".input-form");
export const locationInput = document.querySelector(".location");
export const inputError = document.querySelector(".input-error");
export const unitsInput = document.getElementsByName("units");
export const date1Input = document.querySelector(".start");
export const date2Input = document.querySelector(".end");

// form Input Data

export let location = {
  userLocation: "",

  get enteredLocation() {
    return this.userLocation;
  },

  set enteredLocation(newUserLocation) {
    this.userLocation = newUserLocation;
  },
};

export let unitGroup = {
  userUnitGroup: "",

  get enteredUnitGroup() {
    return this.userUnitGroup;
  },

  set enteredUnitGroup(newUserUnitGroup) {
    this.userUnitGroup = newUserUnitGroup;
  },
};

export let date1 = {
  userDate1: "",

  get enteredDate1() {
    return this.userDate1;
  },

  set enteredDate1(newUserDate1) {
    this.userDate1 = newUserDate1;
  },
};

export let date2 = {
  userDate2: "",

  get enteredDate2() {
    return this.userDate2;
  },

  set enteredDate2(newUserDate2) {
    this.userDate2 = newUserDate2;
  },
};

// Location Data Variables

export const geoKey = "cd840e39cf3b4160a25abcf0554fdc0c";

export let forecastLatitude = {
  latitude: "",

  get userLatitude() {
    return this.latitude;
  },

  set userLatitude(newLatitude) {
    this.latitude = newLatitude;
  },
};

export let forecastLongitude = {
  longitude: "",

  get userLongitude() {
    return this.longitude;
  },

  set userLongitude(newLongitude) {
    this.longitude = newLongitude;
  },
};

export let displayLocation = {
  returnedLocation: "",

  get responseLocation() {
    return this.returnedLocation;
  },

  set responseLocation(newDisplayLocation) {
    this.returnedLocation = newDisplayLocation;
  },
};
