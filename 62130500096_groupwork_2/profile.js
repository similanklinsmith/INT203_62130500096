    const app = {
        data() {
            return {
                name: 'Similan Klinsmith',
                dateMember: 'Oct 29',
                follow: 2543,
                post: 255,
                comment: 147,
                favorite: 72,
                image: './images/deep.jpg',
                alreadyFollow: true
            }
        }
    }
    var mountedApp = Vue.createApp(app).mount('#app')