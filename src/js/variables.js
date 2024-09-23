export const key = "FYZ4WWVAF3DKLSGYMBZA734P4";

export const dataForm = document.querySelector("form");
export const locationInput = document.querySelector(".location");
export const date1Input = document.querySelector(".start");
export const date2Input = document.querySelector(".end");
export const unitsInput = document.querySelector("input[name='units']");

export let location = {
  userLocation: "",

  get enteredLocation() {
    return this.userLocation;
  },

  set enteredLocation(newUserLocation) {
    this.userLocation = newUserLocation;
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

export let unitGroup = {
  userUnitGroup: "",

  get enteredUnitGroup() {
    return this.userUnitGroup;
  },

  set enteredUnitGroup(newUserUnitGroup) {
    this.userUnitGroup = newUserUnitGroup;
  },
};
