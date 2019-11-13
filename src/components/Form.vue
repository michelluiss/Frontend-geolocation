<template>
  <div class="form-geolocation">
    <div class="container">
      <form class="form" @submit.prevent="getLocationSite()" action="#" method="get">
        <div class="field-domain">
          <input class="input-host" type="text" name="host" ref="host" placeholder="Website Domain">
          <div>
            <small v-show="host" v-html="message"></small>
          </div>
        </div>
        <button type="submit" class="btn">Locate</button>
      </form>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'

export default {
  name: 'app',
  components: {
  },

  data () {
    return {
      location: '',
      host: false,
      message: '',
      domain: '',
      info: []
    }
  },

  mounted () {
    this.listener()
  },

  methods: {
    listener () {
      this.$bus.$on('CLEAR_FIELD', field => {
        this.$refs.host.value = ''
      })
    },

    getLocationSite () {
      let host = this.$refs.host.value
      if (host !== '') {
        this.host = false
        this.$http.get(host)
          .then((response) => {
            if (response.data.status === 'fail') {
              this.message = response.data.message + '. Enter a valid domain <br>'
              this.message += 'Ex: "www.domain.com" or "domains.com"'
              this.host = true
            } else {
              this.info = response.data
              this.location = {
                lat: this.info.lat,
                lng: this.info.lon
              }
              let id = 'site'
              this.$bus.$emit('INFO_WEBSITE', this.info)
              this.$bus.$emit('INIT_MAP', this.location, id)
            }
          })
      } else {
        this.host = true
        this.message = 'Please fill in the field above with the site domain'
      }
    }
  }
}
</script>

<style lang="scss">
</style>
