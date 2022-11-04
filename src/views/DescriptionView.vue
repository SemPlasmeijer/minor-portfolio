<template>
  <div class="viewContainer">
    <div class="title">Wie ben ik?</div>

    <ContentSideBar
      @selectItem="setActive"
      :sideList="itemList"
      :active="activeId"
    />
    <div class="content">
      <WhoAmI v-if="activeId == 1"></WhoAmI>
      <WhatCanI v-if="activeId == 2"></WhatCanI>
      <WhatDoI v-if="activeId == 3"></WhatDoI>
    </div>
  </div>
</template>
<script>
import WhoAmI from '../components/WhoAmI.vue';

export default {
    data() {
        return {
            activeId: 1,
            itemList: [
                {
                    id: 1,
                    title: "Wie ben ik?",
                },
                {
                    id: 2,
                    title: "Wat kan ik?",
                },
                {
                    id: 3,
                    title: "Wat wil ik leren?",
                },
            ],
        };
    },
    methods: {
        setActive(id) {
            this.activeId = id;
        },
    },
    components: { WhoAmI }
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