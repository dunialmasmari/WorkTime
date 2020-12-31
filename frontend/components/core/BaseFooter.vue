<template>
 <div class="footer">
    <v-lazy
      v-model="isFooter"
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-footer elevation="12"
                style="background: linear-gradient(to top right, rgba(19,84,122,.5), rgba(128,208,199,.8));"
                color="brown" app absolute height="200px">
        <v-layout justify-center align-center>
          <v-flex>
            <v-layout justify-center align-center>
              <v-avatar size="80" tile>
                <v-img :src="require('@/static/v.png')" height="80" contain />
              </v-avatar>
            </v-layout>
          </v-flex>
          <v-divider class="mx-4" vertical style="background-color: white"/>
          <v-flex>
            <v-layout justify-center align-center class="my-2">
              <v-btn text color="white"
                     :to="`/${$i18n.locale}/PrivacyPolicy`">
             Contact AS
              </v-btn>
            </v-layout>
            <v-layout justify-center align-center class="my-2">
              <v-btn text color="white">
                PrivacyPolicy
              </v-btn>
            </v-layout>
            <v-layout justify-center align-center>
              <v-btn text color="white">
              Terms of use
              </v-btn>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-layout justify-center align-center>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-lazy>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    isFooter: false,
  }),
}
</script>
