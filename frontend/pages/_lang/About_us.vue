<template>
  <v-layout slot="tittle" justify-center align-center>
    <v-flex sm12 xs10 md10 lg10>
      <v-layout class="py-5 my-4">
        <v-flex  class="CheckoutCard" >
          <v-layout justify-center align-center>
              <v-avatar width="150" height="90" tile>
                <v-img :src="require('@/static/hrlogo.png')" height="100" contain />
              </v-avatar>
          </v-layout>
          <v-layout justify-center align-center>
          <h3 class="py-2 PolicyTittle" style="color:000000;">
            {{ $t('Core.Footer.about_us') }}
          </h3>
          </v-layout>
        </v-flex>
      </v-layout>
      <div
        class="py-10"
        style="z-index:1;">
        <v-layout
          justify-center
          align-center
          wrap
          class="pa-5  elevation-5">
          <v-flex
            class="py-4"
            lg12
            sm12
            xs12
            md12 >
            <v-layout>
              <h3 style="color:#4f9dd5;"
                class="text-xs-center px-5 py-4 PageTittle" >   {{ $t('Core.Footer.about_us') }}</h3>
            </v-layout>
            <p
              class="px-3 AlignText"
             >
                {{ $t('Core.aboutus.description') }}
                </p>
                 <v-layout>
              <h3 style="color:#4f9dd5;"
                class="text-xs-center px-5 py-4 PageTittle" >   {{ $t('Core.aboutus.vesion') }}</h3>
            </v-layout>
            <p
              class="px-3 AlignText"
             >
                {{ $t('Core.aboutus.vesionDes') }}
                </p>
                 <v-layout>
              <h3 style="color:#4f9dd5;"
                class="text-xs-center px-5 py-4 PageTittle" >   {{ $t('Core.aboutus.services') }}</h3>
            </v-layout>
            <p
              class="px-3 AlignText"
             >
                {{ $t('Core.aboutus.servicesDes') }}
                </p>
          </v-flex>
        </v-layout>
      </div>
  </v-flex>
  </v-layout>
</template>
<script>
    export default {
        data: () => ({}),
    }
</script>
<style scoped>

</style>
