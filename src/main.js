import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'
import { VueReCaptcha } from "vue-recaptcha-v3";

axios.interceptors.response.use(undefined,
    function(error){
    return new Promise(function (resolve, reject) {
        if(error.response.data.status === 401 && store.getters.isLoggedIn){
            console.log(error.response.data.message)
            store.dispatch("logout")
            router.push("/login")
        }
        throw error;
      });
}
    
);
  

createApp(App)
    .use(store)
    .use(router)
    .use(VueReCaptcha, { siteKey: "6LerwKQgAAAAAFEdfhBrkFB4C62Y9obGg4j1ZyX7" })
    .use(VueAxios, axios)
    .mount('#app')
