import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles/global.scss';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(ElementPlus)
app.use(router);
app.mount('#app');
