import {
  geoKey,
  forecastLatitude,
  forecastLongitude,
  displayLocation,
  locationValues,
} from "./variables";

import { handleLocationDropdown } from "./location-list";

export async function getLocationName() {
  const requestOptions = {
    method: "GET",
  };

  try {
    const locationResponse = await fetch(
      "https://api.geoapify.com/v1/geocode/reverse?lat=" +
        forecastLatitude.latitude +
        "&lon=" +
        forecastLongitude.longitude +
        "&apiKey=" +
        geoKey,

      {
        requestOptions,
        mode: "cors",
        credentials: "omit",
      },
    );
    const locationData = await locationResponse.json();
    console.log(locationData);
    console.log(
      "Copyright Attribution: OpenStreetMap, openstreetmap.org/copyright",
    );

    displayLocation.responseLocation =
      locationData.features[0].properties.city +
      ", " +
      locationData.features[0].properties.state_code +
      ", " +
      locationData.features[0].properties.country;

    if (locationValues.includes(displayLocation.returnedLocation)) {
      // create removeLocation variable to retrieve duplicate entered location and remove from locationValues
      const removeLocation = JSON.parse(localStorage.getItem("locationValues"));
      removeLocation.splice(
        removeLocation.indexOf(displayLocation.returnedLocation),
        1,
      );
      // re-add duplicate location to end of locationValues array
      removeLocation.push(displayLocation.returnedLocation);

      localStorage.setItem("locationValues", JSON.stringify(removeLocation));
      // console.log(JSON.parse(localStorage.getItem("locationValues")));
      // rebuild location select menu to reflect new order of locations
      handleLocationDropdown();
    } else {
      // create addLocation variable to retrieve current locationValues and append newest location to older locations
      const addLocation = JSON.parse(localStorage.getItem("locationValues"));
      addLocation.push(displayLocation.returnedLocation);
      // set the addLocations variable to locationsValue so old and new locations are in one array
      localStorage.setItem("locationValues", JSON.stringify(addLocation));
      console.log(JSON.parse(localStorage.getItem("locationValues")));
      // rebuild location select menu to display all locations
      handleLocationDropdown();
    }
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
