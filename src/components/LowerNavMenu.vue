<template>
  <nav @mouseover="spinTrack" @mouseleave="resetTrack">
    <div id="nav-links">
      <router-link
        @click="toggleNav"
        class="nav-link"
        :to="'/'"
        active-class="active"
      >
        <h2 class="nav-link-label">home</h2>
        <img
          class="nav-link-image"
          src="../assets/pedro-lastra-Nyvq2juw4_o-unsplash.jpg"
        />
      </router-link>
      <router-link
        @click="toggleNav"
        class="nav-link"
        :to="'/description'"
        active-class="active"
      >
        <h2 class="nav-link-label">Wie ben ik?</h2>
        <img class="nav-link-image" src="../assets/profile.jpg" />
      </router-link>
      <router-link
        @click="toggleNav"
        class="nav-link"
        :to="'/project'"
        active-class="active"
      >
        <h2 class="nav-link-label">Project</h2>
        <img
          class="nav-link-image"
          src="../assets/sergey-raikin-ZOOt4tQXe9g-unsplash.jpg"
        />
      </router-link>

      <router-link
        @click="toggleNav"
        class="nav-link"
        :to="'/leerdoelen'"
        active-class="active"
      >
        <h2 class="nav-link-label">Leerdoelen & Ontwikkeling</h2>
        <img
          class="nav-link-image"
          src="../assets/tim-mossholder-SZgVZPbQ7RE-unsplash.jpg"
        />
      </router-link>
      <router-link
        @click="toggleNav"
        class="nav-link"
        :to="'/blogs'"
        active-class="active"
      >
        <h2 class="nav-link-label">Thema's</h2>
        <img
          class="nav-link-image"
          src="../assets/joshua-rawson-harris-KRELIShKxTM-unsplash.jpg"
        />
      </router-link>
      <router-link
        @click="toggleNav"
        class="nav-link"
        :to="'/certificates'"
        active-class="active"
      >
        <h2 class="nav-link-label">Certificates</h2>
        <img
          class="nav-link-image"
          src="../assets/lewis-keegan-XQaqV5qYcXg-unsplash.jpg"
        />
      </router-link>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  methods: {
    toggleNav() {
      setTimeout(() => {
        document.body.dataset.nav =
          document.body.dataset.nav === "true" ? "false" : "true";
      }, 200);
    },
    spinTrack(event) {
      document.querySelector("#nav-links").style.transform = `translateX(-${
        event.clientX / 1.5
      }px)`;
    },
    resetTrack() {
      document.querySelector("#nav-links").style.transform = `none`;
    },
  },
};
</script>

<style>
/* nav links*/
#nav-links {
  display: flex;
  gap: clamp(1rem, 2vw, 2rem);
  width: 100%;
  margin-top: clamp(2rem, 2vw, 3rem);
  padding: 0rem clamp(1rem, 2vw, 2rem);
  transition: transform 500ms cubic-bezier(0.13, 0.53, 0.38, 0.97);
}

body[data-nav="true"] > nav > #nav-links {
  transform: translateY(0%) scale(1);
}

body[data-nav="true"] > #app > div > nav > #nav-links {
  transform: translateY(0%) scale(1);
}

body:not([data-nav="true"]) > #app > div > nav {
  opacity: 0;
}

#nav-links {
  display: flex;
  gap: clamp(1rem, 2vw, 2rem);
  margin-top: clamp(2rem, 2vw, 3rem);
  padding: 0rem clamp(1rem, 2vw, 2rem);
  transform: translateY(70%) scale(0.9);
  transition: transform 500ms cubic-bezier(0.13, 0.53, 0.38, 0.97);
}

body[data-nav="true"] > #app > div > nav > #nav-links {
  transform: translateY(0%) scale(1);
}

#nav-links > .nav-link {
  text-decoration: none;
}

#nav-links > .nav-link:hover > .nav-link-label {
  text-decoration: none;
  list-style: inside;
}

#nav-links > .nav-link > .nav-link-label::marker {
  color: var(--vt-c-secondary);
}

@media only screen and (min-width: 480px) {
  nav {
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: 1;
    overflow: hidden;
    transition-timing-function: ease;
    transition-duration: 300ms;
    transform: translateY(-60%);
  }

  #nav-links > .nav-link > .nav-link-image {
    width: max(20vw, 200px);
    aspect-ratio: 1.8 / 1;
    border-radius: 0.5rem;
    margin-top: 0.75rem;
    object-fit: cover;
    transition-timing-function: ease;
    transition-duration: 400ms;
  }

  #nav-links > .nav-link:hover > .nav-link-image {
    width: max(15vw, 190px);
  }
}

@media only screen and (min-width: 960px) {
  nav {
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: 1;
    overflow: hidden;
    transition-timing-function: ease;
    transition-duration: 300ms;
    transform: translateY(-60%);
  }

  #nav-links > .nav-link > .nav-link-label {
    display: list-item;
    list-style: none; /* Remove default bullets */
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
    color: white;
    font-size: 0.9rem;
    margin: 0rem;
  }

  #nav-links > .nav-link > .nav-link-image {
    width: max(15vw, 300px);
    aspect-ratio: 1.8 / 1;
    border-radius: 0.5rem;
    margin-top: 0.75rem;
    object-fit: cover;
    transition-timing-function: ease;
    transition-duration: 400ms;
  }

  #nav-links > .nav-link:hover > .nav-link-image {
    width: max(15vw, 290px);
  }
}

@media only screen and (min-width: 1700px) {
  nav {
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: 1;
    overflow: hidden;
    transition-timing-function: ease;
    transition-duration: 300ms;
    transform: translateY(-50%);
  }

  #nav-links > .nav-link > .nav-link-label {
    display: list-item;
    list-style: none; /* Remove default bullets */
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
    color: white;
    font-size: 1.25rem;
    margin: 0rem;
  }

  #nav-links > .nav-link > .nav-link-image {
    width: max(20vw, 400px);
    aspect-ratio: 1.8 / 1;
    border-radius: 0.5rem;
    margin-top: 0.75rem;
    object-fit: cover;
    transition-timing-function: ease;
    transition-duration: 400ms;
  }

  #nav-links > .nav-link:hover > .nav-link-image {
    width: max(20vw, 390px);
  }
}

.active > .nav-link-label {
  list-style: inside !important;
}

.active > .nav-link-label::marker {
  color: var(--vt-c-third) !important;
}
</style>
