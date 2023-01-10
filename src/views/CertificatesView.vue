<template>
  <main>
    <section class="baseSection">
      <section class="certSection">
        <div class="content">
          <div class="linkToContent">
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/SemPlasmeijer/minor-portfolio/blob/main/src/assets/certificateDataAnalysis.pdf"
                  >Certificaat DataAnalysis</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/SemPlasmeijer/minor-portfolio/blob/main/src/assets/certificateIntroduction.pdf"
                  >Certificaat Introduction to SpreadSheets</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/SemPlasmeijer/minor-portfolio/blob/main/Certs/certificateIntroPowerBi.pdf"
                  >Certificaat Introduction to PowerBI</a
                >
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </main>
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
.certSection {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url("../assets/lewis-keegan-XQaqV5qYcXg-unsplash.jpg");
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

  .content {
    padding: 0.5rem 1rem 0.5rem 1.5rem;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 50px;
    .linkToContent {
      margin-top: 1rem;
      ul {
        list-style: none;
        li {
          margin-bottom: 1rem;
          a {
            text-decoration: none;
            border-bottom: 2px solid var(--vt-c-secondary);
            box-shadow: inset 0 -4px 0 var(--vt-c-secondary);
            color: inherit;
            transition: background 0.1s cubic-bezier(0.33, 0.66, 0.66, 1);
            &:hover {
              background: var(--vt-c-secondary);
            }
          }
        }
      }
    }
  }
}
</style>
