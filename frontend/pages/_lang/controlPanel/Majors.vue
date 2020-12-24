<template>
  <div>
      <v-toolbar-items class="mx-5  pa-2">
      <div class="ma-3 pa-2">
        <h3 style="color:#0b0b0b">Manage Majors</h3>
      </div>
      <v-spacer/>
        <div class="ma-3 py-2">
        <v-btn
          :to="`/${$i18n.locale}/controlPanel/custom-reports`"
          
          style=" height:40px; "
          color="#0b0b0b">
          <span>Add New</span>
        </v-btn>
      </div>
    </v-toolbar-items>
   <v-layout justify-center align-center> 
       <v-flex lg11> 
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
 
    class="elevation-1"
  >
   
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  </v-flex>     
  </v-layout> 
  </div>
</template>

<script>
// :image-src="getMostOrdered.productDefaultConfig.imgUrl"
import { mapActions, mapGetters } from 'vuex'
export default {
     layout:'control',
  //  asyncData () {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({ name: 'world' })
  //     }, 1000)
  //   })
  // },
  data: () => ({
      headers: [
        {
          text: 'major',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'type', value: 'calories' },
        { text: 'status', value: 'fat' },
        { text: 'action', value: 'carbs' },
      ],
      desserts:[],
     
  }),
  computed: {
   
  },
  mounted() {
    
this.initialize()

  },
  methods: {
    initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
        ]
      },
   
  },
}
</script>

<style></style>
