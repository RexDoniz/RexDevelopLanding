// PrimeVue y sus estilos (deben ir primero)
import 'primevue/resources/primevue.min.css'; // core
import 'primeicons/primeicons.css'; // iconos
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome
import './index.css'; // Tailwind y estilos personalizados

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// PrimeVue Components
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputTextarea from 'primevue/textarea';
import Card from 'primevue/card';
import Message from 'primevue/message';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);

// Global components
app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputTextarea', InputTextarea);
app.component('Card', Card);
app.component('Message', Message);
app.component('Toast', Toast);

app.mount('#app');
