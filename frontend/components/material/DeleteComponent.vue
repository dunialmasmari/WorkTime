<template>
  <v-dialog v-model="show" max-width="500">
    <div class="Create">
      <v-card class="pb-5" style="border-radius: 15px">
        <v-card-title class="pa-2" style="background-color: #0b0b0b">
          <v-btn icon tile @click.stop="show = false">
            <v-icon size="30" class="white--text">mdi-close</v-icon>
          </v-btn>
          <v-layout justify-center>
            <h4 class="white--text">{{ $t("Majors.AddNew") }}</h4>
          </v-layout>
        </v-card-title>

        <v-layout justify-center my-3>
          <h4>{{ $t("Majors.deleteMessage") }}</h4>
         </v-layout>
        <v-layout justify-center my-3>
       
        <v-flex lg5 md7 xs7 sm7>
          <v-layout justify-center align-center>
            <v-btn mx-5  tile @click.stop="show = false"> cancel </v-btn>
            <v-spacer></v-spacer>
            <v-btn mx-5   @click.stop="show = false"> cancel </v-btn>
            </v-layout>
        </v-flex>
         </v-layout>
      </v-card>
    </div>
  </v-dialog>
</template>
<script>
export default {
  name: "Button",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isButton: false,
  }),
  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.name = null;
          this.$emit("close");
        }
      },
    },
  },
};
</script>
