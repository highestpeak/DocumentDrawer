import { createApp } from 'vue'
import './style.css'
import 'splitpanes/dist/splitpanes.css'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import { vuetify } from "./VuetifyInitializer";
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import App from './App.vue'
import { createPinia } from 'pinia'
import { registComponents } from "./components/registers";

const app = createApp(App)
registComponents(app)
app.use(createPinia())
app.use(vuetify)
app.use(PerfectScrollbar)
app.mount('#app')
