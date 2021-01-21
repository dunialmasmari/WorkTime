<template>
  <div>
    <client-only>
      <notifications
        :width="messagewith()"
        animation-name="v-fade"
        group="failmessages"
        position="bottom left"
      >
        <template slot="body" slot-scope="props">
          <v-alert class="mx-2 FailMessages">
            <v-layout style="display: block">
              <v-icon @click="props.close"> mdi-close </v-icon>
              {{ $t('' + props.item.text + '') }}
            </v-layout>
          </v-alert>
        </template>
      </notifications>
    </client-only>
    <client-only>
      <notifications
        :width="messagewith()"
        group="successmesages"
        position="bottom left"
      >
        <template slot="body" slot-scope="props">
          <v-alert class="mx-2 SuccessMesages">
            <v-layout style="display: block">
              <v-icon @click="props.close"> mdi-close </v-icon>
              {{ $t('' + props.item.text + '') }}
            </v-layout>
          </v-alert>
        </template>
      </notifications>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      autherror: false,
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    messagewith() {
      //if (window.innerWidth < 600) {
      //  return '90%'
      //} else {
      return '40%'
      // }
    },
  },
}
</script>
