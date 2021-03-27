<template>
  <div>
    <v-btn type="submit" color="#4f9dd5" :disabled="disabled" class="py-5 ButtonMaterial">
     <span style="color:#fff"> {{ texts }}</span>
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
