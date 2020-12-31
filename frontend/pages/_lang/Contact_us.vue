<template>
  <div>
    <v-layout
      wrap
      justify-center
      align-center class="py-2" >
    <v-flex
      lg9
      sm10
      xs10
      md9>
      <v-layout
        wrap
        justify-center
        align-center>
        <v-layout
         style="background-color:#d6d6d6;border-color: #4a4e69;"
        wrap>
        <v-flex
          lg6
          sm6
          xs12
          md6
          class="px-0"
          id="footerbg">
            <v-layout justify-center align-center >
              <v-avatar size="100" tile>
                <v-img :src="require('@/static/v.png')" height="90" contain />
              </v-avatar>
            </v-layout>
            <v-layout justify-center align-center class="py-3">
              <h3 style="color: #ffffff">
                {{ $t('ContactUS.Tittle') }}
              </h3>
            </v-layout>
          <v-layout justify-center align-center class="mx-4" >
          <h5  style="color: white">If you have any questions regarding our services, please fill
            the form below and we will try to get back to you as soon as possible</h5>
          </v-layout>
                      <v-layout
                        justify-center
                        align-center class="py-5">
                        <a
                          class="ma-5"
                          href="https://www.facebook.com/stories/1625112850844098/UzpfSVNDOjI5NjEzMTUwOTczMTA2MTI=/"
                          target="_blank"
                          rel="noopener noreferrer"><v-icon color="white">mdi-facebook</v-icon></a>
                        <a
                          class="ma-5"
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"><v-icon color="white">mdi-instagram</v-icon></a>
                        <a
                          class="ma-5"
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"><v-icon color="white">mdi-twitter</v-icon></a>
                      </v-layout>
          <v-layout
            justify-center
            align-center class="py-5" wrap>
            <h5 style="color: white">
              +697 77777777777777
            </h5>
          </v-layout>
          <v-layout
            justify-center
            align-center wrap>
            <h5 style="color: white">
              +697 77777777777777
            </h5>
          </v-layout>
        </v-flex>
        <v-flex
          class="ma-2 pa-3"
          lg5
          sm5
          xs12
          md5>
          <v-form
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
            @submit.prevent="contactus()"
          >
            <v-text-field
              v-model="name"
              :label="$t('ContactUS.Name')"
              :rules="nameRules"
              class="my-5 toggle "
              required
            />
            <v-text-field
              v-model="email"
              :label="$t('ContactUS.Email')"
              :rules="emailRules"
              class="my-5 toggle "
              required
            />
            <v-textarea
              v-model="message"
              :label="$t('ContactUS.Message')"
              :rules="messageRules"
              class="my-5 toggle"
              required
            />
            <v-layout justify-center>
              <v-btn
                :disabled="!valid"
                color="#E0c244"
                type="submit">{{ $t('ContactUS.Send') }}</v-btn>
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
    export default {
        data () {
            return {
                name: null,
                email: null,
                message: null,
                valid: true,
                lazy: false,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],

                messageRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
                ]

            }
        },
        methods: {
            contactus () {

            }
        }
    }
</script>

<style  lang="scss">
  #footerbg{
    width: 100%;
    height: 480px;
    background-color:#4a4e69 !important;
    -webkit-background-size:cover !important;
    -moz-background-size:cover !important;
    -o-background-size:cover !important;
    background-size:cover !important;
    background-position:center !important;
    padding-top:80px;
    padding-bottom: 20px;
    z-index: 0;
    .theme--light.v-text-field .v-input__slot:before {
      border-color: #ffffff !important;
    }
    .input--is-focused .v-input__control .v-input__slot:after{
      border-color: #ffffff !important;
    }
    .v-text-field__slot {
      color: #ffffff !important;
      input,textarea {
        color: #ffffff !important;
      }
      .v-label {
        color: #ffffff !important;
      }
    }

  }

</style>
