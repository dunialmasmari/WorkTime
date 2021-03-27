export default {
    async dowenloadFile({ commit }, data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`Tender/dowenloadFile/${data}`, {responseType: 'arraybuffer'})
            .then((respo) => {
                console.log('hhsss',respo.data[0])
                if (respo.status === 401) {
                    redirect('/login')
                }
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                //    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    let blob = new Blob([respo.data], {type:'application/*'})
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = data
        link.click();
                    commit('app/loadingFinish', null, { root: true })
                 //   commit('setOneTender', respo.data[0])
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                //commit('app/failMessage', 'apiFail', { root: true })
                console.log('hhsaaaaaa')
                if (error.status === 401) {
                    redirect('/login')
                }
                throw error
            })
    },
    async loadAllTender({ commit }) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`Tender/get`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                   // commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('setTenders', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                //commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async loadOneTender({ commit }, data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`Tender/get/${data}`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                console.log('hhsss',respo.data[0])
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                   // commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('setOneTender', respo.data[0])
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
              //  commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async loadTenderMajor({ commit }) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`Tender/major`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                //    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('setTenderMajor', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
              //  commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async loadFilterField({ commit }) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`Tender/filter/field`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                   // commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('setFilterField', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                //commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async loadTenderFilter({ commit },data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`Tender/filters?page=${data.page}&major_id=${data.major_id}&company=${data.company}&location=${data.location}`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                  //  commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('setTenderFilter', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
               // commit('app/failMessage', 'apiFail', { root: true })
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
                   // commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('addMajor', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                //commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async putNewMajor({ commit }, data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .put(`major`,data, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    //commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('putMajor', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                //commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
    async deleteOneMajor({ commit }, data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .delete(`major`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    //commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 200) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    commit('deleteMajor', respo.data)
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                //commit('app/failMessage', 'apiFail', { root: true })
                throw error
            })
    },
}