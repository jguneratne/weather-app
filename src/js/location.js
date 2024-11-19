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
      return;
    } else {
      // create addLocations variable to retrieve current locationValues and append newest location to older locations
      const addLocations = JSON.parse(localStorage.getItem("locationValues"));
      addLocations.push(displayLocation.returnedLocation);

      // set the addLocations variable to locationsValue so old and new locations are in one array
      localStorage.setItem("locationValues", JSON.stringify(addLocations));
      console.log(JSON.parse(localStorage.getItem("locationValues")));

      handleLocationDropdown();
    }
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
