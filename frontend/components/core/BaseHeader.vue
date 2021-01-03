<template>
  <v-app-bar  color="#fff" app height="80">
    <v-layout justify-center align-center >
    <v-toolbar-items>
      <v-flex align-center layout>
        <div class="Navbar">
<!--          <v-toolbar flat color="brown">-->
              <v-btn  color="#5f5d5e" text :to="`/${$i18n.locale}/`">
                Home
              </v-btn>
              <v-btn text color="#5f5d5e" :to="`/${$i18n.locale}/tenders`">
                Tenders
              </v-btn>
                 <v-btn text color="#5f5d5e" :to="`/${$i18n.locale}/about_us`">
                about us
              </v-btn>
                 <v-btn text color="#5f5d5e" :to="`/${$i18n.locale}/contact_us`">
                contact us
              </v-btn>
<!--          </v-toolbar>-->
        </div>
      </v-flex>
    </v-toolbar-items>
    </v-layout>
    <v-spacer />
    <div>
      <v-avatar size="150" tile>
        <v-img :src="require('@/static/hrlogo.png')" height="70" contain />
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
