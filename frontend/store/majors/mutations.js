//import i18n from '~/plugins/i18n'
import Vue from 'vue'
export default {

  setMajors: (state, data) => {
    console.log('dsf')
    state.allMajors = data
  },
  setOneMajors: (state) => {
    console.log('dsf')
    state.loading = true
  },
  addMajor: (state, data) => {
    console.log('dsf')
    state.allMajors.unshift(data)
    state.addVisibal = data.visibal
  },
  putMajor: (state, data) => {
    console.log('dsf')
    state.updateVisibal = data
  },
  AddMajorChangeVisibal: (state, data) => {
    state.addVisibal = data
  },
  UpdateMajorChangeVisibal: (state, data) => {
    state.updateVisibal = data
  },
}
