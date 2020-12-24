<template>
  <div id="core-footer" class="footer">
    <v-lazy
      v-model="isFooter"
      :options="{
        threshold: 0.5,
      }"
      transition="fade-transition"
    >
      <v-footer elevation="12" app absolute>
        <v-layout justify-center align-center>
          <v-flex>
           
          </v-flex>
          <v-divider class="mx-4" vertical />
          <v-flex>
             <v-avatar size="150" tile>
        <v-img :src="require('@/static/v.png')" height="70" contain />
      </v-avatar>
          </v-flex>
          <v-divider class="mx-4" vertical />
          <v-flex>
          
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
