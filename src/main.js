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
import { faArrowDownLong, faEnvelope, faUserSecret, faDatabase, faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter, faPython, faVuejs } from '@fortawesome/free-brands-svg-icons'

/* add each imported icon to the library */
library.add(faTwitter,
            faGithub,
            faLinkedin,
            faEnvelope,
            faUserSecret, 
            faArrowDownLong, 
            faDatabase, 
            faPython,
            faVuejs,
            faChevronCircleDown,
            faChevronCircleUp)


import './assets/main.css'

const app = createApp(App)

/* Global Vars */
app.provide('githubRef', 'https://github.com/SemPlasmeijer/minor-portfolio/tree/main/onderzoek-bestanden-etc/')

const components = import.meta.globEager('./components/*.vue')

Object.entries(components).forEach(([path, definition]) => {
  // Get name of component, based on filename
  // "./components/Fruits.vue" will become "Fruits"
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')

  // Register component on this Vue instance
  app.component(componentName, definition.default)
})

app.use(
  cors({
    origin: ['https://sem-smart-city-portfolio.herokuapp.com'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT'],
  })
)
app.use(router)
app.directive("tooltip", tooltip);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount("#app");