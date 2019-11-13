<template>
  <div class="section-information">
    <div class="container">
      <div class="information">
        <h2 class="subtitle">Estimated location of website</h2>
        <info-domain v-bind:domain="infoWebSite"></info-domain>
        <div class="box-buttons">
          <button type="submit" class="btn" @click="resetLocation()" :disabled="resetButtonSite">Reset Location</button>
        </div>
      </div>
      <div class="information">
        <h2 class="subtitle">My Estimated location</h2>
        <info-domain v-bind:domain="info"></info-domain>
        <div class="box-buttons">
          <button type="submit" class="btn" @click="myLocation()" :disabled="myLocationButton">My Location</button>
          <button type="submit" class="btn" @click="resetLocationUser()" :disabled="resetButtonUser">Reset Location</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import InfoDomain from './InformationDomain'

export default {
  components: {
    'info-domain': InfoDomain
  },
  data () {
    return {
      infoWebSite: {
        query: '0.0.0.0'
      },
      info: {
        query: '0.0.0.0'
      },
      location: [],
      resetButtonSite: true,
      resetButtonUser: true,
      myLocationButton: false
    }
  },

  mounted () {
    this.listener()
  },

  methods: {
    listener () {
      this.$bus.$on('INFO_WEBSITE', info => {
        this.infoWebSite = info
        this.resetButtonSite = false
      })
    },

    myLocation () {
      this.$http.get('')
        .then((response) => {
          this.info = response.data
          this.location = {
            lat: this.info.lat,
            lng: this.info.lon
          }
          let id = 'user'
          this.resetButtonUser = false
          this.myLocationButton = true
          this.$bus.$emit('INIT_MAP', this.location, id)
        })
    },

    resetLocation () {
      this.infoWebSite = {
        query: '0.0.0.0'
      }
      this.resetButtonSite = true
      this.$bus.$emit('CLOSE_MAP', 'site')
      this.$bus.$emit('CLEAR_FIELD')
    },

    resetLocationUser () {
      this.info = {
        query: '0.0.0.0'
      }
      this.resetButtonUser = true
      this.myLocationButton = false
      this.$bus.$emit('CLOSE_MAP', 'user')
    }
  }

}
</script>

<style lang="scss">
</style>
