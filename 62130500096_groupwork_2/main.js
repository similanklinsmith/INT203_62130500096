    const app = {
        data() {
            return {
                msg: 'Hello, Vue3'
            }
        },
        created(){
            console.log('message is '+this.msg)
        },
        updated(){
            console.log('message is changed to '+this.msg)
        }

    }
    const mountedApp = Vue.createApp(app).mount('#app')