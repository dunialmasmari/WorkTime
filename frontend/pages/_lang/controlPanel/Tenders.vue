<template>
  <div>
    <v-toolbar-items class="mx-5 pa-2">
      <div class="ma-3 pa-2">
        <h3 style="color: #4f9dd5">{{ $t("Tenders.Title") }}</h3>
      </div>
      <v-spacer />
      <div class="ma-3 py-2">
        <v-btn
          :to="`/${$i18n.locale}/controlPanel/tenders/AddTender`"
          dark
          style="height: 40px"
          color="#4f9dd5"
        >
          <span>{{ $t("Tenders.AddNew") }}</span>
        </v-btn>
      </div>
    </v-toolbar-items>
    <v-layout justify-center align-center>
      <v-flex lg9 py-4>
        <v-data-table
          :headers="headers"
          :items="allTenders.data"
          hide-default-footer
          sort-by="calories"
          class="elevation-1"
        >
          <!-- <template v-slot:item.isactive="{ item }">
            <span v-if="item.active == 1">{{ $t("Majors.Tenders") }}</span>
            <span v-if="item.active == 0">{{ $t("Majors.Tenders") }}</span>
          </template> -->
          <template v-slot:item.actions="{ item }">
            <v-btn  text dark :to="`/${$i18n.locale}/controlPanel/tenders/${item.tender_id}`">
            <v-icon small style="color:#4f9dd5" class="mr-2" >
              mdi-pencil
            </v-icon>
            </v-btn>
            <v-icon small style="color:#4f9dd5" @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
          <template v-slot:no-data>
            <span>no data aaa</span>
            <!--todo nodta image-->
          </template>
        </v-data-table>
      </v-flex>
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
      headers: [
        {
          text: app.i18n.t("Tenders.name"),
          align: "start",
          sortable: false,
          value: "title",
        },
        { text: app.i18n.t("Tenders.major"), value: "major_name" },
        { text: app.i18n.t("Tenders.location"), value: "location" },
        { text: app.i18n.t("Tenders.company"), value: "company" },
        { text: app.i18n.t("Tenders.Deadline"), value: "deadline" },
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
    this.loadAllTender();
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
      this.deleteId = item.id;
    },
  },
};
</script>

<style></style>
