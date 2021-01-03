//import i18n from '~/plugins/i18n'
import Vue from 'vue'
export default {
  
  setTenders: (state,data) => {
    state.allTenders = data
   //  state.allMajors.unshift(data)
  },
  setOneTender: (state,data) => {
    state.oneTender = data[0]
  },
  addedTender: (state,data) => {
    console.log(data)
    state.allTenders.unshift(data.data)
  //  this.$router.push({ name: 'adminTenders' })
  },
  updatedOldTender: (state,data) => {
    const index = state.allTenders.find((s) => s.tender_id === data.data.tender_id)
    if (index) {
     
      Object.assign(index, data)
      console.log(index)
  

    }
  },
  deletedTender: (state,data) => {
 //   state.tenderFilter = data
  },
}
