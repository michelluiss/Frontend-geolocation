<template>
  <div class="data-domain">
    <div class="item">
      <label>IP:</label>
      <span>{{this.domain.query}}</span>
      <!-- <button @click="showInfo()">?</button> -->
    </div>
    <div class="item">
      <label>Country:</label>
      <span>{{this.domain.country}}</span>
    </div>
    <div class="item">
      <label>Region:</label>
      <span>{{this.domain.regionName}}</span>
    </div>
    <div class="item">
      <label>City:</label>
      <span>{{this.domain.city}}</span>
    </div>
    <div class="item">
      <label>Time Zone:</label>
      <span>{{this.domain.timezone}}</span>
    </div>
    <div class="item">
      <label>Latitude:</label>
      <span>{{this.domain.lat}}</span>
    </div>
    <div class="item">
      <label>Longitude:</label>
      <span>{{this.domain.lon}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['domain'],

  components: {
  },
  data () {
    return {
    }
  },

  methods: {
    showInfo () {
      alert('JSDLKFJK')
    }
  }

}
</script>

<style lang="scss">
</style>
