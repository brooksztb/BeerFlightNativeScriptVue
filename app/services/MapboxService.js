
const accessToken = "pk.eyJ1IjoiYnJvb2tzenRiIiwiYSI6ImNqazFrb2d1ZTBpbzAzcHFsY3JqdThqdmUifQ.JeVbFdP5Fc_DZrT8PxPp1w";
const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

export default class MapboxService {

    getLocationCoordinates(location) {
        var encodedLocation =  JSON.stringify(location);
        const request = mapboxUrl + encodedLocation + ".json?access_token=" + accessToken; 

        const locationSearch = async () => {
            const response =  await fetch(request).json();

            if (response.features) {
                return response.features.geometry.coordinates;
            }
        }
    }
}