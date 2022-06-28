import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles/global.scss';
import 'element-plus/dist/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './plugins/vuex';
import plugins from './plugins';

const app = createApp(App);

app.use(plugins.i18n)
app.use(plugins.ElementUI)
app.use(store)
app.use(router);
app.mount('#app');
