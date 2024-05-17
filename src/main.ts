import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/vuexstore.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
