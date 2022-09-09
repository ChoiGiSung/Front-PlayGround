import { createApp } from 'vue'
import App from './App.vue'
import {store} from './components/store/store'

let app = createApp(App)
app.mount('#app')
app.use(store)


