import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';
<template>
  <main>
    <section class="baseSection">
      <section class="titleSection">
        <h1>Smart City Minor Portfolio</h1>
        <h1>Sem Plasmeijer</h1>
      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  .titleSection {
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(rgba(0, 0, 0, 0.727), rgba(0, 0, 0, 0.5)),
      url("../assets/pedro-lastra-Nyvq2juw4_o-unsplash.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    transition: transform 500ms cubic-bezier(0.13, 0.53, 0.38, 0.97);
    color: var(--vt-c-white-soft);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media only screen and (min-width: 480px) {
      h1 {
        color: var(--vt-c-secondary);
        font-family: "Major Mono Display", monospace;
        font-weight: 400;
        font-size: 30px;
      }
    }

    @media only screen and (min-width: 960px) {
      h1 {
        color: var(--vt-c-secondary);
        font-family: "Major Mono Display", monospace;
        font-weight: 400;
        font-size: 50px;
      }
    }

    @media only screen and (min-width: 1700px) {
      h1 {
        color: var(--vt-c-secondary);
        font-family: "Major Mono Display", monospace;
        font-weight: 400;
        font-size: 77px;
      }
    }
  }
}
</style>
