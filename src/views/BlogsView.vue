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
    </div>
  </div>
</template>
<script>
import BinnenStadBlogs from '../components/BinnenStadBlogs.vue';
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
                    id: 3,
                    title: "Lean",
                },
                {
                    id: 4,
                    title: "Communicatie",
                },
                {
                    id: 5,
                    title: "Lean",
                },
                {
                    id: 6,
                    title: "Mensen maken de Shift",
                },
                {
                    id: 7,
                    title: "Scenario Planning",
                },
            ],
        };
    },
    methods: {
        setActive(id) {
            this.activeId = id;
        },
    },
    components: { BinnenStadBlogs }
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
