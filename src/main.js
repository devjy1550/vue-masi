import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'

createApp(App).use(router).use(store).mount('#app')


// vue 프로그램이 실행되면 최초의 Entry Point
