<template>
  <div>
    <v-layout wrap justify-center align-center class="py-2">
      <v-flex lg9 sm10 xs10 md9>
        <v-layout wrap justify-center align-center>
          <v-layout
            style="background-color: #ffffff; border: #4f9dd5 1px solid;"
            wrap
            my-10
          >
            <v-flex lg6 sm6 xs12 md6 class="px-0" id="footerbg">
              <v-layout justify-center align-center>
                <v-avatar width="150" height="90"  style="background-color: #ffffff; " tile>
                  <v-img
                    :src="require('@/static/hrlogo.png')"
                    height="90"
                    contain
                  />
                </v-avatar>
              </v-layout>
              <v-layout justify-center align-center class="py-3">
                <h3 style="color: #ffffff">
                  {{ $t("ContactUS.Tittle") }}
                </h3>
              </v-layout>
              <v-layout justify-center align-center class="mx-4">
                <h5 style="color: white">
                  {{ $t("ContactUS.description") }}
                </h5>
              </v-layout>
              <v-layout justify-center align-center class="py-5 ">
                <a
                style="text-decoration:none;"
                  class="ma-5"
                  href="https://www.facebook.com/work.time.35728"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><v-icon color="white">mdi-facebook</v-icon></a
                >
                <a
                 style="text-decoration:none;"
                  class="ma-5"
                  href="https://www.instagram.com/worktime66/"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><v-icon color="white">mdi-instagram</v-icon></a
                >
                <a
                 style="text-decoration:none;"
                  class="ma-5"
                  href="https://twitter.com/worktim1231?s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  ><v-icon color="white">mdi-twitter</v-icon></a
                >
              </v-layout>
              <v-layout justify-center align-center class="py-5" wrap>
                <h5 style="color: white">+967 777 986 662</h5>
              </v-layout>
              <v-layout justify-center align-center wrap>
                <h5 style="color: white">+967 775 527 633</h5>
              </v-layout>
            </v-flex>
            <v-flex class="ma-2 pa-3" lg5 sm5 xs12 md5>
              <v-form
                ref="form"
                v-model="valid"
                :lazy-validation="lazy"
                @submit.prevent="contactus()"
              >
                <TextBoxMaterial
                  v-model="name"
                  :lable="$t('ContactUS.Name')"
                  rules="usernameRules"

                />
                 <TextBoxMaterial
                   v-model="email"
                  :lable="$t('ContactUS.Email')"
                  rules="usermailRules"

                />
               
                <v-textarea
                  v-model="message"
                  :label="$t('ContactUS.Message')"
                  :rules=" [
        (v) => !!v || $t('validation.emptyfieldrequired'),
        (v) => (v && v.length > 50) || $t('validation.undermainlimitation'),
      ]"
                  class="my-5 toggle"
                  required
                />
                <v-layout justify-center>
                  <v-btn :disabled="!valid" color="#4f9dd5" type="submit">
                    <span style="color:#fff;">{{
                    $t("ContactUS.Send")
                  }}</span>
                  </v-btn>
                </v-layout>
              </v-form>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
   asyncData ({ app })  {
    return {
      one:'',
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      valid: true,
      lazy: false,
    };
  },
  methods: {
    ...mapActions({sendContactUS:'site/sendContactUS'}),
    contactus() {
      this.sendContactUS({
        name:this.name,
        message:this.message,
        email:this.email
      })
    },
  },
};
</script>

<style  lang="scss">
#footerbg {
  width: 100%;
  height: 480px;
  background-color: #4f9dd5 !important;
  -webkit-background-size: cover !important;
  -moz-background-size: cover !important;
  -o-background-size: cover !important;
  background-size: cover !important;
  background-position: center !important;
  padding-top: 80px;
  padding-bottom: 20px;
  z-index: 0;
  .theme--light.v-text-field .v-input__slot:before {
    border-color: #ffffff !important;
  }
  .input--is-focused .v-input__control .v-input__slot:after {
    border-color: #ffffff !important;
  }
  .v-text-field__slot {
    color: #ffffff !important;
    input,
    textarea {
      color: #ffffff !important;
    }
    .v-label {
      color: #ffffff !important;
    }
  }
}
</style>
