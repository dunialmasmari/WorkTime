<template>
  <div>
    <v-btn type="submit" :disabled="disabled" class="py-5 ButtonMaterial">
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isButton: false,
  }),
}
</script>
