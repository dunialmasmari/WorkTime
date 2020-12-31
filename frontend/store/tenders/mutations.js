//import i18n from '~/plugins/i18n'
import Vue from 'vue'
export default {
  
  setMajors: (state,data) => {
    console.log('dsf')
    state.allMajors = data
  },
  setOneMajors: (state) => {
    console.log('dsf')
    state.loading = true
  },
  addMajor: (state) => {
    console.log('dsf')
    state.loading = true
  },
  putMajor: (state) => {
    console.log('dsf')
    state.loading = true
  },
  AddMajorChangeVisibal: (state,data) => {
    state.addVisibal = data
  },
  UpdateMajorChangeVisibal: (state,data) => {
    state.updateVisibal = data
  },
}
