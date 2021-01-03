<template>
  <div>
    <v-layout slot="tittle">
      <v-toolbar-items class="mx-5 pa-2">
        <div class="ma-3 pa-2">
          <h3 style="color: #0b0b0b">{{ $t("Tenders.AddNew") }}</h3>
        </div>
      </v-toolbar-items>
    </v-layout>

    <v-form
      ref="firstform"
      v-model="firstValid"
      class="py-5"
      :lazy-validation="firstLazy"
      @submit.prevent="submit()"
    >
      <v-layout justify-center align-center class="py-2">
        <v-flex sm11 xs11 md8 lg8>
          <v-card>
            <v-layout justify-center wrap align-center class="py-2">
              <v-flex sm7 xs10 md12 lg12 class="mx-3 my-3">
                <v-layout justify-center align-center class="py-3">
                  <v-avatar
                    size="200px"
                    tile
                    style="border: blue solid 1px"
                    align="center"
                    justify="center"
                  >
                    <v-img :src="imageUrl" aspect-ratio="1" contain />
                  </v-avatar>
                </v-layout>
                <v-layout justify-center align-center>
                  <v-btn text @click="onUploadFile">
                    {{ $t("Tenders.image") }}
                  </v-btn>
                  <input
                    style="display: none"
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    @change="onFilePicked"
                  />
                </v-layout>
                <v-layout justify-center align-center>
                  <span style="color: red; font-size: 12px">this is it</span>
                </v-layout>
              </v-flex>
              <v-flex sm8 xs10 md9 lg8 class="mx-3">
                <TextBoxMaterial
                  rules="requiredRules"
                  :lable="$t('Tenders.name')"
                  v-model="title"
                />
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <v-select
                  :items="items"
                  :label="$t('Tenders.major')"
                  v-model="major"
                  :rules="requiredRules"
                  item-text="name"
                  item-value="id"
                  dense
                />
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <v-select
                  :items="cities"
                  :label="$t('Tenders.location')"
                  v-model="location"
                  :rules="requiredRules"
                  item-text="name"
                  item-value="id"
                  class="toggle"
                  dense
                />
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <TextBoxMaterial
                  rules="requiredRules"
                  :lable="$t('Tenders.company')"
                  v-model="company"
                />
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <TextBoxMaterial
                  rules="requiredRules"
                  :lable="$t('Tenders.applyLink')"
                  v-model="applyLink"
                />
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <v-menu
                  v-model="menuStart"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      slot="activator"
                      v-model="startDate"
                      :rules="startRules"
                      dense
                      :label="$t('Tenders.startDate')"
                      readonly
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="startDate"
                    no-title
                    scrollable
                    @input="menuStart = false"
                  />
                </v-menu>
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <v-menu
                  v-model="menuEnd"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      slot="activator"
                      v-model="endDate"
                      :rules="endRules"
                      dense
                      :label="$t('Tenders.Deadline')"
                      readonly
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="endDate"
                    no-title
                    scrollable
                    @input="menuEnd = false"
                  />
                </v-menu>
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <v-file-input
                  v-model="pdfs"
                  truncate-length="15"
                ></v-file-input>
              </v-flex>
              <v-flex xs12 sm9 md10 lg10 class="my-3">
                <tinymce id="d1" v-model="description"></tinymce>
              </v-flex>
            </v-layout>
            <!--Todo description -->
            <v-layout justify-center align-center>
              <ButtonMatirlal :texts="$t('Tenders.save')" class="py-4" />
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>
<script>
import ButtonMatirlal from "~/components/material/ButtonMatirlal.vue";
import i18n from "~/middleware/i18n.js";
// import Editor from '@tinymce/tinymce-vue'
import { mapActions } from "vuex";
export default {
  layout: "control",
  components: {
    // 'editor': Editor,
    "Material-ButtonMatirlal": ButtonMatirlal,
  },
  asyncData({ app }) {
    return {
      cities: [
        { name: app.i18n.t("cities.Abyan"), id: "Abyan" },
        { name: app.i18n.t("cities.Aden"), id: "Aden" },
        { name: app.i18n.t("cities.AlMahrah"), id: "AlMahrah" },
        { name: app.i18n.t("cities.AlMahwit"), id: "AlMahwit" },
        { name: app.i18n.t("cities.Sanaa"), id: "Sanaa" },
        { name: app.i18n.t("cities.Amran"), id: "Amran" },
        { name: app.i18n.t("cities.Dhale"), id: "Dhale" },
        { name: app.i18n.t("cities.Dhamar"), id: "Dhamar" },
        { name: app.i18n.t("cities.Hadramaut"), id: "Hadramaut" },
        { name: app.i18n.t("cities.AlJawf"), id: "AlJawf" },
        { name: app.i18n.t("cities.Hajjah"), id: "Hajjah" },
        { name: app.i18n.t("cities.Ibb"), id: "Ibb" },
        { name: app.i18n.t("cities.Lahij"), id: "Lahij" },
        { name: app.i18n.t("cities.Marib"), id: "Marib" },
        { name: app.i18n.t("cities.AlBayda"), id: "AlBayda" },
        { name: app.i18n.t("cities.Raymah"), id: "Raymah" },
        { name: app.i18n.t("cities.Sadah"), id: "Sadah" },
        { name: app.i18n.t("cities.AmanatAlAsimah"), id: "AmanatAlAsimah" },
        { name: app.i18n.t("cities.Shabwah"), id: "Shabwah" },
        { name: app.i18n.t("cities.Socotra"), id: "Socotra" },
        { name: app.i18n.t("cities.Taiz"), id: "Taiz" },
      ],
      requiredRules: [
        (v) => !!v || app.i18n.t('validation.emptyfieldrequired'),
        (v) => (v && v.length <= 50) || app.i18n.t('validation.undermainlimitation'),
      ],
      // endRules: [
      //   (v) => !!v || app.i18n.t('validation.emptyfieldrequired'),
      //   (v) => (v && v > this.startDate) || app.i18n.t('validation.undermainlimitation'),
      // ],
      // startRules: [
      //   (v) => !!v || app.i18n.t('validation.emptyfieldrequired'),
      //   (v) => (v && v > 50) || app.i18n.t('validation.undermainlimitation'),
      // ],
    };
  },
  data: () => ({
    firstValid: false,
    firstLazy: false,
    pdfs: null,
    description: null,
    applyLink: null,
    location: null,
    company: null,
    major: null,
    title: null,
    startDate: null,
    endDate: null,
    menuStart: false,
    menuEnd: false,
    imageUrl: null,
    image: null,

    items: ["Paypall", "Mastercard", "Visa"],
  }),
  methods: {
    ...mapActions({ addNewTender: "admintenders/addNewTender" }),
    onUploadFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      console.log(this.$refs.fileInput.files[0]);
      const files = event.target.files;
      let fileName = files[0].name;
      if (fileName.lastIndexOf(".") <= 0) {
        return alert(i18n.t("validation.imagename"));
      }
      let fileSize = files[0].size;
      console.log(fileSize);
      if (fileSize > 500 * 500) {
        return alert(i18n.t("validation.imagesize"));
      }
      let fileType = files[0].type;
      console.log(fileType);
      if (fileType !== "image/png") {
        if (fileType !== "image/jpeg") {
          return alert(i18n.t("validation.imagetype"));
        }
      }
      const fileReder = new FileReader();
      fileReder.addEventListener("load", () => {
        this.imageUrl = fileReder.result;
        console.log(this.imageUrl);
      });
      fileReder.readAsDataURL(files[0]);

      this.image = files[0];
    },
    submit() {
      console.log(this.image, this.pdfs);
      console.log(this.pdfs);

      this.addNewTender({
        description: this.description,
        apply_link: this.applyLink,
        start_date: this.startDate,
        deadline: this.endDate,
        posted_date: this.endDate,
        active: 1,

        location: this.location,
        company: this.company,
        major_id: 1,
        title: this.title,
        files: {
          image: this.image,
          filename: this.pdfs,
        },
      });
    },
  },
};
</script>
<style>
</style>
