<template>
  <v-app :class="$i18n.locale" :id="$i18n.locale">
    <BaseHeader />
    <v-main>
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        class="upscroller"
        :left="getdir"
        fab
        fixed
        bottom
        @click="toTop">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
      <MainView />
    </v-main>
    <BaseFooter />
    <messages />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

// import View from '../components/core/View.vue'
// import Navbar from '../components/core/Navbar.vue'
// import Header from '../components/core/Header.vue'
// import Footer from '../components/core/Footer.vue'
// import messages from '../components/material/messages.vue'
export default {
  // components: {
  //   'Core-Footer': Footer,
  //   'Core-Header': Header,
  //   'Core-View': View,
  //   'Core-Navbar': Navbar,
  //   'Core-messages': messages,
  // },
  data: () => ({
    fab: false,
  }),
  computed: {
    ...mapGetters({ getdir: 'app/getdir' }),
  },
  mounted() {
    //this.AllCountries()
    var vm = this
    //this.$store.dispatch('auth/authApp', this.$router.currentRoute)
    this.$axios.interceptors.response.use(
      undefined,
      function axiosRetryInterceptor(err) {
        var config = err.config

        if (err.response === undefined || err.response.status !== 401) {
          console.log('bla bla')
          // If config does not exist or the retry option is not set, reject
          if (!config || !config.retry) {
            return Promise.reject(err)
          }

          // Set the variable for keeping track of the retry count
          config.__retryCount = config.__retryCount || 0

          // Check if we've maxed out the total number of retries
          if (config.__retryCount >= config.retry) {
            // Reject with the error
            return Promise.reject(err)
          }

          // Increase the retry count
          config.__retryCount += 1

          // Create new promise to handle exponential backoff
          var backoff = new Promise(function (resolve) {
            setTimeout(function () {
              resolve()
            }, config.retryDelay || 1)
          })
          // Return the promise in which recalls axios to retry the request
          return backoff.then(function () {
            return vm.$axios(config)
          })
        }
        if (err.response.status === 401) {
       //   vm.$store.dispatch('auth/authApp', vm.$router.currentRoute)
        }
      }
    )
  },
  methods: {
    //  ...mapActions({ AllCountries: 'usermanagement/AllCountries' }),
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>
