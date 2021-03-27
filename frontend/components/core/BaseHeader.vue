<template>
  <v-app-bar
    color="#fff"
    style="border-bottom: 3px solid #4f9dd5"
    app
    :height="appbarheight"
  >
    <v-layout justify-center align-center :wrap="!responsive ? false : true">
      <v-flex sm12 xs12 :class="!drawer ? '' : 'headerbtns'">
       <v-layout wrap>
        <v-btn
          v-if="!responsive || drawer"
          color="#000000"
          :block="!responsive ? false : true"
          class="whenactive"
          text
          :to="`/${$i18n.locale}`"
        >
          {{ $t("Core.Navbar.Home") }}
        </v-btn>
        <v-btn
          v-if="!responsive || drawer"
          text
          :block="!responsive ? false : true"
          color="#000000"
          class="whenactive"
          :to="`/${$i18n.locale}/tenders`"
        >
          {{ $t("Core.Navbar.tenders") }}
        </v-btn>
        <v-btn
          v-if="!responsive || drawer"
          text
          :block="!responsive ? false : true"
          color="#000000"
          class="whenactive"
          :to="`/${$i18n.locale}/about_us`"
        >
          {{ $t("Core.Navbar.about_us") }}
        </v-btn>
        <v-btn
          v-if="!responsive || drawer"
          text
          color="#000000"
          :block="!responsive ? false : true"
          class="whenactive"
          :to="`/${$i18n.locale}/contact_us`"
        >
          {{ $t("Core.Navbar.contact_us") }}
        </v-btn>
        <v-menu offset-y v-if="!responsive || drawer">
          <template v-slot:activator="{ on }">
            <v-btn text dark v-on="on" :block="!responsive ?  false : true">
              <v-icon color="#000000">mdi-translate</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="setlocale('ar')">
              <v-list-item-title>{{
                $t("Core.Header.language.ar")
              }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="setlocale('en')">
              <v-list-item-title>{{
                $t("Core.Header.language.en")
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        </v-layout>
      </v-flex>
      <v-flex :class="!drawer ? '' : 'headerlogo'">
        <v-layout justify-center align-center >
          <v-btn
            v-if="responsive"
            id="responsivebtn"
            color="#4f9dd5"
            text
            rounded
            @click.stop="drawer = !drawer"
          >
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
          <v-spacer />

          <v-avatar height="70" width="150" tile>
            <v-img :src="require('@/static/hrlogo.png')" height="70" contain />
          </v-avatar>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app-bar>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "Header",
  async fetch({ store, route }) {
    conssole.log("vfgfg");

    if (route.params.lang === "ar") {
      this.$vuetify.rtl = true;
      conssole.log("vfgfg");
    } else this.$vuetify.rtl = false;
  },
  data: () => ({
    Header: false,
    responsive: false,
    drawer: null,
  }),
  computed: {
    ...mapGetters({ getdir: "app/getdir" }),
   appbarheight() {
      if(this.responsive){
        if(this.drawer){
        return '270'
        }
        else{
          return '80'
        }
      }
      else{
        return '80'
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    ...mapMutations({ projectDirection: "app/projectDirection" }),
    setlocale(locale) {
      this.$i18n.locale = locale;
      // this.$router.push({
      //   params: { lang: locale }
      // });
      this.projectDirection(this.$i18n.locale);
      this.$vuetify.rtl = this.getdir;
    },
    onResponsiveInverted() {
      if (window.innerWidth < 991) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
  },
};
</script>
<style lang="scss">
.whenactive.v-btn--active {
    background-color: #4f9dd5 !important;
    span {
      color: #fff !important;
    }
}
@media screen and (max-width: 991px) {
  
  .headerbtns {
    order: 2;
  }
  .headerlogo{
    order: 1;
  }
  #navbar .list {
    float: none;
    display: block;
    text-align: center;
  }
}

</style>
