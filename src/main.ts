// // For run locally
// import './assets/main.css'
// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'
// const app = createApp(App)
// const pinia = createPinia()
// app.use(pinia)
// app.mount('#app')

// // For create HTML custom element
import { defineCustomElement } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
const pinia = createPinia()
const VueComponent = defineCustomElement(App, {
  configureApp: (app) => {
    app.use(pinia)
  },
})
customElements.define('vue-component', VueComponent)
