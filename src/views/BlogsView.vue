<template>
  <main>
    <section class="baseSection">
      <section class="titleSection">
        <h1>Thema's</h1>
      </section>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.titleSection {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url("../assets/screenshotThema.png");
  background-size: cover;
  background-position: center 0%;
  position: relative;
  overflow: hidden;
  transition: transform 500ms cubic-bezier(0.13, 0.53, 0.38, 0.97);
  color: var(--vt-c-white-soft);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
    font-size: 77px;
  }
}
</style>
