import {
  geoKey,
  forecastLatitude,
  forecastLongitude,
  displayLocation,
} from "./variables";

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

    console.log(displayLocation.returnedLocation);
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
