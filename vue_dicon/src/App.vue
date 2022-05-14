<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <Checkbox/>
  <MainPage/>
</template>

<script>
import Checkbox from './Checkbox.vue'
import mainPage from './mainPage.vue'

export default {
  name: 'App',
  components: {
    Checkbox,
    mainPage,
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
