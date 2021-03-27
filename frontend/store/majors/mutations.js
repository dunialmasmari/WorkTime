//import i18n from '~/plugins/i18n'
import Vue from 'vue'
export default {

  setMajors: (state, data) => {
    console.log('dsf')
    state.allMajors = data
  },
  setOneMajors: (state,data) => {
    console.log('dsf')
    state.oneMajor = data
  },
  setActiveMajors: (state,data) => {
    console.log('dsf')
    state.activeMajors = data
  },
  addMajor: (state, data) => {
    console.log('dsf')
    state.allMajors.unshift(data)
    state.addVisibal = data.visibal
  },
  putMajor: (state, data) => {
    console.log('dsf')
    const index = state.allMajors.find((s) => s.major_id === data.major_id)
    if (index) {
     
      Object.assign(index, data)
      console.log(index)
    state.updateVisibal = false

    }
  },
  deleteMajor: (state, data) => {
    console.log(state.allMajors)
    const index = state.allMajors.find((s) => s.major_id === data.major_id)
    if (index) {
      data.active = !data.active
      Object.assign(index, data)
      console.log(index)
    }
  },
  AddMajorChangeVisibal: (state, data) => {
    state.addVisibal = data
  },
  UpdateMajorChangeVisibal: (state, data) => {
    state.updateVisibal = data
  },
}
