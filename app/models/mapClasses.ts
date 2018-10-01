export class Map {
    constructor(obj: any = null) {
        if (obj) {
            this.accessToken = obj.accessToken || "pk.eyJ1IjoiYnJvb2tzenRiIiwiYSI6ImNqazFrb2d1ZTBpbzAzcHFsY3JqdThqdmUifQ.JeVbFdP5Fc_DZrT8PxPp1w";
            this.mapStyle = obj.mapStyle || "mapbox://styles/brooksztb/cjl41izes1byy2rpbkx95964l";
            this.latitude = obj.latitude || 39.7393;
            this.longitude = obj.longitude || -104.9848;
            this.hideCompass = obj.hideCompass || false;
            this.zoomLevel = obj.zoomLevel || 12;
            this.showUserLocation = obj.showUserLocation || false;
            this.disableZoom = obj.disableZoom || false;
            this.disableRotation = obj.disableRotation || false;
            this.disableScroll = obj.disableScroll || false;
            this.disableTilt + obj.disableTilt || false;

        }
    };
        accessToken: string = "pk.eyJ1IjoiYnJvb2tzenRiIiwiYSI6ImNqazFrb2d1ZTBpbzAzcHFsY3JqdThqdmUifQ.JeVbFdP5Fc_DZrT8PxPp1w";
        mapStyle: string = "mapbox://styles/brooksztb/cjl41izes1byy2rpbkx95964l";
        latitude: number = 39.7393; //default to denver, co
        longitude: number = -104.9848;
        hideCompass: boolean = false;
        zoomLevel: number = 12;
        showUserLocation: boolean = false;
        disableZoom: boolean = false;
        disableRotation: boolean = false;
        disableScroll: boolean = false;
        disableTilt: boolean = false;
}  

export class Marker {
    constructor(obj: any = null) {
        if (obj) {
            this.lat = obj.lat || 0.0;
            this.lng = obj.lng || 0.0;
            this.title = obj.title || "";
            this.subtitle = obj.subtitle || "";
        }
    };
        lat: number = 0; //default to denver, co
        lng: number = 0;
        title: string = "";
        subtitle: string = "";
}


