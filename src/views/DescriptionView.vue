<template>
  <div class="viewContainer">
    <ContentSideBar
      @selectItem="setActive"
      :sideList="itemList"
      :active="activeId"
    />
    <Description v-if="activeId === 1"></Description>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeId: 1,

      itemList: [
        {
          id: 1,
          icon: "fa-solid fa-user-secret",
          title: "Who Am i?",
        },
        {
          id: 2,
          icon: "fa-brands fa-twitter",
          title: "Socials?",
        },
      ],
    };
  },

  methods: {
    setActive(id) {
      this.activeId = id;
    },
  },
};
</script>
<style scoped>
.viewContainer {
  display: flex;
}
</style>