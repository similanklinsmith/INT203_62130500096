    const app = {
        data() {
            return {
                food:14,
                lifestyle:7,
                drinks:12
                
            }
        }

    }
    Vue.createApp(app).mount('#app');

    let body = document.getElementById("app");
    let after = document.getElementById("bts").addEventListener("mouseover",function(){
        body.style.backgroundColor =  "#141414";
        document.getElementById("text").style.color ='#f9fafb';
        document.getElementById("bts").style.color = '#f9fafb';
        document.getElementById("nav").style.color = '#f9fafb';
        document.getElementById("treasure").src = './images/treasure_white.png';
        document.getElementById("twitter").src = './images/twitter_white.png';
        document.getElementById("facebook").src = './images/facebook_white.png';
        document.getElementById("instagram").src = './images/instagram_white.png';

    });
    let before = document.getElementById("bts").addEventListener("mouseout",function(){
        body.style.backgroundColor = "#f9fafb";
        document.getElementById("text").style.color ='#141414';
        document.getElementById("bts").style.color = '#141414';
        document.getElementById("nav").style.color = '#141414';
        document.getElementById("treasure").src = './images/treasure.png';
        document.getElementById("facebook").src = './images/iconmonstr-facebook-6.svg';
        document.getElementById("twitter").src = './images/iconmonstr-twitter-2.svg';
        document.getElementById("instagram").src = './images/iconmonstr-instagram-12.svg';
        
    });

    let onText = document.getElementById("text").addEventListener("mouseover",function(){
        document.getElementById("floating-img").style.opacity = "0.25";
    })

    let outText = document.getElementById("text").addEventListener("mouseout",function(){
        document.getElementById("floating-img").style.opacity = "1";
    })

