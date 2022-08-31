<template>
  <div class="itemWrapper" v-tooltip="popover">
    <RouterLink class="itemInner" :to="'/' + link">{{ popover }}</RouterLink>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  props: {
    popover: {
      Type: String,
    },
    link: {
      Type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.itemWrapper {
  margin: 0.5rem;
  height: 100px;
  width: 100px;
  border: solid 1px black;
}

.itemInner {
  height: 100%;
  width: 100%;
  display: block;
}
</style>
