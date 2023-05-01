import { createApp } from 'vue'
import '../public/css/style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store';
import router from "./router";

const app = createApp(App);

app.use(ElementPlus)
app.use(store).use(router)

app.mount('#app')
