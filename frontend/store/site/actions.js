export default {
    async sendContactUS({ commit },data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .post(`ContactUs`,data)
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('app/successMessage', respo.data, { root: true })
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
  
}