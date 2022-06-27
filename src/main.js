import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//AXIOS
import axios from 'axios'
import VueAxios from 'vue-axios'

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
    .use(VueAxios, axios)
    .mount('#app')
