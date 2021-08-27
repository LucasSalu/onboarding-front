import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmDialog from 'primevue/confirmdialog';




import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                //core css
import "primeicons/primeicons.css"                          //icons
import 'primeflex/primeflex.css';
import router from './router'



const app = createApp(App).use(router);
app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('ConfirmationService', ConfirmationService);
app.component('ConfirmDialog', ConfirmDialog);
app.use(PrimeVue);
app.mount('#app');


