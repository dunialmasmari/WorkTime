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
            </v-flex>
            <v-flex sm8 xs10 md9 lg8 class="mx-3">
              <TextBoxMaterial
                rules=" "
                :lable="$t('Tenders.name')"
                :v-model="AddAcount.cardnumber"
              />
            </v-flex>
            <v-flex sm5 xs10 md5 lg5 class="mx-3">
              <v-select
                :items="items"
                :label="$t('Tenders.major')"
                v-model="cards"
                outlined
                class="toggle"
                dense
              />
            </v-flex>
            <v-flex sm5 xs10 md5 lg5 class="mx-3">
              <v-select
                :items="items"
                :label="$t('Tenders.location')"
                v-model="cards"
                outlined
                class="toggle"
                dense
              />
            </v-flex>
            <v-flex sm5 xs10 md5 lg5 class="mx-3">
              <TextBoxMaterial
                rules=" "
                :lable="$t('Tenders.company')"
                :v-model="AddAcount.cardnumber"
              />
            </v-flex>
            <v-flex sm5 xs10 md5 lg5 class="mx-3">
              <TextBoxMaterial
                rules=" "
                :lable="$t('Tenders.applyLink')"
                :v-model="AddAcount.cardnumber"
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
                    dense
                    :label="$t('Tenders.startDate')"
                    readonly
                    outlined
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
                    dense
                    :label="$t('Tenders.Deadline')"
                    readonly
                    outlined
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
          </v-layout>
          <!--Todo description -->
          <v-layout justify-center align-center>
            <ButtonMatirlal :texts="$t('Tenders.save')" class="py-4" />
          </v-layout>
        </v-flex>
      </v-layout>
    </v-form>
  </div>
</template>
<script>
import ButtonMatirlal from "~/components/material/ButtonMatirlal.vue";
import i18n from "~/middleware/i18n.js";
import { mapActions } from "vuex";
export default {
  layout: "control",
  components: {
    "Material-ButtonMatirlal": ButtonMatirlal,
  },
  data: () => ({
    startDate: null,
    endDate: null,
    menuStart: false,
    menuEnd: false,
    AddAcount: {
      cardnumber: "",
      Cvv: "",
      Exp: "",
      CardTy: "",
      fullname: "",
      cards: "",
      imageUrl: null,
    },
    images: [
      {
        src: require("@/static/v.png"),
      },
      {
        src: require("@/static/v.png"),
      },
      {
        src: require("@/static/v.png"),
      },
    ],
    items: ["Paypall", "Mastercard", "Visa"],
  }),
  methods: {
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
        this.currentCustomer.imageUrl = fileReder.result;
        console.log(this.currentCustomer.imageUrl);
      });
      fileReder.readAsDataURL(files[0]);
      this.image = files[0];
      console.log(this.image);
      this.customerUploadImage({
        imageUrl: this.image,
      });
      console.log(this.image);
    },
  },
};
</script>
<style>
</style>
