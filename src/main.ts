import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/main.css';  // Asegúrate de que este archivo exista
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
