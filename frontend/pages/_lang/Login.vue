<template>
  <v-layout>
    <v-flex sm12 xs12 md12 lg12 class="mt-4">
      <v-form
        ref="firstform"
        v-model="firstValid"
        :lazy-validation="firstLazy"
        @submit.prevent="loginfunc()">
        <v-layout justify-center align-center class="py-9">
          <v-card>
            <v-layout  justify-center align-center style="color:#fff; background-color:#4f9dd5; margin-top:-20px; margin-left:5%; margin-right:5%;">
            
                <h4 class="my-3">{{ $t('LogIn.LogInTitle') }}
                </h4>
            
            </v-layout>
            <v-layout
              class="py-5 my-5"
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
                  :lable="$t('LogIn.Pwd')"
                  :types="showPwd ? 'text' : 'password'"
                  autocomplete="current-password"
                  :append-icon="showPwd ? 'mdi-eye' : 'mdi-eye-off'"
                  @append="s(showPwd)"
                />
              </v-flex>
              <v-flex sm7 xs8 md7 lg7>
                <!-- <v-layout wrap>
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
                </v-layout> -->
                <v-layout justify-center align-center>
                  <ButtonMatirlal
                    :disabled="!firstValid"
                    :texts="$t('LogIn.Submit')"
                  />
                </v-layout>
                <!-- <v-layout justify-center align-center>
                  <ButtonText
                    :links="`/${$i18n.locale}/CreateAccount`"
                    :texts="$t('LogIn.IhaveAccount')">
                  </ButtonText>
                </v-layout> -->
              </v-flex>
            </v-layout>
          </v-card>
        </v-layout>
      </v-form>
    </v-flex>
  </v-layout>
</template>
<script>
    import { mapActions } from 'vuex'
    export default {
        data: () => ({
            login: {
                email: '',
                password: '',
            },
            rememberrme: true,
            firstValid: true,
            firstLazy: false,
            showPwd: false,
        }),
        methods: {
            ...mapActions({ tryLoginAction: 'auth/tryLoginAction' }),
            s(showPwd) {
                console.log('aad')
                this.showPwd = !showPwd
            },
            loginfunc: function () {
                this.tryLoginAction({email: this.login.email,
                 password: this.login.password 
                })
            },
        },
    }
</script>
<style></style>
