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
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.top-app {
  height: 100vh;
  display: flex;
  flex-direction: row;
  color: black;
  font-family: 'Roboto Mono', serif;
}

.left {
  background-color: white;
  padding-top: 5rem;
  padding-left: 1rem;
  height: 100%;
  flex: 0;
  padding-right: 1rem;
  border-right: solid 1px lightgray;
}

.right {
  padding-top: 5rem;
  height: 100%;
  flex: 1;
  padding-left: 1rem;
}
</style>