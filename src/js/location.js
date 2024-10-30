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
      }
    );
    const locationData = await locationResponse.json();
    console.log(locationData);
    console.log(
      "Copyright Attribution: OpenStreetMap, openstreetmap.org/copyright"
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
      locationValues.push(displayLocation.returnedLocation);
      console.log(locationValues);
      handleLocationDropdown();
    }
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
