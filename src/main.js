import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App.vue'
import router from './router';
import { createApp } from 'vue';

const app = createApp(App);
app.use(router);
app.mount('#app');