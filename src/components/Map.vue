<template>
  <div class="section-map">
    <div class="container">
      <div class="map">
        <div id="map"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },

  data () {
    return {
      map: '',
      markers: [],
      marker: '',
      markerUser: null,
      markerSite: null,
      setTnstanceMap: false,
      countInstanceMap: 0,
      uniqueId: 1
    }
  },

  mounted () {
    this.listener()
  },

  methods: {
    listener () {
      this.$bus.$on('INIT_MAP', (location, id) => {
        this.initMap(location, id)
      })
      this.$bus.$on('CLOSE_MAP', id => {
        this.closeMap(id)
      })
    },

    initMap (location, id) {
      if (!this.setTnstanceMap) {
        this.createMap()
        this.setTnstanceMap = true
      }
      this.createInstanceMap(location, id)
    },

    createMap () {
      let loc = {lat: 0, lng: 0}
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 10
      })
    },

    closeMap (id) {
      if (id === 'user') {
        this.markerUser.setMap(null)
        if (this.markerSite !== null || this.markerSite.map !== null) {
          let lat = this.markerSite.getPosition().lat()
          let lng = this.markerSite.getPosition().lng()
          this.map.setCenter(new window.google.maps.LatLng({lat, lng}))
          this.map.setZoom(10)
        } else {
          this.map.setZoom(1)
        }
        this.verifyMarker()
      } else {
        this.markerSite.setMap(null)
        if (this.markerUser !== null || this.markerUser.map !== null) {
          let lat = this.markerUser.getPosition().lat()
          let lng = this.markerUser.getPosition().lng()
          this.map.setCenter(new window.google.maps.LatLng({lat, lng}))
          this.map.setZoom(10)
        } else {
          this.map.setZoom(1)
        }
        this.verifyMarker()
      }
    },

    verifyMarker () {
      if (this.markerUser.map === null && this.markerSite.map === null) {
        this.map.setCenter(new window.google.maps.LatLng(0, 0))
        this.map.setZoom(1)
      }
    },

    createInstanceMap (location, id) {
      if (id === 'user') {
        this.markerUser = new window.google.maps.Marker({position: location, map: this.map})
        if (this.markerSite === null || this.markerSite.map === null) {
          this.map.setCenter(new window.google.maps.LatLng(location))
          this.map.setZoom(10)
        } else {
          this.map.setCenter(new window.google.maps.LatLng(0, 0))
          this.map.setZoom(1)
        }
      } else {
        // this.markerSite.setMap(null)
        if (this.markerSite !== null) {
          this.markerSite.setMap(null)
          this.markerSite = new window.google.maps.Marker({position: location, map: this.map})
        } else {
          this.markerSite = new window.google.maps.Marker({position: location, map: this.map})
        }
        if (this.markerUser === null || this.markerUser.map === null) {
          this.map.setCenter(new window.google.maps.LatLng(location))
          this.map.setZoom(10)
        } else {
          this.map.setCenter(new window.google.maps.LatLng(0, 0))
          this.map.setZoom(1)
        }
      }
    }

  }
}
</script>

<style lang="scss">
</style>
