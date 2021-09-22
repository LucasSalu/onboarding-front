import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ConfirmationService from 'primevue/confirmationservice';
import router from './router'
import Vuelidate from 'vuelidate'
import { createStore } from 'vuex'

import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                //core css
import "primeicons/primeicons.css"                          //icons
import 'primeflex/primeflex.css';
import Req from './services/reqs.js'

const store = createStore({
    state : {
     get: {} 
    },
    mutations: {
     repoGet(state , data) {
        state.get = data
     }
    },
    actions: {
        async repoGet(context , {endpoint}) {
            const { data } = await Req.listar(endpoint)
            context.commit("repoGet" , data)
        }
    }
  })

const app = createApp(App).use(router);
app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('InputText', InputText);

app.use(PrimeVue);
app.use(ConfirmationService);
app.use(Vuelidate);
app.use(store);
app.mount('#app');


