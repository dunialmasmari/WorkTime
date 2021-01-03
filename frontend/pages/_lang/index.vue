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
            <div class="display-3">{{ slide }} Slide</div>
            <!-- <v-img :src="require('@/static/' + slide )" /> -->
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-layout class="py-5 mx-6">
      <v-flex sm2 xs12 md2 lg11>
        <h2 class="py-2" style="color: #5f5d5e">
          {{ $t("Home.latestTenders") }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-divider
        class="elevation-5 align-center mx-6 py-2"
        style="background-color: #28acde"
      />
    </v-layout>
    <v-layout class="py-4" align-center wrap justify-center>
      <v-flex
        class="py-2"
        sm12
        xs12
        md12
        lg12
        style="background-color: #f5f5f5"
      >
        <v-layout class="py-4" align-center justify-center wrap>
          <v-flex
            lg3
            md5
            sm5
            xs12
            v-for="(tender, i) in getallTenders.data"
            :key="i"
          >
            <v-card class="ma-3" width="280" height="406">
              <v-img :src="tender.image" height="200px" />
              <v-card-title style="height: 100px">
                {{ tender.title }}
              </v-card-title>

              <v-divider
                class="elevation-5 align-center mx-6"
                style="background-color: #28acde"
              />
              <v-card-subtitle>
                {{ tender.company }}
                <br />
                {{ $t("Tenders.Deadline") }}:{{ tender.deadline }}
                <br />
              
              <v-btn small  color="#28acde" class=" mx-0 " >
              <span style="color:#fff">{{  $t("Tenders.more") }}</span>
              </v-btn>
              </v-card-subtitle>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
      <v-layout class="py-5 mx-6">
      <v-flex sm2 xs12 md2 lg11>
        <h2 class="py-2" style="color: #5f5d5e">
          {{ $t("Home.majorsTenders") }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-divider
        class="elevation-5 align-center mx-6 py-2"
        style="background-color: #28acde"
      />
    </v-layout>
    <v-layout class="py-4" align-center wrap justify-center>
      <v-flex
        class="py-2"
        sm12
        xs12
        md12
        lg12
        style="background-color: #f5f5f5"
      >
        <v-layout class="py-4" align-center wrap justify-center>
          <v-flex
          mx-3
            v-for="(major, i) in getTenderMajor"
            :key="i"
            sm12
            xs12
            md3
            lg3
            ><v-card>
              <v-layout align-center  justify-center>
              
                <h3 class="py-2">
                  {{ major.name }}
                  ({{ major.count }})
                  </h3>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// :image-src="getMostOrdered.productDefaultConfig.imgUrl"
import { mapActions, mapGetters } from "vuex";
export default {
  //  asyncData () {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({ name: 'world' })
  //     }, 1000)
  //   })
  // },
  async fetch({ store }) {
    await store.dispatch("tenders/loadAllTender");
    await store.dispatch("tenders/loadTenderMajor");
  },
  data: () => ({
    tenders: 0,
    card: [
      {
        title:
          "Top western road trips Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road trips Top western road trips",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
      {
        title: "Top western road ",
        dedline: "20-20-2002",
        adress: "alyemen- aden",
      },
    ],
    colors: ["#8D6E63", "#78909C", "#FFAB00", "#004D40"],
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
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
    ...mapGetters({
      getallTenders: "tenders/getallTenders",
      getTenderMajor: "tenders/getTenderMajor",
    }),
  },
  mounted() {},
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style></style>
