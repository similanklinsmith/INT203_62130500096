    const app = {
        data() {
            return {
                msg: 'Hello, Vue3'
            }
        }

    }
    const mountedApp = Vue.createApp(app).mount('#app')