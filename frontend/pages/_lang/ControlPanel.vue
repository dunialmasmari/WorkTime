<template>
  <div>
   hdddi
  </div>
</template>

<script>
// :image-src="getMostOrdered.productDefaultConfig.imgUrl"
import { mapActions, mapGetters } from 'vuex'
export default {

   layout:'control',
   async fetch({route,redirect}) {
    return redirect('/ar/controlPanel/AllTenders')
   },
  //  asyncData () {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({ name: 'world' })
  //     }, 1000)
  //   })
  // },
  data: () => ({
    loading: false,
    selection: 1,
    orderModel: 0,
    offersModel: 0,
    recentlyModel: 0,
    sizescreen: null,
    slidstoShow: null,
  }),
  computed: {
   
  },
  mounted() {
    window.addEventListener('resize', this.sizescreen1())


  },
  methods: {
   
    sizescreen1() {
      console.log(window.innerWidth)
      if (window.innerWidth >= 1200) {
        this.sizescreen = 4
        this.slidstoShow = 3
      }
      if (window.innerWidth < 1200 && window.innerWidth >= 830) {
        this.sizescreen = 3
        this.slidstoShow = 4
      }
      if (window.innerWidth < 830 && window.innerWidth >= 550) {
        this.sizescreen = 2
        this.slidstoShow = 6
      }
      if (window.innerWidth < 550) {
        this.sizescreen = 1
        this.slidstoShow = 12
      }
    },
    reserve() {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style></style>
