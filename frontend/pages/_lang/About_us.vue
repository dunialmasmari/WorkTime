<template>
  <v-layout slot="tittle" justify-center align-center>
    <v-flex sm12 xs10 md10 lg10>
      <v-layout class="py-5 my-4">
        <v-flex  class="CheckoutCard" >
          <v-layout justify-center align-center>
              <v-avatar width="150" tile>
                <v-img :src="require('@/static/hrlogo.png')" height="100" contain />
              </v-avatar>
          </v-layout>
          <v-layout justify-center align-center>
          <h3 class="py-2 PolicyTittle" style="color:5f5d5e;">
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
              <h3 style="color:5f5d5e;"
                class="text-xs-center px-5 py-4 PageTittle" >   {{ $t('Core.Footer.about_us') }}</h3>
            </v-layout>
            <p
              class="px-3 AlignText"
             >
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sint in iusto suscipit at enim! Earum laborum
              sapiente vitae deserunt veniam voluptate nostrum veritatis,
              ipsam laboriosam! Consequatur, iste obcaecati. Quo, perspiciatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Et earum incidunt impedit ex provident fugit tenetur fuga,
              architecto voluptatum eum optio itaque ea aut. Illum dolores
              eos nam atque voluptatibus. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Modi vel ullam, maxime rem, consequuntur fugiat quos
              neque veritatis, maiores cumque ratione itaque aperiam autem asperiores
              distinctio odit cupiditate omnis impedit?</p>

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
