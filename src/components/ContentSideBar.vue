<template>
  <div class="sideWrapper">
    <div :key="item.id" v-for="(item, index) in sideList">
      <span
        :class="this.active === item.id ? 'activeItem' : 'item'"
        @click="clickSubItem(item.id)"
      >
        {{ item.title }}
        <span class="devider" v-if="lastEntry !== index"> | </span>
      </span>
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
  width: 100%;
  justify-content: center;
}

.item {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  cursor: pointer;
  margin-left: 1rem;
  .devider {
    margin-left: 1rem;
  }
}

.activeItem {
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
  cursor: pointer;
  font-weight: 600;
  margin-left: 1rem;

  .devider {
    margin-left: 1rem;
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