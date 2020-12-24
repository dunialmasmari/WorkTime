<template>
  <v-app :class="$i18n.locale" :id="$i18n.locale">
      <coreToolbar />
      <coreDrawer />
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      :left="getdir"
      fab
      dark
      fixed
      bottom
      style="margin-bottom:50px; padding: 15px 30px !important;"
      color="#696b6791"
      @click="toTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
    <v-lazy
      v-model="isviewActive"
      :options="{
        threshold: .5
      }"
      transition="fade-transition"
    >
     <coreView />
    </v-lazy>
    <v-lazy
      v-model="iscfooterActive"
      :options="{
        threshold: .5
      }"

      transition="fade-transition"
    >
      <coreFooter />
    </v-lazy>

  </v-app>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    coreToolbar: () => import(/* webpackChunkName: "coreToolbar" */ '@/components/core/Toolbar.vue'),
     coreDrawer: () => import(/* webpackChunkName: "coreDrawer" */ '@/components/core/Drawer.vue'),
    coreFooter: () => import(/* webpackChunkName: "coreFooter" */ '@/components/core/Footer.vue'),
    coreView: () => import(/* webpackChunkName: "coreFooter" */ '@/components/core/controlView.vue')

  },
  data: () => ({
    fab: false,
    istoolbarActive: false,
    isdrawerActive: false,
    isviewActive: false,
    iscfooterActive: false
  }),
  computed: {
    ...mapGetters(['getdir'])

  },
  created () {
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>

<style lang="scss">
.v-application--wrap {
  background-color:#FAFDF6 ;
}
/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
