<template>
  <v-dialog
    v-model="show"
    max-width="800">
    <div class="Create">
      <v-card
        class="pb-5"
        style="border-radius:15px;">
        <v-card-title
          class="pa-2"
          style="background-color:#0b0b0b;">
          <v-btn
            icon
            tile
            @click.stop="show=false">
            <v-icon size="30" class="white--text">mdi-close</v-icon>
          </v-btn>
          <v-layout justify-center>
            <h4 class="white--text">{{ $t('LogIn.LogInTitle') }}</h4>
          </v-layout>
        </v-card-title>
           <v-form
        ref="firstform"
        v-model="firstValid"
        :lazy-validation="firstLazy"
        @submit.prevent="loginfunc()">
        <v-layout justify-center align-center class="py-9">
          <CardMatirial>
            <v-layout slot="tittle" justify-center align-center>
              <v-flex sm3 xs5 md3 lg3>
                <h4>
                  {{ $t('LogIn.LogInTitle') }}
                </h4>
              </v-flex>
            </v-layout>
            <v-layout
              class="py-5"
              slot="contents"
              justify-center
              align-center
              wrap>
              <v-flex sm7 xs8 md7 lg7>
                <TextBoxMaterial
                  v-model="login.email"
                  :lable="$t('LogIn.Email')"
                  rules="usermailRules"
                />
              </v-flex>
              <v-flex sm7 xs8 md7 lg7>
                <TextBoxMaterial
                  v-model="login.password"
                  rules="requiredRules"
                  :lable="$t('CatreatAcount.Pwd')"
                  :types="showPwd ? 'text' : 'password'"
                  autocomplete="current-password"
                  :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  @append="s(showPwd)"
                />
              </v-flex>
              <v-flex sm7 xs8 md7 lg7>
                <v-layout wrap>
                  <v-flex sm4 xs4 md5 lg6>
                    <v-checkbox
                      v-model="rememberrme"
                      :label="$t('LogIn.RemmberMe')"
                      class="ma-0 toolbar-items selectionbtn"/>
                    <v-spacer />
                  </v-flex>
                  <v-flex sm4 xs4 md5 lg6>
                    <ButtonText
                      class="mx-16 pa-0"
                      :links="`/${$i18n.locale}/ForgetPwd`"
                      :texts="$t('LogIn.ForgitPwd')"/>
                  </v-flex>
                </v-layout>
                <v-layout justify-center align-center>
                  <ButtonMatirlal
                    :disabled="!firstValid"
                    :texts="$t('LogIn.Submit')"
                  />
                </v-layout>
                <v-layout justify-center align-center>
                  <ButtonText
                    :links="`/${$i18n.locale}/CreateAccount`"
                    :texts="$t('LogIn.IhaveAccount')">
                  </ButtonText>
                </v-layout>
              </v-flex>
            </v-layout>
          </CardMatirial>
        </v-layout>
      </v-form>
      </v-card>
    </div>
  </v-dialog>
</template>

<script>
import { mapMutations , mapActions} from 'vuex'

import axios from 'axios'
export default {
  props: {
    visible: {
      type: Boolean,
      default: null
    }

  },

  data () {
    return {
      login: {
      email: '',
      password: '',
    },
    rememberrme: true,
    firstValid: true,
    firstLazy: false,
    showPwd: false,
    }
  },
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.name = ''
          this.description = ''
          this.$emit('close')
        }
      }
    }
  },
  methods: {
     ...mapActions({ tryLoginAction: 'auth/tryLoginAction' }),
    s(showPwd) {
      console.log('aad')
      this.showPwd = !showPwd
    },
    loginfunc: function () {
      this.tryLoginAction({
        savedLogin: this.rememberrme,
        login: { email: this.login.email, password: this.login.password },
      })
    },
  }
}
</script>
