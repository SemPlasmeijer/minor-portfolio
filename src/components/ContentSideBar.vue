<template>
  <div class="sideWrapper">
    <div :key="item.id" v-for="(item, index) in sideList">
      <span
        :class="this.active === item.id ? 'activeItem' : 'item'"
        v-tooltip="item.title"
        @click="clickSubItem(item.id)"
      >
        <font-awesome-icon class="circle fa-fw" :icon="item.icon" />
      </span>
      <div v-if="lastEntry !== index" class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    lastEntry() {
      return this.sideList.length - 1;
    },
  },

  props: {
    activeId: {
      Type: Number,
      Required: false,
      default: 1,
    },

    sideList: {
      Type: Array,
      Required: true,
    },
  },

  data() {
    return {
      active: this.activeId,
    };
  },

  methods: {
    clickSubItem(id) {
      this.active = id;
      this.$emit("selectItem", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.sideWrapper {
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  .circle {
    border: 1px solid lightgray;
    color: gray;
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 1.3rem;
    height: var(--fa-fw-width, 1.25em);
    cursor: pointer;
  }
}

.activeItem {
  display: flex;
  .circle {
    border: 1px solid lightblue;
    color: lightskyblue;
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 1.3rem;
    height: var(--fa-fw-width, 1.25em);
    cursor: pointer;
  }
}
.line {
  height: 1.25rem;
  margin-left: var(--fa-fw-width, 1.35em);
  margin-bottom: 0.25rem;
  margin-top: 0.25rem;
  border-left: 2px solid lightgray;
}
</style>
