export default {
    async loadAllMajors({ commit }) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`major`, {
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
                    commit('setMajors', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async loadOneMajors({ commit }, data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`major/${data}`, {
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
                    commit('setOneMajors', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async addNewMajor({ commit }, data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .post(`major`,data, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 201) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('addMajor', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async putNewMajor({ commit }, data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .put(`major/${data.major_id}`,data, {
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
                    commit('putMajor', respo.data[0])
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async deleteOneMajor({ commit }, data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .delete(`major/${data.major_id}`, {
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
                    commit('deleteMajor',data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
}