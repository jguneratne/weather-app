import { geoKey, forecastLatitude, forecastLongitude } from "./variables";

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
    const location = await locationResponse.json();
    console.log(location);
    console.log(
      "Copyright Attribution: OpenStreetMap, openstreetmap.org/copyright"
    );

    console.log(
      location.features[0].properties.datasource.attribution +
        ", " +
        location.features[0].properties.datasource.license +
        ", " +
        location.features[0].properties.datasource.url
    );
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
