<template>
  <div class="container">
    <SideBarItem
      :key="page.link"
      v-for="page in pageArray"
      :popover="page.popover"
      :link="page.link"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageArray: [
        {
          popover: "Wie ben ik?",
          link: "description",
        },
        {
          popover: "Certificates",
          link: "certificates",
        },
        {
          popover: "Wie ben ik?",
          link: "description",
        },
        {
          popover: "Certificates",
          link: "certificates",
        },
        {
          popover: "Wie ben ik?",
          link: "description",
        },
        {
          popover: "Certificates",
          link: "certificates",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  min-width: 250px;
  margin-left: 1.5rem;
}
</style>
