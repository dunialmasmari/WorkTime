<template>
  <v-app-bar elevation="2" id="core-header" app height="80">
    <v-toolbar-items>
      <v-flex align-center layout>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text  v-on="on">
              <v-icon> mdi-translate </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="setlocale('ar')">
              <v-list-item-title>
                {{ $t('Core.Header.language.ar') }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="setlocale('en')">
              <v-list-item-title>
                {{ $t('Core.Header.language.en') }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu
          bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn v-ripple text class="toolbar-items pa-0 mx-0" v-on="on">
              <v-avatar>
                <v-icon>mdi-account</v-icon>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list dense>
            
               <v-list-item @click="logoutbtn()">
                <v-list-item-action>
                  <v-icon>mdi-login</v-icon>
                </v-list-item-action>
                <v-list-item-title>
                  {{ $t('Core.Header.Menu.logOut') }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="logoutbtn()">
                <v-list-item-action>
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-action>
                <v-list-item-title>
                  {{ $t('Core.Header.Menu.logOut') }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
      </v-flex>
    </v-toolbar-items>
    <v-spacer />
   
    <v-spacer />
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
