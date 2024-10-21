// Tabls Ctrl Variables

export const tabBtns = document.querySelectorAll(".tab-btn");
export const datesDiv = document.querySelector(".dates-div");
export const forecastDivs = document.querySelectorAll(".forecast-info");
export const todayForecastDiv = document.querySelector("[data-name='today']");

// Forecast Data Variables

// export const key = "FYZ4WWVAF3DKLSGYMBZA734P4";

export const today = new Date().toISOString().substring(0, 10);

const futureDate = new Date();
futureDate.setDate(new Date().getDate() + 15);
export const todayPlusFifteen = futureDate.toISOString().substring(0, 10);

const pastDate = new Date();
pastDate.setDate(new Date().getDate() - 15);
export const todayMinusFifteen = pastDate.toISOString().substring(0, 10);

// export const todayForm = document.querySelector(".today-form");
// export const historicForm = document.querySelector(".historic-form");
// export const todayLocationInput = document.querySelector(".today-location");
// export const historicLocationInput =
//   document.querySelector(".historic-location");
export const date1Input = document.querySelector(".start");
export const date2Input = document.querySelector(".end");
// export const todayUnitsInput = document.getElementsByName("today-units");
// export const historicUnitsInput = document.getElementsByName("historic-units");

// export let todayLocation = {
//   userTodayLocation: "",

//   get enteredTodayLocation() {
//     return this.userTodayLocation;
//   },

//   set enteredTodayLocation(newUserTodayLocation) {
//     this.userTodayLocation = newUserTodayLocation;
//   },
// };

// export let historicLocation = {
//   userHistoricLocation: "",

//   get enteredHistoricLocation() {
//     return this.userHistoricLocation;
//   },

//   set enteredHistoricLocation(newUserHistoricLocation) {
//     this.userHistoricLocation = newUserHistoricLocation;
//   },
// };

// export let date1 = {
//   userDate1: "",

//   get enteredDate1() {
//     return this.userDate1;
//   },

//   set enteredDate1(newUserDate1) {
//     this.userDate1 = newUserDate1;
//   },
// };

// export let date2 = {
//   userDate2: "",

//   get enteredDate2() {
//     return this.userDate2;
//   },

//   set enteredDate2(newUserDate2) {
//     this.userDate2 = newUserDate2;
//   },
// };

// export let todayUnitGroup = {
//   userTodayUnitGroup: "",

//   get enteredTodayUnitGroup() {
//     return this.userTodayUnitGroup;
//   },

//   set enteredTodayUnitGroup(newTodayUserUnitGroup) {
//     this.userTodayUnitGroup = newTodayUserUnitGroup;
//   },
// };

// export let historicUnitGroup = {
//   userHistoricUnitGroup: "",

//   get enteredHistoricUnitGroup() {
//     return this.userHistoricUnitGroup;
//   },

//   set enteredHistoricUnitGroup(newHistoricUserUnitGroup) {
//     this.userHistoricUnitGroup = newHistoricUserUnitGroup;
//   },
// };

// // Location Data Variables

// export const geoKey = "cd840e39cf3b4160a25abcf0554fdc0c";

// export let forecastLatitude = {
//   latitude: "",

//   get userLatitude() {
//     return this.latitude;
//   },

//   set userLatitude(newLatitude) {
//     this.latitude = newLatitude;
//   },
// };

// export let forecastLongitude = {
//   longitude: "",

//   get userLongitude() {
//     return this.longitude;
//   },

//   set userLongitude(newLongitude) {
//     this.longitude = newLongitude;
//   },
// };
