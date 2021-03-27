<template>
  <div >
    <v-fade-transition mode="out-in">
      <nuxt />
    </v-fade-transition>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: '',
    }
  },
}
</script>
