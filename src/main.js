import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ConfirmationService from 'primevue/confirmationservice';
import router from './router'
import Vuelidate from 'vuelidate'
import store from './store/Index';

import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                //core css
import "primeicons/primeicons.css"                          //icons
import 'primeflex/primeflex.css'



const app = createApp(App).use(router);
app.use(store);
app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('InputText', InputText);

app.use(PrimeVue);
app.use(ConfirmationService);
app.use(Vuelidate);

app.mount('#app');





