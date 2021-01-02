export default {
    async loadAllTender({ commit }) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`tender`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('setTenders', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async loadOneTender({ commit }, data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`tender/${data}`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('setOneTender', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async addNewTender({ commit },data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .post(`tender`, data ,{
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('addedTender', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async updateTender({ commit },data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .put(`tender/${data.id}`,data.fields ,{
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('updatedOldTender', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async deleteTender({ commit },data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .delete(`tender/${data}`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('deletedTender', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },








}