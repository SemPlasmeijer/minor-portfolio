<template>
  <div class="container">
    <SideBarItem
      :key="page.link"
      v-for="page in pageArray"
      :popover="page.popover"
      :link="page.link"
    >
      a
    </SideBarItem>
    1
  </div>
</template>

<script>
import SideBarItem from "./SideBarItem.vue";

export default {
  components: {
    SideBarItem,
  },

  props: {
    popover: {
      Type: String,
    },
    link: {
      Type: String,
    },
  },
  data() {
    return {
      pageArray: [
        {
          popover: "Wie ben ik?",
          link: "description",
        },
      ],
    };
  },
};

</script>

<style scoped>
.container {
  display: flex;
}
</style>
