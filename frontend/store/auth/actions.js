export default {
    async tryLoginAction({ commit  },data) {
        commit('app/loadingStart', null, { root: true })
        if(data.email==='infoworktime.com@gmail.com' && data.password==='worktime1234'){
            this.$router.push({ path: '/ar/controlPanel' })
            commit('app/loadingFinish', null, { root: true })
           
        }else{
            commit('app/loadingFinish', null, { root: true })
            commit('app/failMessage', 'apiFail', { root: true })
        }
        // await this.$axios
        //     .post(`login`,data)
        //     .then((respo) => {
        //         if (respo.status === 400) {
        //             console.log(respo.data.message)
        //             commit('app/loadingFinish', null, { root: true })
        //             commit('app/failMessage', respo.data.message, { root: true })
        //         }
        //         if (respo.status === 200) {
        //            // this.$cookies.set('loginData',JSON.stringify(respo.data), { parseJSON: true })
        //             this.$cookies.set('logintoken',JSON.stringify(respo.data.token), { parseJSON: false })

        //             console.log( this.$cookies.getAll())
        //             commit('app/loadingFinish', null, { root: true })
        //             //commit('loginSuccess', respo.data)
                   
        //           //storage.setState("_password", "alpha1")
        //          //   console.log('dfgdfg',$storage,store.state.storage)
        //             this.$axios.defaults.headers.common['Authorization'] = `Bearer ${respo.data.token}`
        //          //   localStorage.setItem('loginData', JSON.stringify(respo.data))
        //            this.$router.push({ path: '/ar/controlPanel' })
        //         }
        //     })
        //     .catch((error) => {
        //         commit('app/loadingFinish', null, { root: true })
        //         commit('app/failMessage', 'apiFail', { root: true })
        //         throw error
        //     })
    },
    async checkLoggedIn({  }) {
        //let loginData = JSON.parse(localStorage.getItem('loginData'))
        let loginData = this.$cookies.get('logintoken',{ })
        //if(loginData){
        var s=loginData.length-1;
      //  console.log('nnnnnn',s,loginData.substring(1,s))
        this.$axios.defaults.headers.common['Authorization'] = 'Bearer '+ loginData.substring(1,s)
        this.$axios.defaults.headers.common['Accept'] = `application/json`
      //  console.log('nnnnnn',loginData)
       // }
       // else{
       //     this.$router.push({ path: '/ar/login' })
        //}
    },
}