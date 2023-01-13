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
import {faXmark,faBarsStaggered, faArrowDownLong, faEnvelope, faUserSecret, faDatabase, faChevronCircleDown, faChevronCircleUp, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
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
            faChevronCircleUp,
            faChevronRight,
            faChevronLeft,
            faBarsStaggered,
            faXmark)


import './assets/main.css'

const app = createApp(App)

/* Global Vars */
app.provide('githubRef', 'https://github.com/SemPlasmeijer/minor-portfolio/blob/main/onderzoek-bestanden-etc/')

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

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyAyB3HjxjLm1fjWikWBiXXxS-lNEgClpsI",

  authDomain: "smartcityportfolio.firebaseapp.com",

  projectId: "smartcityportfolio",

  storageBucket: "smartcityportfolio.appspot.com",

  messagingSenderId: "221899144946",

  appId: "1:221899144946:web:1a6689edd213d6a599da6b",

  measurementId: "G-Q5SNWKNC17"

};


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);