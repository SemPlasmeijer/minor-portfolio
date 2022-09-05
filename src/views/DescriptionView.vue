<template>
  <div class="viewContainer">
    <ContentSideBar
      @selectItem="setActive"
      :sideList="itemList"
      :active="activeId"
    />
    <div class="content">
      <Description v-if="activeId == 1"></Description>
      <WhatCanI v-if="activeId == 2"></WhatCanI>
      <WhatDoI v-if="activeId == 3"></WhatDoI>
    </div>
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
          title: "Who Am I?",
        },
        {
          id: 2,
          icon: "fa-brands fa-twitter",
          title: "What can I do?",
        },
        {
          id: 3,
          icon: "fa-brands fa-twitter",
          title: "What do I want to learn?",
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
.content {
  padding: 0.5rem 1.0rem 0.5rem 1.5rem;
  color: black;
}
</style>