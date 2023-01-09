<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
import LowerNavMenu from "./components/LowerNavMenu.vue";
</script>
<template>
  <div>
    <div class="name">Sem Plasmeijer</div>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <LowerNavMenu></LowerNavMenu>

    <button id="nav-toggle" type="button" @click="toggleNav">
      <font-awesome-icon
        class="nav-icon open fa-fw"
        icon="fa-solid fa-bars-staggered"
      />
      <font-awesome-icon
        class="nav-icon close fa-fw"
        icon="fa-solid fa-xmark"
      />
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    toggleNav() {
      document.body.dataset.nav =
        document.body.dataset.nav === "true" ? "false" : "true";
    },
  },
};
</script>

<style scoped>
.name {
  z-index: 10;
  position: fixed;
  top: 1%;
  left: 1%;
  color: white;
  cursor: pointer;
  user-select: none;
  text-align: center;
  font-family: "Major Mono Display", monospace;
  font-weight: 400;
  font-size: 20px;
}
</style>
