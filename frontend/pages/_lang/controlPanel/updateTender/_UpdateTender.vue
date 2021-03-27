<template>
  <div>
    <v-layout slot="tittle">
      <v-toolbar-items class="mx-5 pa-2">
        <div class="ma-3 pa-2">
          <h3 style="color: #4f9dd5">{{ $t("Tenders.AddNew") }}</h3>
        </div>
      </v-toolbar-items>
    </v-layout>

    <v-form
      ref="form"
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
                    <v-img :src="image" aspect-ratio="1" contain />
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
                  <span v-if="imageRules" style="color: red; font-size: 12px">{{
                    $t("validation.emptyfieldrequired")
                  }}</span>
                </v-layout>
              </v-flex>
              <v-flex sm8 xs10 md9 lg8 class="mx-3">
                <TextBoxMaterial
                  rules="requiredRules"
                  :lable="$t('Tenders.name')"
                  v-model="oneTenderData.title"
                />
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <v-select
                  :items="getActiveMajors"
                  :label="$t('Tenders.major')"
                  v-model="oneTenderData.major_id"
                  :rules="[(v) => !!v || $t('validation.emptyfieldrequired')]"
                  item-text="major_name"
                  item-value="major_id"
                  dense
                />
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <v-select
                  :items="cities"
                  :label="$t('Tenders.location')"
                  v-model="oneTenderData.location"
                  :rules="[(v) => !!v || $t('validation.emptyfieldrequired')]"
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
                  v-model="oneTenderData.company"
                />
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <TextBoxMaterial
                  rules="requiredRules"
                  :lable="$t('Tenders.applyLink')"
                  v-model="oneTenderData.apply_link"
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
                      v-model="oneTenderData.start_date"
                      :rules="[
                        (v) => !!v || $t('validation.emptyfieldrequired'),
                        (v) =>
                          (v && v < oneTenderData.deadline) ||
                          $t('validation.startDateValidation'),
                      ]"
                      dense
                      :label="$t('Tenders.startDate')"
                      readonly
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="oneTenderData.start_date"
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
                      v-model="oneTenderData.deadline"
                      :rules="[
                        (v) => !!v || $t('validation.emptyfieldrequired'),
                        (v) =>
                          (v && v > oneTenderData.start_date) ||
                          $t('validation.endDateValidation'),
                      ]"
                      dense
                      :label="$t('Tenders.Deadline')"
                      readonly
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    v-model="oneTenderData.deadline"
                    no-title
                    scrollable
                    @input="menuEnd = false"
                  />
                </v-menu>
              </v-flex>
              <v-flex sm5 xs10 md5 lg5 class="mx-3">
                <v-file-input
                  v-model="pdfs"
                  @change="pdfchanged()"
                  truncate-length="15"
                  :rules="[
                    (v) => !!v || $t('validation.emptyfieldrequired'),
                    (v) =>
                      (v &&
                        (v.type === 'application/pdf' ||
                          v.type === 'application/zip')) ||
                      $t('validation.filetype'),
                  ]"
                  :label="$t('Tenders.uploadfiles')"
                ></v-file-input>
              </v-flex>
              <v-flex xs12 sm9 md10 lg10 class="my-3">
                <span>{{ $t("Tenders.description") }}</span>
                <v-layout>
                  <tinymce
                    id="d1"
                    v-model="oneTenderData.description"
                    initial-value="oneTenderData.description"
                    @input="checkeditorvalidation()"
                  ></tinymce>
                </v-layout>
                <v-layout>
                  <span
                    v-if="descriptionRules"
                    style="color: red; font-size: 12px"
                    >{{ $t("validation.emptyfieldrequired") }}</span
                  >
                </v-layout>
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
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "control",
  components: {
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
    };
  },
  async fetch({ store, route }) {
    await store.dispatch(
      "admintenders/loadOneTender",
      route.params.UpdateTender
    );
    await store.dispatch("majors/loadAllactiveMajors");
  },
  data: () => ({
    imageRules: false,
    descriptionRules: false,
    firstValid: false,
    firstLazy: false,
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
    newfile: false,
    active: null,
    items: ["Paypall", "Mastercard", "Visa"],
  }),
  computed: {
    ...mapGetters({
      getActiveMajors: "majors/getActiveMajors",
      getOneTender: "admintenders/getOneTender",
      visible: "majors/getUpdateVisibal",
    }),
    oneTenderData() {
      console.log(this.getOneTender);
      return {
        ...this.getOneTender,
      };
    },
    image() {
      console.log(this.getOneTender);
      return;
      "https://worktimebackend.herokuapp.com/images/" +
        { ...this.getOneTender.image };
    },
    pdfs: {
      get() {
        return new File(["foo"], this.getOneTender.filename, {
          type: "application/pdf",
        });
      },
      set(value) {
        if (value) {
          this.newfile = true;
        }
      },
    },
  },
  methods: {
    ...mapActions({ updateTender: "admintenders/updateTender" }),
    onUploadFile() {
      this.$refs.fileInput.click();
    },
    pdfchanged() {
      this.newfile = this.pdf;
    },
    onFilePicked(event) {
      console.log(this.$refs.fileInput.files[0]);
      const files = event.target.files;
      if (files.length > 0) {
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
          this.image = fileReder.result;
          console.log(this.imageUrl);
        });
        fileReder.readAsDataURL(files[0]);

        this.oneTenderData.image = files[0];
      }
    },
    checkeditorvalidation() {
      if (this.oneTenderData.description.length < 50) {
        this.descriptionRules = true;
      } else {
        this.descriptionRules = false;
      }
    },
    submit() {
      console.log(this.image, this.pdfs);
      console.log(this.pdfs);

      if (this.image === null) {
        this.imageRules = true;
      } else {
        this.imageRules = false;
      }
      if (this.oneTenderData.description !== null) {
        if (this.oneTenderData.description.length < 50) {
          this.descriptionRules = true;
        } else {
          this.descriptionRules = false;
        }
      } else {
        this.descriptionRules = true;
      }
      this.$refs.form.validate();
      if (
        this.firstValid === true &&
        this.imageRules === false &&
        this.descriptionRules === false
      ) {
        this.updateTender({
          tender_id: this.$route.params.UpdateTender,
          //    fields:{
          description: this.oneTenderData.description,
          apply_link: this.oneTenderData.apply_link,
          start_date: this.oneTenderData.start_date,
          deadline: this.oneTenderData.deadline,
          posted_date: this.oneTenderData.posted_date,
          active: this.oneTenderData.active,
          location: this.oneTenderData.location,
          company: this.oneTenderData.company,
          major_id: this.oneTenderData.major_id,
          title: this.oneTenderData.title,
          files: {
            image: this.oneTenderData.image,
            filename: this.pdfs,
          },
          //    }
        });
      } else {
        console.log(this.firstValid, this.imageRules, this.descriptionRules);
      }
    },
  },
};
</script>
<style>
</style>
