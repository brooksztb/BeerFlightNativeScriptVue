<script>
export default {
  name: 'login-initial',
  props: {
    visible: Boolean
  },
  methods: {
    welcome: function() {
      // fadeout and notify parent element when finished
      this.$refs.initialContainer.nativeView.animate({
        opacity: 0,
        duration: 500
      }).then( () => {
        this.$emit('login');
      })
    }
  }
}
</script>

<template>
    <StackLayout ref="initialContainer" class="initial-container" v-bind:visibility="visible?'visible':'collapse'">
    <Label text="Beerdex"></Label>
    <StackLayout @tap="welcome()">
      <Label text="Enter the Beerdex" class="initial-button-label"></Label>
    </StackLayout>
  </StackLayout>
</template>

<style scoped>

</style>

