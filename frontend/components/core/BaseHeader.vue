<template>
  <v-app-bar  color="#fff" style="border-bottom:3px solid #4f9dd5" app height="80">
    <v-layout justify-center align-center >
    <v-toolbar-items>
      <v-flex align-center layout>
        <div class="Navbar">
<!--          <v-toolbar flat color="brown">-->
              <v-btn  color="#000000" class="whenactive" text :to="`/${$i18n.locale}/home`">
                {{ $t('Core.Navbar.Home') }}
              </v-btn>
              <v-btn text color="#000000" class="whenactive" :to="`/${$i18n.locale}/tenders`">
                {{ $t('Core.Navbar.tenders') }}
              </v-btn>
                 <v-btn text color="#000000" class="whenactive" :to="`/${$i18n.locale}/about_us`">
                 {{ $t('Core.Navbar.about_us') }}
              </v-btn>
                 <v-btn text color="#000000" class="whenactive" :to="`/${$i18n.locale}/contact_us`">
                 {{ $t('Core.Navbar.contact_us') }}
              </v-btn>
              <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              dark
              v-on="on"
            >
              <v-icon color="#000000">mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list >
            <v-list-item
              @click="setlocale('ar')"
            >
              <v-list-item-title>{{ $t('Core.Header.language.ar') }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="setlocale('en')"
            >
              <v-list-item-title>{{ $t('Core.Header.language.en') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
<style lang="scss">
  .whenactive.v-btn--active{
    background-color: #4f9dd5;
    span{
    color:#fff;
  }
  }
 </style>
