<template>
  <div v-if="getloading" class="loading-page">
    <loading
      :active.sync="getloading"
      :can-cancel="false"
      :is-full-page="true"
      class="Color"
    />
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { mapGetters } from 'vuex'
export default {
  components: {
    Loading,
  },
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapGetters({ getloading: 'app/getloading' }),
  },
  methods: {},
}
</script>
