<template>
  <div class="home">
    <Header/>
    <Form/>
    <Information/>
    <Map/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Form from '../components/Form'
import Information from '../components/Information'
import Map from '../components/Map'

export default {
  name: 'app',
  components: {
    Header,
    Form,
    Information,
    Map
  }
}
</script>

<style lang="scss">
</style>
