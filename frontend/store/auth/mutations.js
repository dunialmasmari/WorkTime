//import i18n from '~/plugins/i18n'
import Vue from 'vue'
export default {
  
  setTenders: (state,data) => {
    state.allTenders = data
  },
  setOneTender: (state,data) => {
    state.oneTender = data
  },
  setTenderMajor: (state,data) => {
    state.tenderMajor = data
  },
  setFilterField: (state,data) => {
    state.filterField = data
  },
  setTenderFilter: (state,data) => {
    state.tenderFilter = data
  },
}
