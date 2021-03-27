<template>
  <div>
    <v-layout wrap class="py-5 mx-6">
      <v-flex>
        <h2 style="color: #000000">{{ getOneTender.title }}</h2>
      </v-flex>
    </v-layout>
    <v-layout align-center wrap justify-center class="py-5 ">
      <v-flex sm4 xs5 md3 lg3>
      <v-layout align-center wrap justify-center class="py-5 mx-2">
        <v-img
          contain
          :src="`https://worktimebackend.herokuapp.com/images/`+getOneTender.image"
          height="200px"
          width="200px"
        />
        </v-layout>
      </v-flex>

      <v-flex sm8 xs12 md8 lg8 style="height: 200%" class="mx-2">
        <!-- <h4>{{ $t("Tenders.major") }}:</h4> -->
       <v-card style="height: 100%" width="auto">
          <v-layout align-center wrap justify-center class="py-5 mx-6">
            <v-layout align-center wrap justify-center style="">
              <v-flex sm6 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                   <v-icon
                   >mdi-calendar</v-icon> {{ $t("Tenders.major") }}:
                  {{ getOneTender.major_name }}</v-card-subtitle
                >
              </v-flex>
              <v-flex sm6 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                     <v-icon
                   >mdi-home</v-icon> 
                  {{ $t("Tenders.company") }}:
                  {{ getOneTender.company }}</v-card-subtitle
                >
              </v-flex>
              <v-flex sm6 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                    <v-icon
                   >mdi-map-marker</v-icon>  {{ $t("Tenders.location") }}:
                  {{ getOneTender.location }}</v-card-subtitle
                >
              </v-flex>
              <v-flex sm6 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                    <v-icon
                   >mdi-link</v-icon>  {{ $t("Tenders.applyLink") }}:
                  {{ getOneTender.apply_link }}</v-card-subtitle
                >
              </v-flex>
              <v-flex sm6 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                    <v-icon
                   >mdi-calendar</v-icon>  {{ $t("Tenders.postedDate") }}:
                  {{ getOneTender.posted_date }}</v-card-subtitle
                >
              </v-flex>
              <v-flex sm6 xs12 md6 lg6>
                <v-card-subtitle class="py-2">
                <v-icon
                   >mdi-calendar</v-icon>   <span style="color:red;">{{ $t("Tenders.Deadline") }}</span>:
                  {{ getOneTender.deadline }} </v-card-subtitle
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
      <v-flex
        class="py-2"
        sm12
        xs12
        md12
        lg11
        style="background-color: #f5f5f5"
      >
        <v-flex sm12 xs12 md12 lg12>
          <v-toolbar-items class="mx-5 pa-2">
            <div class="ma-3 pa-2">
              <h3 style="color: #000000">{{ $t("Tenders.description") }}:</h3>
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
        <v-flex lg12 md12 sm12 xs12>
          <v-layout class="py-4 mx-3" align-center justify-center wrap v-html="getOneTender.description">
           
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
  }),
  computed: {
    ...mapGetters({ getOneTender: "tenders/getOneTender" }),
  },
  mounted() {},
  methods: {
    ...mapActions({ dowenloadFile: "tenders/dowenloadFile" }),
    downloadpdfs() {
      console.log("gg");
      this.dowenloadFile(this.getOneTender.filename);
    },
  },
};
</script>

<style></style>
