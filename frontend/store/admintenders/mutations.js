//import i18n from '~/plugins/i18n'
import Vue from 'vue'
export default {
  
  setTenders: (state,data) => {
    state.allTenders = data
   //  state.allMajors.unshift(data)
  },
  setOneTender: (state,data) => {
    state.oneTender = data.data[0]
  },
  addedTender: (state,data) => {
    console.log(data)
    state.allTenders.unshift(data.data)
  //  this.$router.push({ name: 'adminTenders' })
  },
  updatedOldTender: (state,data) => {
    const index = state.allTenders.data.find((s) => s.tender_id === data[0].tender_id)
    if (index) {
     
      Object.assign(index, data[0])
      console.log(index)
  

    }
  },
  deletedTender: (state,data) => {
    console.log(state.allTenders, data.data)
    const index = state.allTenders.data.find((s) => s.tender_id === data.data.tender_id)
    console.log(index)
    if (index) {
     // data.active = !data.active
      Object.assign(index, data.data)
      console.log(index)
    }
  },
}
