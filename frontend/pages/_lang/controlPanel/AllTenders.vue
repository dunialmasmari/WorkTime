<template>
  <div>
    <v-toolbar-items class="mx-5 pa-2">
      <div class="ma-3 pa-2">
        <h3 style="color: #4f9dd5">{{ $t("Tenders.Title") }}</h3>
      </div>
      <v-spacer />
      <div class="ma-3 py-2">
        <v-btn
          :to="`/${$i18n.locale}/controlPanel/AddTender`"
          dark
          style="height: 40px"
          color="#4f9dd5"
        >
          <span>{{ $t("Tenders.AddNew") }}</span>
        </v-btn>
      </div>
    </v-toolbar-items>
    <v-layout justify-center align-center>
      <v-flex lg11 md11 xs11 sm11 py-4>
        <v-data-table
          :headers="headers"
          :items="allTenders.data"
          hide-default-footer
          sort-by="calories"
          class="elevation-1"
        >
         <template v-slot:item.locations="{ item }">
            <span >{{ $t("cities."+item.location) }}</span>
          </template>
            <template v-slot:item.isactive="{ item }">
            <span v-if="item.active == 1">{{ $t("Majors.active") }}</span>
            <span v-if="item.active == 0">{{ $t("Majors.disabled") }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-btn color="#4f9dd5" text  :to="`/${$i18n.locale}/controlPanel/UpdateTender/${item.tender_id}`">
           <span style="color:#4f9dd5;"> {{ $t("Tenders.update")}}</span> 
            </v-btn>
              <v-btn  color="#4f9dd5" text :to="`/${$i18n.locale}/controlPanel/tenderDetails/${item.tender_id}`">
            <span  style="color:#4f9dd5;"> {{ $t("Tenders.view")}}</span> 
            </v-btn>
              <v-btn v-if="item.active == 0" color="#4f9dd5" text @click="deleteItem(item)">{{
              $t("Majors.activate")
            }}</v-btn>
            <v-btn v-if="item.active == 1" color="#4f9dd5" text @click="deleteItem(item)"
              >{{ $t("Majors.deactivate") }}
            </v-btn>
            </template>
          <template v-slot:no-data>
           <v-avatar size="100%" tile>
                  <v-img
                    :src="require('@/static/nodata.png')"
                  
                    contain
                  />
                </v-avatar>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
     <v-layout v-if="allTenders.data"  justify-center align-center>
            <v-pagination
              v-model="page"
              color="#4f9dd5"
              :length="allTenders.last_page"
              @input="getTenders()"
            ></v-pagination>
          </v-layout>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import DeleteComponent from "../../../components/material/DeleteComponent.vue";
export default {
  components: {DeleteComponent },
  layout: "control",
  //  asyncData () {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({ name: 'world' })
  //     }, 1000)
  //   })
  // },
  asyncData({ app }) {
    return {
      page:1,
      headers: [
        {
          text: app.i18n.t("Tenders.name"),
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: app.i18n.t("Tenders.major"), value: "major_name" },
        { text: app.i18n.t("Tenders.location"), value: "locations" },
        { text: app.i18n.t("Tenders.company"), value: "company" },
        { text: app.i18n.t("Tenders.Deadline"), value: "deadline" },
        { text: app.i18n.t("Majors.status"), value: "isactive" },
        { text: app.i18n.t("Tenders.action"), value: "actions" },
      ],
    };
  },
  data: () => ({
    tab: null,
    type: null,
    currentId: null,
    deleteId: null,
    //  visible: true,
  }),
  computed: {
    ...mapGetters({
      allTenders: "admintenders/getallTenders",
      visible: "majors/getAddVisibal",
    }),
  },
  mounted() {
    this.loadAllTender(1);
  },
  methods: {
    ...mapActions({
      loadAllTender: "admintenders/loadAllTender",
      deleteTender: "admintenders/deleteTender",
    }),
    editItem(item) {
      this.currentId = item.major_id;
      this.loadOneMajors(this.currentId);
      this.UpdateChangeVisibal(true);
    },
    deleteItem(item) {
      this.deleteId = item.tender_id;
      console.log(item, this.deleteId)
      this.deleteTender(this.deleteId)
    },
    getTenders(){
        this.loadAllTender(this.page);
    }
  },
};
</script>

<style></style>
