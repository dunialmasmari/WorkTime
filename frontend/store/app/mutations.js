//import i18n from '~/plugins/i18n'
import Vue from 'vue'
export default {
  setDrawer: (state,property) => {
    console.log('dsf')
    state.drawer = property
    //set('drawer')
  },
  toggleDrawer:  (state,property) => {
    console.log('dsf')
    state.drawer = property
    //set('drawer')
  },
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  projectDirection: (state, lang) => {
    if (lang === 'ar') {
      state.direction = true
    }
    if (lang !== 'ar') {
      state.direction = false
    }
  },
  successMessage: (state, data) => {
    Vue.notify({
      duration: 6000,
      speed: 400,
      type: 'success',
      group: 'successmesages',
      closeOnClick: true,
      text: 'apisuccessmesages.' + data,
      title: 'apisuccessmesages.title' + data,
    })

    state.messages = 'success'
  },
  failMessage: (state, data) => {
    Vue.notify({
      duration: 6000,
      speed: 400,
      type: 'error',
      group: 'failmessages',
      text: 'apifailmessages.' + data,
      title: 'apifailmessages.title',
    })

    state.messages = 'error'
  },
  loadingFinish: (state) => {
    console.log('dsf')
    state.loading = false
  },
  loadingStart: (state) => {
    console.log('dsf')
    state.loading = true
  },
  


}
