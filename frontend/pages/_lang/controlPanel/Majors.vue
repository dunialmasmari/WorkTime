<template>
  <div>
    <v-toolbar-items class="mx-5 pa-2">
      <div class="ma-3 pa-2">
        <h3 style="color: #4f9dd5">{{ $t("Majors.Title") }}</h3>
      </div>
      <!-- </v-toolbar-items>
    <v-card>
      <v-tabs v-model="tab" background-color="black" dark>
        <v-tab>{{ $t("Majors.Tenders") }} </v-tab>
        <v-tab>{{ $t("Majors.Jobs") }} </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-toolbar-items class="mx-5 pa-2"> -->
      <v-spacer />
      <div class="ma-3 py-2">
        <v-btn
          @click="AddChangeVisibal(true)"
          dark
          style="height: 40px"
          color="#4f9dd5"
        >
          <span>{{ $t("Majors.AddNew") }}</span>
        </v-btn>
      </div>
    </v-toolbar-items>
    <!-- <v-card flat> -->
    <v-layout justify-center align-center>
      <v-flex lg9 py-4>
        <v-data-table
          :headers="headers"
          :items="allMajors"
          hide-default-footer
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:item.isactive="{ item }">
            <span v-if="item.active == 1">{{ $t("Majors.active") }}</span>
            <span v-if="item.active == 0">{{ $t("Majors.disabled") }}</span>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-btn v-if="item.active == 0" text @click="deleteItem(item)">{{
              $t("Majors.activate")
            }}</v-btn>
            <v-btn v-if="item.active == 1" text @click="deleteItem(item)"
              >{{ $t("Majors.deactivate") }}
            </v-btn>
          </template>
          <template v-slot:no-data>
            <span>no data </span> -->
            <!--todo nodta image-->
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
    <!-- </v-card>
        </v-tab-item>
        <v-tab-item> -->
    <!-- <v-toolbar-items class="mx-5 pa-2">
            <v-spacer />
            <div class="ma-3 py-2">
              <v-btn
                @click="AddChangeVisibal(true)"
                dark
                style="height: 40px"
                color="#4f9dd5"
              >
                <span>{{ $t("Majors.AddNew") }}</span>
              </v-btn>
            </div>
          </v-toolbar-items>
          <v-card flat>
            <v-layout justify-center align-center>
              <v-flex lg9 py-4>
                <v-data-table
                  :headers="headers"
                  :items="allMajors"
                  hide-default-footer
                  sort-by="calories"
                  class="elevation-1"
                >
                  <template v-slot:item.isactive="{ item }">
                    <span v-if="item.active == 1">{{
                      $t("Majors.active")
                    }}</span>
                    <span v-if="item.active == 0">{{
                      $t("Majors.disabled")
                    }}</span>
                  </template>
                  <template v-slot:item.actions="{ item }">
                    <v-icon small class="mr-2" @click="editItem(item)">
                      mdi-pencil
                    </v-icon>
                    <v-btn v-if="item.active == 0"  text @click="deleteItem(item)">{{
                      $t("Majors.active")
                    }}</v-btn>
                    <v-btn v-if="item.active == 1"  text @click="deleteItem(item)"
                      >{{ $t("Majors.disabled") }}
                    </v-btn>
                  </template>
                  <template v-slot:no-data>
                    <span>no data </span> -->
    <!--todo nodta image-->
    <!-- </template>
                </v-data-table>
              </v-flex>
            </v-layout>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card> -->

    <AddMajor :type="1" />
    <UpdateMajor :currentMajor="currentId" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import AddMajor from "../../../components/dialog/AddMajor.vue";
import DeleteComponent from "../../../components/material/DeleteComponent.vue";
export default {
  components: { AddMajor, DeleteComponent },
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
          text: app.i18n.t("Majors.name"),
          align: "start",
          sortable: false,
          value: "major_name",
        },
        { text: app.i18n.t("Majors.status"), value: "isactive" },
        { text: app.i18n.t("Majors.action"), value: "actions" },
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
      allMajors: "majors/allMajors",
      visible: "majors/getAddVisibal",
    }),
  },
  mounted() {
    this.loadAllMajors();
  },
  methods: {
    ...mapMutations({
      AddChangeVisibal: "majors/AddMajorChangeVisibal",
      UpdateChangeVisibal: "majors/UpdateMajorChangeVisibal",
    }),
    ...mapActions({
      loadOneMajors: "majors/loadOneMajors",
      loadAllMajors: "majors/loadAllMajors",
      deleteOneMajor: "majors/deleteOneMajor",
    }),
    editItem(item) {
      this.currentId = item.major_id;
      this.loadOneMajors(this.currentId);
      this.UpdateChangeVisibal(true);
    },
    deleteItem(item) {
      this.deleteId = item.major_id;
      this.deleteOneMajor(item)
    },
  },
};
</script>

<style></style>
