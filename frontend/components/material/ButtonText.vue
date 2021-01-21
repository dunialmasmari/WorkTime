<template>
  <div>
    <v-btn :to="links" class="py-5 ButtonText" text :outlined="outline">
      {{ texts }}
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    texts: {
      type: String,
      default: '',
    },
    links: {
      type: String,
      default: '',
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isButton: false,
  }),
}
</script>
