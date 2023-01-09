<template>
  <div class="itemWrapper">
    <RouterLink
      active-class="active"
      v-tooltip="popover"
      class="itemInner"
      :to="'/' + link"
      >{{ popover }}
    </RouterLink>
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
.active {
  color: var(--vt-c-secondary) !important;
}
.itemWrapper {
  margin-bottom: 0.5rem;

  .itemInner {
    height: 100%;
    width: 100%;
    color: var(--vt-c-gray-mute);
    font-weight: 600;
    &:hover {
      color: var(--vt-c-secondary) !important;
    }
  }
}
</style>
