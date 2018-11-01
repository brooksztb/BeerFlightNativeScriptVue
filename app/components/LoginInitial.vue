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
    <StackLayout ref="initialContainer" class="initial-container" :visibility="visible?'visible':'collapse'">
      <Label class="inital-title" text="Beerdex" />
      <StackLayout @tap="welcome()">
        <Label text="Enter the Beerdex" class="initial-button-label" />
      </StackLayout>
  </StackLayout>
</template>

<style scoped>
  
</style>

