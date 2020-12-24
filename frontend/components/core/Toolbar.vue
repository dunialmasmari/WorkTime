<template>
  <v-app-bar
    id="core-toolbar"
    app
    height="80"
    style="  background-color: #FAFDF6;">
    <v-btn
      v-if="responsive"
      class="default v-btn--simple"
      dark
      color="#0b0b0b"
      icon
      @click.stop="onClickBtn">
      <v-icon color="#0b0b0b">mdi-view-list</v-icon>
    </v-btn>

    <v-toolbar-items class="mr-5">
      <v-flex
        align-center
        layout
        py-2>
        <v-menu
          bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <v-btn
              v-ripple
              text
              class="toolbar-items  pa-0 mx-0"
              v-on="on">
              <v-avatar>
                <v-icon
                  color="#0b0b0b"
                  style="font-size:30px;">mdi-account</v-icon>
              </v-avatar>

            </v-btn>
          </template>
          <v-card>
            <v-list
              dense
              class="profilelist">
              <v-list-item
                :to="`/${$i18n.locale}/controlPanel/user-profile`"
              >
                <v-list-item-action>
                  <v-icon color="#0b0b0b">mdi-account</v-icon>
                </v-list-item-action>
                <v-list-item-title >{{ $t('Dashbord.toolbar.manageaccount') }}</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="logoutbtn()"
              >
                <v-list-item-action>
                  <v-icon color="#0b0b0b" >mdi-logout</v-icon>
                </v-list-item-action>
                <v-list-item-title>{{ $t('Dashbord.toolbar.logout') }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-menu
          bottom
          left
          content-class="dropdown-menu"
          offset-y
          transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <v-btn
              v-ripple
              text
              class="toolbar-items  pa-0 mx-0"
              v-on="on">
              <v-badge
                :content="notifications.length"
                color="#0b0b0b"
                overlap
                offset-x="24"
                offset-y="20"
              >
                <v-avatar>
                  <v-icon
                    color="#0b0b0b"
                    style="font-size:30px;">mdi-bell</v-icon>
                </v-avatar>
              </v-badge>
            </v-btn>
          </template>
          <v-card>
            <v-list dense>
              <v-list-item
                v-for="notification in notifications"
                :key="notification"
                @click="onClick"
              >
                <v-list-item-title v-text="notification" />
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              text
              dark
              v-on="on"
            >
              <v-icon color="#0b0b0b">mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list >
            <v-list-item
              @click="setlocale('ar')"
            >
              <v-list-item-title>{{ $t('Dashbord.toolbar.languages.ar') }}</v-list-item-title>
            </v-list-item>
            <v-list-item
              @click="setlocale('en')"
            >
              <v-list-item-title>{{ $t('Dashbord.toolbar.languages.en') }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-flex>
    </v-toolbar-items>
    <v-spacer />
    <!-- <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :label="$t('Dashbord.toolbar.search')"
      :search-input.sync="search"
      class="mt-5"
      hide-selected
      hide-no-data
      item-text="name"
      item-value="abbr"
      color="#0b0b0b"
      return-object
    >
      <v-icon
        slot="prepend"
        color="#0b0b0b" >mdi-magnify</v-icon>
    </v-autocomplete> -->
    <v-spacer />
    <!--    <span-->
    <!--      class="icon-logo"-->
    <!--      style="font-size:50px;"><span class="path1"/><span class="path2"/><span class="path3"/><span class="path4"/><span class="path5"/><span class="path6"/><span class="path7"/><span class="path8"/><span class="path9"/><span class="path10"/><span class="path11"/><span class="path12"/><span class="path13"/><span class="path14"/><span class="path15"/><span class="path16"/><span class="path17"/><span class="path18"/><span class="path19"/><span class="path20"/><span class="path21"/><span class="path22"/><span class="path23"/></span>-->
    <!-- <v-img
      :src="require('../../assets/logo.png')"
      width="1"
      height="50"
      style="z-index:0;"
      class="mx-5 py-2 "
      contain /> -->
  </v-app-bar>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
    notifications: [
      'علق احمد على منتج ابل ماك برو',
      'لديك 5 طلبات جديده ',
      'سجل منتج ابل ماك اير تقييم5 من قبل علي'
    ],
    items: [],
    responsive: false
  }),
  computed: {
    ...mapGetters({getdrawer:'app/getdrawer',getdir:'app/getdir'})

  },
  watch: {
    model (val) {
      console.log(val.abbr)
      if (val != null) { this.$router.push(`/${i18n.locale}/controlPanel${val.abbr}`) }
    },
    search (val) {
      console.log(val)
      if (val !== '') {
        this.items = [
          { name: i18n.t('Dashbord.sidebar.main'), abbr: '/dashboard', id: 1 },
         
        ]
      } else { this.items = [] }
    }
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations({setDrawer:'app/setDrawer', toggleDrawer:'app/toggleDrawer', logout:'logout',projectdirection: 'app/projectdirection'}),
    logoutbtn () {
      this.logout()
    },
    onClickBtn () {
      this.setDrawer(!this.getdrawer)
    },
    onClick () {
      //
    },
    setlocale (locale) {
      this.$i18n.locale = locale
      this.$router.push({
        params: { lang: locale }
      })
      this.projectdirection(this.$i18n.locale)
      this.$vuetify.rtl = this.getdir
    },
    onResponsiveInverted () {
      if (window.innerWidth < 1070) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    }
  }
}
</script>

<style>
.profilelist .v-list-item--link{
   color: black !important;
}
/* .ar #core-toolbar{
  left: 0px !important; right: 56px !important;
} */
#core-toolbar a {
  text-decoration: none;
}
</style>
