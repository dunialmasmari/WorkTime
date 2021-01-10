<template>
  <div>
    <v-layout wrap class="py-2 mx-6">
      <v-flex>
        <h2 style="color: #000000;">{{ getOneTender.title }}</h2>
      </v-flex>
    </v-layout>
    <v-layout align-center wrap justify-center class="py-5 mx-6">
    
      <v-flex sm2 xs12 md2 lg2>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
          width="200px"
        />
      </v-flex>
    
      <v-flex sm2 xs12 md5 lg6 style="height: 200%">
        <!-- <h4>{{ $t("Tenders.major") }}:</h4> -->
          <v-card style="height: 100%" width="auto">
    <v-layout align-center wrap justify-center class="py-5 mx-6">
          <v-layout align-center wrap justify-center style="">
            <v-flex sm2 xs12 md6 lg6>
              
              <v-card-subtitle class="py-2">
                {{ $t("Tenders.major") }}:
                {{ getOneTender.major_name }}</v-card-subtitle
              >
            </v-flex>
            <v-flex sm2 xs12 md6 lg6>
              <v-card-subtitle class="py-2">
                {{ $t("Tenders.company") }}:
                {{ getOneTender.company }}</v-card-subtitle
              >
            </v-flex>
            <v-flex sm2 xs12 md6 lg6>
              <v-card-subtitle class="py-2">
                {{ $t("Tenders.location") }}:
                {{ getOneTender.location }}</v-card-subtitle
              >
            </v-flex>
            <v-flex sm2 xs12 md6 lg6>
              <v-card-subtitle class="py-2">
                {{ $t("Tenders.applyLink") }}:
                {{ getOneTender.apply_link }}</v-card-subtitle
              >
            </v-flex>
            <v-flex sm2 xs12 md6 lg6>
              <v-card-subtitle class="py-2">
                {{ $t("Tenders.postedDate") }}:
                {{ getOneTender.posted_date }}</v-card-subtitle
              >
            </v-flex>
            <v-flex sm2 xs12 md6 lg6>
              <v-card-subtitle class="py-2">
                {{ $t("Tenders.Deadline") }}:
                {{ getOneTender.deadline }}</v-card-subtitle
              >
            </v-flex>
          </v-layout>
          
    </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-divider
        class="elevation-5 align-center mx-6"
        style="background-color: #3b8070"
      />
    </v-layout>
    <v-layout class="py-4" align-center justify-center>
      <v-flex class="py-2" sm2 xs12 md2 lg11 style="background-color: #f5f5f5">
  
        <v-flex sm12 xs12 md12 lg12>
      <v-toolbar-items class="mx-5 pa-2">
      <div class="ma-3 pa-2">
           <h3 style="color:#000000">{{ $t("Tenders.description") }}:</h3>
      </div>
      <v-spacer />
      <div class="ma-1 py-2">
        <v-btn
          @click="downloadpdfs()"
          dark
          style="height: 40px"
          color="#4f9dd5"
        >
          <span>{{ $t("Tenders.downloadpdfs") }}</span>
        </v-btn>
      </div>
    </v-toolbar-items>
        </v-flex>
        <v-flex lg12 md8 sm8 xs12>
          <v-layout class="py-4 mx-3" align-center justify-center wrap>
            {{ getOneTender.description }}
            
          </v-layout>
        </v-flex>
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
  async fetch({ store, route }) {
    await store.dispatch("tenders/loadOneTender", route.params.TenderDetails);
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
    ...mapGetters({ getOneTender: "tenders/getOneTender" }),
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
