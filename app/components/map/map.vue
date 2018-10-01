<script>
    import * as utils from "utils/utils";
    import { Map } from 'app/models/mapClasses';

    export default {
        props: {
            "user": User
        },
        data () {
            return {
                map: new Map
            };
        },
        methods: {
            onMapReady(args) {
                var markers = this.user.breweries.filter(brewery => brewery.marker);
                args.map.addMarkers(markers);
            }
        }
    };
</script>

<template>
    <Page class="page">
        <!--Add way to only load the map when the tab is clicked and keep the map cached to only load it once app load-->
        <GridLayout>
            <Mapbox
                accessToken= "pk.eyJ1IjoiYnJvb2tzenRiIiwiYSI6ImNqazFrb2d1ZTBpbzAzcHFsY3JqdThqdmUifQ.JeVbFdP5Fc_DZrT8PxPp1w"
                mapStyle= "mapbox://styles/brooksztb/cjl41izes1byy2rpbkx95964l"
                :latitude="map.latitude"
                :longitude="map.longitude"
                :hideCompass="map.hideCompass"
                :zoomLevel="map.zoomLevel"
                :showUserLocation="map.showUserLocation"
                :disableZoom="map.disableZoom"
                :disableRotation="map.disableRotation"
                :disableScroll="map.disableScroll"
                :disableTilt="disableTilt"
                @mapReady="onMapReady($event)">
            </Mapbox>           
        </GridLayout>
    </Page>
</template>

<style scoped>
    
</style>