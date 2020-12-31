<template>
  <v-app-bar elevation="2" color="black" app height="80">
    <v-layout justify-center align-center >
    <v-toolbar-items>
      <v-flex align-center layout>
        <div class="Navbar">
<!--          <v-toolbar flat color="brown">-->
              <v-btn  color="#ffffff" text :to="`/${$i18n.locale}/`">
                Home
              </v-btn>
              <v-btn text color="#ffffff" :to="`/${$i18n.locale}/tenders`">
                Tenders
              </v-btn>
<!--          </v-toolbar>-->
        </div>
      </v-flex>
    </v-toolbar-items>
    </v-layout>

    <div>
      <v-avatar size="150" tile>
        <v-img :src="require('@/static/v.png')" height="70" contain />
      </v-avatar>
    </div>
  </v-app-bar>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Header',

  data: () => ({
    Header: false,
    responsive: false,
  }),
  computed: {
    ...mapGetters({ getdir: 'app/getdir' }),
  },
  mounted() {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations({ projectDirection: 'app/projectDirection' }),
    setlocale(locale) {
      this.$i18n.locale = locale
      // this.$router.push({
      //   params: { lang: locale }
      // });
      this.projectDirection(this.$i18n.locale)
      this.$vuetify.rtl = this.getdir
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
  },
}
</script>
