<template>
  <div class="item" v-tooltip="popover">
    <RouterLink :to="'/' + link">{{ popover }}</RouterLink>
    2
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
.item {
  height: 100px;
  width: 100px;
  border: solid 1px black;
}
</style>
