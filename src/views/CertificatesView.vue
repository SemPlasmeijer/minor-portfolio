<template>
  <div class="viewContainer">
    <div class="title">Certificates</div>
    <ContentSideBar
      @selectItem="setActive"
      :sideList="itemList"
      :active="activeId"
    />
    <Certs :certList="itemList"> </Certs>
    <div class="content">
      <Cert1 v-if="activeId === 1"></Cert1>
      <Cert2 v-if="activeId === 2"></Cert2>
      <Cert3 v-if="activeId === 3"></Cert3>
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
          title: "Certificaat 1",
        },
        {
          id: 2,
          title: "Certificaat 2",
        },
        {
          id: 3,
          title: "Certificaat 3",
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
<style scoped lang="scss">
.title {
  border-top: 6px double var(--vt-c-black-soft);
  border-bottom: 6px double var(--vt-c-black-soft);
  font-family: "Major Mono Display", monospace;
  font-weight: 400;
  font-size: 50px;
  text-align: center;
  width: 100%;
}
.viewContainer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
}
.content {
  padding: 0.5rem 1rem 0.5rem 1.5rem;
  width: 100%;
  color: black;
  display: flex;
  justify-content: center;
}
</style>
