<template>
  <header>
    <div class="homeBtn">
      <RouterLink class="itemInner" :to="'/'">Home</RouterLink>
    </div>
    <ul>
      <li>
        <RouterLink class="itemInner" :to="'/description' + link">Wie ben Ik?</RouterLink>
      </li>
      <li>blog</li>
      <li>certificates</li>
      <li>leerdoelen</li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
header {
  display: flex;
  padding: 1rem 10rem 1rem 10rem;
  background-color: var(--vt-c-secondary);
  height: 100%;
  font-weight: 900;

  .homeBtn {
    a {
      font-weight: 600;
    }
    width: 50%;
  }

  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    li {
      font-weight: 600;
      a {
        font-weight: 600;
      }
    }
  }
}
</style>