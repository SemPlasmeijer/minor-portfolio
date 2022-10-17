<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>
<template>
  <div class="top-app">
    <div class="left">
      <div>
        <SideBar />
      </div>
    </div>
    <div class="right">
      <router-view v-slot="{ Component, route }">
        <transition
          :enter-active-class="route.meta.enter"
          :leave-active-class="route.meta.leave"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-app {
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: row;
  color: var(--vt-c-black);
  font-family: "Montserrat", sans-serif;
}

.left {
  padding-top: 0rem;
  min-width: 20%;
  max-width: 20%;
  z-index: 100;
  height: 100%;
  max-height: 100vh;
  overflow: auto;
}

.right {
  max-height: 100vh;
  overflow: auto;
  padding-top: 1rem;
  flex: 1;
  min-width: 80%;
  max-width: 80%;
}
</style>