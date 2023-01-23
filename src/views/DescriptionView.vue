<template>
  <main>
    <section class="baseSection" @scroll="trackImages" ref="base">
      <section class="titleSection">
        <h1 class="title">
          Ik ben Sem Plasmeijer student & developer met een passie voor coole
          oplossingen vinden
        </h1>
      </section>
      <section class="pictureSection">
        <img src="../assets/profile.jpg" />
        <img src="../assets/aurora-borealis-NUdqVJQH8J0-unsplash.jpg" />
        <img src="../assets/raychan-gLHIwk9enQM-unsplash.jpg" />
      </section>
      <section class="whoSection">
        <button class="backbtn btn" @click="descreaseId" type="button">
          <font-awesome-icon class="icon" icon="fa-solid fa-chevron-left" />
        </button>
        <div>
          <h1 id="WhoWhatWhen">{{ titleList[activeId] }}</h1>
          <p id="Paragraph">
            {{ itemList[activeId] }}
          </p>
        </div>
        <button class="nextbtn btn" @click="increaseId" type="button">
          <font-awesome-icon class="icon" icon="fa-solid fa-chevron-right" />
        </button>
      </section>
      <section class="pictureSection2">
        <img src="../assets/thisisengineering-raeng-zdBOU0faYK4-unsplash.jpg" />
        <img src="../assets/mathew-schwartz-7OHXqcsyVYU-unsplash.jpg" />
        <img src="../assets/alex-perez-cX9cWyzsMbY-unsplash.jpg" />
      </section>
    </section>
  </main>
</template>
<script>
import WhoAmI from "../components/WhoAmI.vue";

export default {
  data() {
    return {
      activeId: 0,
      titleList: ["Wie ben ik", "Wat kan ik", "Wat wil ik"],

      itemList: [
        "Naar een jaar bouwkunde te hebben gestudeerd met de gedachten om mijn werk in werkelijkheid terug te willen zien kwam ik erachter dat mijn passie niet in het vak lag. Met de gedachten dat ik nog steeds dingen wilden ontwikkelen en problemen wilden oplossen was ik 3 jaar geleden overgestapt naar HBO ICT en sindsdien ben ik niet veranderd. Mijn vrije tijd besteed ik voornamelijk aan sport, maar daarbuiten heb ik interesse in architectuur, UX UI, game development en tekenen en hoe mensen in deze vakken over problemen zijn heen gekomen.",
        "Een groot deel van wat ik kan ligt in de technische vakken. Software development zowel front- als backend ligt op een niveau waar ik producten digitaal kan ontwikkelen tot een HBO waardig product. Daarnaast ben gespecialiseerd in AI en data analyse waarbij eenvoudige machine learning algoritmes kan opstellen in een simpele omgeving.",
        "Ik weten hoe ik steden doormiddelen van data gezondere of een positievere leefstijlen kan motiveren. Met als gedachten een product te kunnen leveren die mijn huidige kennis die ik heb over software ontwikkeling en AI met elkaar te kunnen combineren tot een MVP. Ik heb momenteel wat kennis over de beide vakken maar geen idee hoe deze met elkaar gecombineerd kunnen worden. Andere onderwerpen die mij interesse opdoen is de aanleg van nieuwe infrastructuur wil het zijn de opkomst van leenscooters, auto’s of de aanleg van civiele technieken. En hoe gemeenschappen beter gebruik kunnen maken van elkaar, wil het zijn lenen van producten of meer lokaal produceren.",
      ],
    };
  },
  methods: {
    increaseId() {
      document.querySelector("#Paragraph").style.opacity = 0;
      document.querySelector("#WhoWhatWhen").style.opacity = 0;

      setTimeout(() => {
        if (this.activeId === 2) {
          this.activeId = 0;
        } else {
          this.activeId++;
        }
      }, 300);

      setTimeout(() => {
        document.querySelector("#Paragraph").style.opacity = 1;
        document.querySelector("#WhoWhatWhen").style.opacity = 1;
      }, 300);
    },
    descreaseId() {
      document.querySelector("#Paragraph").style.opacity = 0;
      document.querySelector("#WhoWhatWhen").style.opacity = 0;

      setTimeout(() => {
        if (this.activeId === 0) {
          this.activeId = 2;
        } else {
          this.activeId--;
        }
      }, 300);
      setTimeout(() => {
        document.querySelector("#Paragraph").style.opacity = 1;
        document.querySelector("#WhoWhatWhen").style.opacity = 1;
      }, 300);
    },
    trackImages(event) {
      console.log(this.$refs.base.scrollTop);

      document.querySelector(
        ".pictureSection"
      ).style.transform = `translateX(-${this.$refs.base.scrollTop / 10}px)`;
      document.querySelector(
        ".pictureSection2"
      ).style.transform = `translateX(${this.$refs.base.scrollTop / 10}px)`;
    },
  },
  components: { WhoAmI },
};
</script>
<style lang="scss" scoped>
.titleSection {
  padding-top: 6rem;

  margin-left: 2rem;
  width: 60vw;
  padding-right: 1rem;
  margin-bottom: 6rem;
  @media only screen and (min-width: 480px) {
    h1 {
      font-weight: 400;
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 960px) {
    h1 {
      font-weight: 400;
      font-size: 50px;
    }
  }

  @media only screen and (min-width: 1500px) {
    h1 {
      font-weight: 400;
      font-size: 77px;
    }
  }
}

.pictureSection {
  margin-left: 2rem;
  margin-bottom: 2rem;
  display: flex;
  img {
    width: 38vw;
    aspect-ratio: 1/1.1;
    object-fit: cover;
    margin-right: 1.5rem;
  }
}

.pictureSection2 {
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;

  display: flex;
  flex-direction: row-reverse;
  img {
    width: 38vw;
    aspect-ratio: 1/1.1;
    object-fit: cover;
    margin-right: 1.5rem;
  }
}

.whoSection {
  background-color: var(--vt-c-fourth);

  p {
    margin-left: 1rem;
    margin-right: 1rem;
    opacity: 1;
    transition: opacity 0.3s;
  }
  @media only screen and (min-width: 480px) {
    h1 {
      margin-bottom: 1rem;
      font-size: 25px;
      font-weight: bold;
      opacity: 1;
      transition: opacity 0.3s;
    }
    padding: 0 5rem;
    display: flex;
    height: 100vh;
    text-align: center;
    font-size: 16px;
    align-items: center;
  }

  @media only screen and (min-width: 960px) {
    h1 {
      margin-bottom: 1rem;
      font-size: 35px;
      font-weight: bold;
      opacity: 1;
      transition: opacity 0.3s;
    }
    padding: 0 10rem;
    display: flex;
    height: 100vh;
    text-align: center;
    font-size: 20px;
    align-items: center;
  }

  @media only screen and (min-width: 1500px) {
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
  }

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
</style>
