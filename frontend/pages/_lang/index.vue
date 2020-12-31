<template>
  <div>
  <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
                    {{ slide }} Slide
</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-layout class="py-5 mx-6">
      <v-flex sm2 xs12 md2 lg11>
        <h2 class="py-2" style="color: #00695c">Latest Tenders</h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-divider
        class="elevation-5 align-center mx-6 py-2"
        style="background-color: #3b8070"
      />
    </v-layout>
    <v-layout class="py-4" align-center justify-center>
      <v-flex class="py-2" sm2 xs12 md2 lg11 style="background-color: #f5f5f5">
        <v-flex lg12 md8 sm8 xs12>
        <v-layout class="py-4" align-center justify-center wrap>
          <v-card v-for="slide in card" class="ma-3" width="280" height="406">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            />
            <v-card-title> {{slide.title}} </v-card-title>
            <v-divider
              class="elevation-5 align-center mx-6"
              style="background-color: #3b8070"
            />
            <v-card-subtitle>
              {{slide.adress}}
              <br />
              Deadline:{{slide.dedline}}
            </v-card-subtitle>
          </v-card>
        </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// :image-src="getMostOrdered.productDefaultConfig.imgUrl"
import { mapActions, mapGetters } from 'vuex'
export default {
  //  asyncData () {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({ name: 'world' })
  //     }, 1000)
  //   })
  // },
  data: () => ({
     tenders: 0,
        card:[
            {
            title: "Top western road trips Top western road trips Top western road trips",
            dedline:'20-20-2002',
            adress:'alyemen- aden'
        },
            {
                title: "Top western road trips Top western road trips",
                dedline:'20-20-2002',
                adress:'alyemen- aden'
            },
            {
                title: "Top western road trips Top western road trips",
                dedline:'20-20-2002',
                adress:'alyemen- aden'
            },
            {
                title: "Top western road trips Top western road trips",
                dedline:'20-20-2002',
                adress:'alyemen- aden'
            },
            {
                title: "Top western road trips Top western road trips",
                dedline:'20-20-2002',
                adress:'alyemen- aden'
            },
            {
                title: "Top western road trips Top western road trips",
                dedline:'20-20-2002',
                adress:'alyemen- aden'
            },
            {
                title: "Top western road trips Top western road trips",
                dedline:'20-20-2002',
                adress:'alyemen- aden'
            },
            {
                title: "Top western road ",
                dedline:'20-20-2002',
                adress:'alyemen- aden'
            }
        ],
      colors: ['#8D6E63', '#78909C', '#FFAB00', '#004D40'],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      show: false,
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
