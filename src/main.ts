import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';  // Asegúrate de que este archivo exista
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome

// PrimeVue
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
// PrimeVue styles
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(PrimeVue, { ripple: true });

// Global components
app.component('Button', Button);

app.mount('#app');
