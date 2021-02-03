    const app = {
        data() {
            return {
                msg: 'Hello, Vue3',
                show: true,
                image: './images/1.jpg'
            }
        }

    }
    const mountedApp = Vue.createApp(app).mount('#app')