<template>
  <v-content>
    <div id="core-view">
    
      <v-fade-transition mode="out-in">
          <nuxt />

      </v-fade-transition>

    </div>
   </v-content>
</template>

<script>
export default {
  
  metaInfo () {
    return {

      title: ''

    }
  },
  data () {
    return {
    }
  },
  computed: {
    

  },
  created () {
  },
  methods: {
  
  }
}
</script>

<style>
#core-view {
  padding-bottom: 100px;
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
    background-color: #FAFDF6;

}
</style>
