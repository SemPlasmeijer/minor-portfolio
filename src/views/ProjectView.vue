<template>
  <main>
    <section class="baseSection" @scroll="trackImages" ref="base">
      <section class="startSection">
        <h1>Edge Datacenters</h1>
      </section>
      <section class="secondSection">
        <button class="backbtn btn" @click="descreaseId" type="button">
          <font-awesome-icon class="icon" icon="fa-solid fa-chevron-left" />
        </button>
        <div>
          <h1 id="whatwhywhere">{{ titleList[activeId] }}</h1>
          <p id="Paragraph">
            {{ itemList[activeId] }}
          </p>
        </div>
        <button class="nextbtn btn" @click="increaseId" type="button">
          <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />
        </button>
      </section>
      <section class="pictureSection">
        <img src="../assets/donny-jiang-42gFAgdIUC8-unsplash.jpg" />
        <img src="../assets/jakub-pabis-V5JgNv2u0JQ-unsplash.jpg" />
        <img src="../assets/jay-mullings-iFPF95xh9WQ-unsplash.jpg" />
      </section>
      <section class="referenceSection">
        <div class="linkToContent">
          <h1>Voor meer informatie kijk naar de volgende links:</h1>
          <div :key="blog.blogId" v-for="blog in blogList">
            <ul>
              <li :key="file.name" v-for="file in blog.files">
                <a target="_blank" :href="file.path">{{ file.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="reflectieSection">
        <h1>Reflectie</h1>
        <p>
          Ik kijk positief terug op dit project, doordat het timeframe redelijk
          klein was om een concreet onderzoek, heb ik zelf een aantal vragen aan
          de zijkant moeten laten liggen, Maar wat er nu staat is mijn ogen goed
          onderbouwd en geeft de toegankelijkheid om een vervolgonderzoek te
          doen voor de Gemeente Rotterdam. De samenwerking binnen het project
          was in het begin een beetje stroef, ik denk dat dit voornamelijk kwam
          doordat we allemaal een andere achtergrond hebben en dus een andere
          manier om een probleem te tackelen. Later in het project konden we
          door strakker regels neer te zetten en een beter framework allemaal
          ons eigen onderdeel verantwoorden en uitleggen aan elkaar. Persoonlijk
          heb ik een nieuwe vorm van dataopslag en verwerking geleerd waarvan ik
          eerst geen idee had en heb ik mijn kennis verbreed over hoe belangrijk
          de 4g naar 5g stap was voor mobiele apparaten. Als ik dit nog een keer
          zou aanpakken, wil ik mijn best doen om meer het team in het
          technologische aspect erbij te pakken en meer tijd ervoor in te
          plannen. Misschien dat het overbodig zou zijn maar voor een vervolg
          onderzoek kan er veel dieper in het hoe edge netwerken communiceren
          met apparaten als wat er nu beschreven staat in het verslag.
        </p>
      </section>
    </section>
  </main>
</template>
<script>
import { inject } from "vue";

export default {
  data() {
    return {
      activeId: 0,
      titleList: ["Wat", "Waarom", "Waneer"],

      itemList: [
        "Edge datacenters zijn kleinere versies van de alom bekende mega datacenters die op meerdere plekken in Nederland staan en beheerd worden. ",
        "In een wereld waar steeds meer technologieën gebruik maken van verschillende netwerken en daarbij steeds meer data creëren en verbruiken kunnen egde datacenters een schaalbare oplossingen zijn die zowel latency als bandwidth kunnen verbeteren.",
        "De verwachting is dat in 2023 meer dan 6.16 miljoen verschillende mobiele apparaten in Rotterdam alleen zullen zijn, in 10 jaar moet een groot deel van het straat straatmeubilair worden ingezet om hierbij te helpen, Edge datacenters kunnen een tussensprong zijn en in toekomst mogelijk onmisbaar.",
      ],

      blogList: [
        {
          blogId: 1,
          dropped: false,
          title: "",
          description: "",
          paragraphs: [
            {
              paragraphId: 1,
              title: "",
              content: "",
            },
            {
              paragraphId: 2,
              title: "",
              content: "",
            },
          ],
          files: [
            {
              name: "Onderzoeksrapport edge datacenters Rotterdam",
              path:
                inject("githubRef") +
                "/EdgeDatacenterRotterdam/EdgeDatacenterOnderzoeksRapport.pdf",
            },
            {
              name: "Onderzoeksrapport edge datacenters Rotterdam powerpoint",
              path:
                inject("githubRef") +
                "/EdgeDatacenterRotterdam/EdgeDataCenter.pptx",
            },
          ],
        },
      ],
    };
  },
  methods: {
    increaseId() {
      document.querySelector("#Paragraph").style.opacity = 0;
      document.querySelector("#whatwhywhere").style.opacity = 0;

      setTimeout(() => {
        if (this.activeId === 2) {
          this.activeId = 0;
        } else {
          this.activeId++;
        }
      }, 300);

      setTimeout(() => {
        document.querySelector("#Paragraph").style.opacity = 1;
        document.querySelector("#whatwhywhere").style.opacity = 1;
      }, 300);
    },
    descreaseId() {
      document.querySelector("#Paragraph").style.opacity = 0;
      document.querySelector("#whatwhywhere").style.opacity = 0;

      setTimeout(() => {
        if (this.activeId === 0) {
          this.activeId = 2;
        } else {
          this.activeId--;
        }
      }, 300);
      setTimeout(() => {
        document.querySelector("#Paragraph").style.opacity = 1;
        document.querySelector("#whatwhywhere").style.opacity = 1;
      }, 300);
    },
    trackImages(event) {
      document.querySelector(
        ".pictureSection"
      ).style.transform = `translateX(-${this.$refs.base.scrollTop / 10}px)`;
    },
  },
};
</script>
<style lang="scss" scoped>
.startSection {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/sergey-raikin-ZOOt4tQXe9g-unsplash.jpg");
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

.secondSection {
  height: 100vh;
  background-color: var(--vt-c-fourth);
  p {
    margin-left: 1rem;
    margin-right: 1rem;
    opacity: 1;
    transition: opacity 0.3s;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 40px;
    font-weight: bold;
    opacity: 1;
    transition: opacity 0.3s;
  }
  padding: 0 20rem;
  display: flex;
  height: 100vh;
  text-align: center;
  font-size: 35px;
  align-items: center;

  .btn {
    padding: 1rem;
    height: 3rem;
    width: 3rem;
    border: var(--vt-c-gray-mute) 1px solid;
    transform: scale(0.9);
    border-radius: 5rem;
    cursor: pointer;
    background: var(--vt-c-fourth);
    transition: transform, background-color;
    transition-timing-function: ease;
    transition-duration: 400ms;
    display: flex;
    align-items: center;
    color: var(--vt-c-gray-mute);
    justify-content: center;
    transition: 200ms ease;

    &:hover {
      color: black;
      border: black 2px solid;
      transform: scale(1);
    }
    .icon {
      font-size: 30px;
    }
  }
}
.pictureSection {
  margin-left: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  display: flex;
  img {
    width: 38vw;
    aspect-ratio: 1/1.1;
    object-fit: cover;
    margin-right: 1.5rem;
  }
}

.referenceSection {
  padding-top: 10rem;
  display: flex;
  height: 100vh;
  width: 100vw;
  font-size: 35px;
  justify-content: center;
  background-color: var(--vt-c-fourth);
}

.reflectieSection {
  background-color: var(--vt-c-fourth);
  height: 100vh;
  p {
    margin-left: 1rem;
    margin-right: 1rem;
    opacity: 1;
    font-size: 25px;
    transition: opacity 0.3s;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 40px;
    font-weight: bold;
    opacity: 1;
    transition: opacity 0.3s;
  }
  margin: 0rem 20rem;
  padding: 10rem 15rem;
  height: 100vh;
  text-align: center;
  font-size: 35px;
}
</style>
