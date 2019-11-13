<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './pages/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i&display=swap');
  @import "./assets/sass/style.scss";
</style>
