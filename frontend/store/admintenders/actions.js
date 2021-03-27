export default {
    async loadAllTender({ commit },data) {
        commit('app/loadingStart', null, { root: true })
        await this.$axios
            .get(`tender?page=${data}`, {
                retry: 5,
                retryDelay: 10000,
            })
            .then((respo) => {
                // if (respo.status  === 401) {
                  
                //     this.$router.push({ path: '/ar/login' }) }
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
              //  if (error.response.status === 401) {
                  
                  //  this.$router.push({ path: '/ar/login' }) }
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
                if (error.response.status === 401) {
                  
                    this.$router.push({ path: '/ar/login' }) }
                throw error
            })
    },
    async addNewTender({ commit ,route},data) {
        commit('app/loadingStart', null, { root: true })
        let formData = new FormData()
       
        formData.append('image',data.files.image)
        formData.append('filename',data.files.filename)
       
        await this.$axios
            .post(`tender?user_id=4&major_id=${data.major_id}&title=${data.title}&company=${data.company}&description=${data.description}&apply_link=${data.apply_link}&start_date=${data.start_date}&deadline=${data.deadline}&posted_date=${data.posted_date}&active=${data.active}&location=${data.location}`, formData ,{ headers: {
                'Content-Type': 'multipart/form-data',
              
              //  'boundary': Math.random().toString().substr(2),
              }})
            .then((respo) => {
                if (respo.status === 400) {
                    console.log(respo.data.message)
                    commit('app/loadingFinish', null, { root: true })
                    commit('app/failMessage', respo.data.message, { root: true })
                }
                if (respo.status === 201) {
                    console.log(respo.data)
                    commit('app/loadingFinish', null, { root: true })
                    this.$router.push({ path: '/ar/controlPanel/AllTenders' }) 
                     commit('addedTender', respo.data)
                }
            })
            .catch((error) => {
                console.log('hhsaaaaaa',error.response.status)
               
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                // if (error.response.status === 401) {
                  
                //     this.$router.push({ path: '/ar/login' }) }
                throw error
            })
    },
    async updateTender({ commit },data) {
        commit('app/loadingStart', null, { root: true })
        let formData = new FormData()
       
        formData.append('image',data.files.image)
        formData.append('filename',data.files.filename)
        await this.$axios
            .put(`tender/${data.tender_id}?tender_id=${data.tender_id}&major_id=${data.major_id}&title=${data.title}&company=${data.company}&description=${data.description}&apply_link=${data.apply_link}&start_date=${data.start_date}&deadline=${data.deadline}&posted_date=${data.posted_date}&active=${data.active}&location=${data.location}`, formData ,{ headers: {
                'Content-Type': 'multipart/form-data',
              
              //  'boundary': Math.random().toString().substr(2),
              }})
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
                    this.$router.push({ path: '/ar/controlPanel/AllTenders' }) 
                }
            })
            .catch((error) => {
                commit('app/loadingFinish', null, { root: true })
                commit('app/failMessage', 'apiFail', { root: true })
                // if (error.response.status === 401) {
                  
                //     this.$router.push({ path: '/ar/login' }) }
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
                //if (error.response.status === 401) {
                  
                 //   this.$router.push({ path: '/ar/login' }) }
                throw error
            })
    },








}