<template>
  <main>
    <section class="baseSection" ref="base">
      <section class="titleSection">
        <h1>Leerdoelen & Ontwikkeling</h1>
      </section>
      <section class="leerdoelSection">
        <header>
          <ul>
            <li>
              <a @click="activeId = 0" :class="{ active: activeId === 0 }">
                Persoonlijke Leerdoelen</a
              >
            </li>
            <li>
              <a @click="activeId = 1" :class="{ active: activeId === 1 }">
                Algemene Leerdoelen</a
              >
            </li>
            <li>
              <a @click="activeId = 2" :class="{ active: activeId === 2 }">
                Professionele Leerdoelen</a
              >
            </li>
            <li>
              <a @click="activeId = 3" :class="{ active: activeId === 3 }">
                Persoonlijke Ontwikkeling & Reflectie</a
              >
            </li>
          </ul>
        </header>
        <section>
          <PersoonlijkeLeerdoelen v-if="activeId === 0">
          </PersoonlijkeLeerdoelen>
          <AlgemeneLeerdoelen v-if="activeId === 1"> </AlgemeneLeerdoelen>
          <ProffesioneleLeerdoelen v-if="activeId === 2">
          </ProffesioneleLeerdoelen>
          <div class="leerdoelContainer" v-if="activeId === 3">
            <h1>Persoonlijke Reflectie</h1>
            <p>
              Als ik terugkijk op dit semester denk ik dat één ding echt
              uitsteekt, <br />
              de wereld van slimme steden is niet alleen maar hoe Big Data & AI.
              <br />
              De wereld van slimme steden is een wereld waarbij het menselijke
              aspect van de <br />
              terug wordt gebracht naar de inwoner. De wereld waar we niet meer
              steden ontwerpen om <br />
              in te wonen maar om in te leven. <br />
              <br />
              Persoonlijk heb ik voor een lange tijd van mijn hbo-tijd ontworpen
              om een probleem voor <br />
              bedrijven op te lossen, maar alleen binnen de lens van een IT'er.
              Deze minor heeft me <br />
              kennis laten maken met hoe iemand binen veiligheid een probleem
              aanpakt, hoe iemand binnen <br />
              gemeente raad een probleem ziet, en al deze lenzen bij elkaar
              komen bij het verbeteren van een stad <br />
              <br />
              Had ik deze minor nogmaals willen kiezen als ik 6 maanden terug
              kon in tijd, dat weet ik niet <br />
              ,maar ik wel hoe ik de minor opnieuw zou aanpakken. Ik zou vaker
              mijn gedachten delen met mijn <br />
              groepsgenoten en mijn eigen kennis meer willen proberen te
              verweven in het werkproces. <br />
              Verder zou ik meer tijd willen nemen voor ieder onderwerp dat ik
              tackel en niet alleen <br />
              het Surface gedeelte aan te willen pakken bij sommige onderwerpen.
              <br />
              <br />
              Over het algemeen kijk ik wel positief terug op de afgelopen 6
              maanden en denk ik dat <br />
              best heb gedaan om meerdere perspectieven te vergelijken met
              elkaar om tot een geheel antwoord te komen.
            </p>
          </div>
        </section>
      </section>
    </section>
  </main>
</template>
<script>
import PersoonlijkeLeerdoelen from "../components/PersoonlijkeLeerdoelen.vue";
import AlgemeneLeerdoelen from "../components/AlgemeneLeerdoelen.vue";
import ProffesioneleLeerdoelen from "../components/ProffesioneleLeerdoelen.vue";

export default {
  data() {
    return {
      activeId: 0,
    };
  },
  components: {
    PersoonlijkeLeerdoelen,
    AlgemeneLeerdoelen,
    ProffesioneleLeerdoelen,
  },
};
</script>
<style lang="scss" scoped>
.titleSection {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url("../assets/tim-mossholder-SZgVZPbQ7RE-unsplash.jpg");
  background-size: cover;
  background-position: center 0%;
  position: relative;
  overflow: hidden;
  transition: transform 500ms cubic-bezier(0.13, 0.53, 0.38, 0.97);
  color: var(--vt-c-white-soft);
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 480px) {
    h1 {
      font-family: "Major Mono Display", monospace;
      font-weight: 400;
      font-size: 30px;
    }
  }

  @media only screen and (min-width: 960px) {
    h1 {
      font-family: "Major Mono Display", monospace;
      font-weight: 400;
      font-size: 50px;
    }
  }

  @media only screen and (min-width: 1700px) {
    h1 {
      font-family: "Major Mono Display", monospace;
      font-weight: 400;
      font-size: 77px;
    }
  }
}
.leerdoelSection {
  height: 100vh;
  display: flex;

  header {
    height: 100%;

    padding-top: 6rem;
    min-width: 15vw;
    max-width: 15vw;
    background-color: var(--vt-c-fourth);

    ul {
      list-style: none;
      padding-right: 1rem;
      li {
        margin-bottom: 3rem;
        a {
          margin-top: 1rem;
          color: var(--vt-c-black-soft);
          cursor: pointer;
          user-select: none;
          font-weight: 400;
          text-decoration: none;
          border-bottom: 2px solid var(--vt-c-secondary);
          box-shadow: inset 0 -4px 0 var(--vt-c-secondary);
          color: inherit;
          transition: background 0.1s cubic-bezier(0.33, 0.66, 0.66, 1);

          @media only screen and (min-width: 480px) {
            font-size: 16px;
          }
          @media only screen and (min-width: 960px) {
            font-size: 18px;
          }
          @media only screen and (min-width: 1700px) {
            font-size: 25px;
          }
        }

        .active {
          border-bottom: 2px solid var(--vt-c-third);
          box-shadow: inset 0 -4px 0 var(--vt-c-third);
          color: inherit;
          transition: background 0.1s cubic-bezier(0.33, 0.66, 0.66, 1);
        }
        &:hover {
          a {
            background: var(--vt-c-secondary);
          }

          .active {
            background: var(--vt-c-third);
          }
        }
      }
    }
  }
}
</style>
