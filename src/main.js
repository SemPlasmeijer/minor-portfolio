import { createApp } from "vue";
import App from "./App.vue";
import tooltip from "./tooltip.js";
import router from './router'
import "@/assets/tooltip.css";

//fontawesome library and such
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* add some free styles */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add each imported icon to the library */
library.add(faTwitter, faUserSecret)


import './assets/main.css'

const app = createApp(App)

const components = import.meta.globEager('./components/*.vue')

Object.entries(components).forEach(([path, definition]) => {
  // Get name of component, based on filename
  // "./components/Fruits.vue" will become "Fruits"
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')

  // Register component on this Vue instance
  app.component(componentName, definition.default)
})


app.use(router)
app.directive("tooltip", tooltip);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");