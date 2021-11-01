import {createApp} from 'vue'
import App from './App.vue'
import '../assets/scss/main.scss'
import router from './routes.js'

const app = createApp(App);

app.use(router);
app.mount('#app');


