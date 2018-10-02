<script>
    import * as utils from "utils/utils";
    import Map from '.components/map/map'

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
        <TabView :selectedIndex="selectedIndex" androidTabsPosition="bottom">
            <TabViewItem title="Beer Map">
                <map></map>
            </TabViewItem>
            <TabViewItem title="Beer List">
                <label text="This is where the List view Goes" />
            </TabViewItem>
            <TabViewItem title="Settings">
                <label text="These are where the user settings are" />
            </TabViewItem>
        </TabView>
    </page>
</template>

<style scoped>
    .sideStackLayout {
        z-index: 1;
    }
</style>