<script>
import * as platformModule from 'tns-core-modules/platform';
import LoginInitial from './LoginInitial';
import LoginMain from './LoginMain';
import * as enums from 'ui/enums'    

export default {
    components: {
        LoginInitial,
        LoginMain
    },
    data() {
        return {
            state: 'initial'
        }
    },
    computed: {
        pageClasses: function () {
            return {
                // add top class so we can apply styles to specific platforms
                'platform-ios': platformModule.isIOS,
                'platform-android': platformModule.isAndroid
            }
        }
    },
    methods: {
        showMainContent: function() {
            this.$refs.logoContainer.nativeView
            .animate({
            translate: { x: 0, y: platformModule.isAndroid ? -70 : -50 },
            duration: 500,
            curve: enums.AnimationCurve.easeIn })
            .then(() => {
                this.state = 'main'
            });
        }
    }

}
</script>

<template>
    <page ref="page" :class="pageClasses" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
        <GridLayout class='login'>
            
            <LoginInitial ref="loginInitial" @login="showMainContent()" :visible="state === 'initial'"></LoginInitial>
            <LoginMain ref="loginMain" :visible="state === 'main'"></LoginMain>

            <AbsoluteLayout ref="logoContainer" class="logo-container">
            </AbsoluteLayout>
        </GridLayout>
    </page>
</template>

<style scoped>

</style>