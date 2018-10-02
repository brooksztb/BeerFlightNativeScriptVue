<script>
    import * as utils from "utils/utils";
    import Map from './components/map/map'
    import SignUp from '@/components/login/signUp'

    export default {
        methods: {
        },
        components: {
            Map,
            SignUp
        }
    }
    
    
</script>

<template>
    <page>
        <ActionBar class="action-bar" title="Beer Flight">
        </ActionBar>
        <sign-up></sign-up>
        <!-- <TabView :selectedIndex="selectedIndex" androidTabsPosition="bottom">
            <TabViewItem title="Beer Map">
                <map></map>
            </TabViewItem>
            <TabViewItem title="Beer List">
                <label text="This is where the List view Goes" />
            </TabViewItem>
            <TabViewItem title="Settings">
                <label text="These are where the user settings are" />
            </TabViewItem>
        </TabView> -->
    </page>
</template>

<style scoped>
</style>