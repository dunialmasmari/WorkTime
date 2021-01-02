//import i18n from '~/plugins/i18n'
import Vue from 'vue'
export default {
  
  setTenders: (state,data) => {
    state.allTenders = data
  },
  setOneTender: (state) => {
    state.oneTender = true
  },
  addedTender: (state,data) => {
   // state.tenderMajor = data
  },
  updatedOldTender: (state,data) => {
  //  state.filterField = data
  },
  deletedTender: (state,data) => {
 //   state.tenderFilter = data
  },
}
