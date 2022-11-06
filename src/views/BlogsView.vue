<template>
  <div class="viewContainer">
    <div class="title">Blogs</div>

    <ContentSideBar
      @selectItem="setActive"
      :sideList="itemList"
      :active="activeId"
    />
    <div class="content">
      <BinnenStadBlogs v-if="activeId === 1"></BinnenStadBlogs>
      <CityMarketingBlogs v-if="activeId === 2"></CityMarketingBlogs>
      <CommunicatieBlogs v-if="activeId === 4"></CommunicatieBlogs>
      <ShiftBlogs v-if="activeId === 5"></ShiftBlogs>
      <SPBlogs v-if="activeId === 6"></SPBlogs>
      <OverigeBlogs v-if="activeId === 7"></OverigeBlogs>
    </div>
  </div>
</template>
<script>
import BinnenStadBlogs from "../components/BinnenStadBlogs.vue";
import CityMarketingBlogs from "../components/CityMarketingBlogs.vue";
export default {
  data() {
    return {
      activeId: 1,
      itemList: [
        {
          id: 1,
          title: "Binnenstad",
        },
        {
          id: 2,
          title: "City Marketing",
        },
        {
          id: 4,
          title: "Communicatie",
        },
        {
          id: 5,
          title: "Mensen maken de Shift",
        },
        {
          id: 6,
          title: "Scenario Planning",
        },
        {
          id: 7,
          title: "Overige",
        },
      ],
    };
  },
  methods: {
    setActive(id) {
      this.activeId = id;
    },
  },
  components: { BinnenStadBlogs, CityMarketingBlogs },
};
</script>
<style scoped>
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
  color: black;
}
</style>
