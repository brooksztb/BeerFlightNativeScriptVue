<script>
    import * as utils from "utils/utils";
    import Map from './components/map/map'

    export default {
        methods: {
        },
        components: {
            Map
        }
    }
    
    
</script>

<template>
    <page>
        <ActionBar class="action-bar" title="Beer Flight">
            <ActionItem ios.icon="res://ic_menu" ios.position="left"
            android.icon="res://ic_menu_black_24dp" android.position="actionBar" @tap="toggleDrawer" />
        </ActionBar>
        <map></map>
    </page>
</template>

<style scoped>
    .sideStackLayout {
        z-index: 1;
    }
</style>