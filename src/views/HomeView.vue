import { faLongArrowDown } from '@fortawesome/free-solid-svg-icons';
<template>
  <div class="home">
    <div class="content">
      <div class="mainHeader">
        Hey there,
        <div class="big-and-bold">
          ik ben <span class="secColor">Sem</span><br />
          Software Dev
        </div>
        <div class="aboutMe">
          <p>
            Ik ben gespecialiseerd in het ontwikkelen van machine learning
            solutions, waarbij ik mijn oplossingen terug wil zien in de
            werkelijkheid en het leven van verschillende mensen eenvoudiger
            maak.
          </p>
        </div>
        <div class="skills">
          <h4 class="secColor">Skills</h4>
          <ul class="skillList">
            <li>
              <font-awesome-icon icon="fa-solid fa-database" />
              <span class="listDesc"> SQL </span>
            </li>
            <li>
              <font-awesome-icon icon="fa-brands fa-python" />
              <span class="listDesc"> Python </span>
            </li>
            <li>
              <font-awesome-icon icon="fa-brands fa-vuejs" />
              <span class="listDesc"> VueJs </span>
            </li>
          </ul>
        </div>
        <div class="scrollOrCLick">
          If you like what you see <br />
          <span class="secColor">Scroll Down</span>
          <RouterLink class="itemInner" :to="'/description'">
            <font-awesome-icon
              class="arrow"
              icon="fa-solid fa-arrow-down-long"
            />
          </RouterLink>
        </div>
        <div class="socials"></div>
      </div>
    </div>
    <div class="profileImage">
      <div class="background"></div>
      <img src="../assets/profileSquare.jpg" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  color: var(--vt-c-black);
  display: flex;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--vt-c-white-soft);

  .secColor {
    color: #24ed96;
    font-weight: 800;
  }

  .content {
    width: 50%;
    display: flex;
    margin-left: 10%;
    margin-top: 15%;
    .mainHeader {
      font-size: 22px;
      display: flex;
      flex-direction: column;
      line-height: 1;
      .big-and-bold {
        font-size: 50px;
        font-weight: 600;
      }
    }

    .aboutMe {
      margin-top: 2rem;
      line-height: 2;
      font-size: 14px;
      max-width: 75%;
    }

    .skills {
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      .skillList {
        padding: 0;
        margin-top: 1rem;
        list-style: none;
        display: flex;
        li {
          margin-right: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .listDesc {
            margin-top: 0.25rem;
            font-size: 14px;
          }
        }
      }
    }
    .scrollOrCLick {
      line-height: normal;
      font-weight: 600;
      margin-top: 3rem;
      font-size: 14px;
    }
  }

  .arrow {
    margin-left: 1rem;
    cursor: pointer;
    &:hover {
      color: var(--vt-c-secondary);
    }
  }
  .profileImage {
    .background {
      position: absolute;
      top: 0;
      left: 20%;
      width: 80%;
      height: 100%;
      background-color: var(--vt-c-secondary);
    }
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10%;
    img {
      border: var(--vt-c-white-soft) solid 20px;
      max-height: 70%;
      max-width: auto;
    }
  }
}
</style>