<template>
  <div class="leerdoelContainer">
    <div
      class="leerdoelItem"
      :key="leerdoel.leerdoel"
      v-for="leerdoel in leerdoelen"
    >
      <h2>
        {{ leerdoel.leerdoel }}
        <font-awesome-icon
          @click="dropLeerdoel(leerdoel.id)"
          class="dropper fa-fw"
          :icon="setChevron(leerdoel.id)"
        />
      </h2>
      <p class="description">
        {{ leerdoel.description }}
      </p>
      <div class="leerdoelContent" v-show="leerdoel.dropped">
        <div
          class="leerdoelParagraph"
          :key="reflectie"
          v-for="(reflectie, key) in leerdoel.reflecties"
        >
          <span style="font-weight: bold">Reflectie: {{ key + 1 }}</span>

          <p class="reflectie">{{ reflectie }}</p>
        </div>
        <div class="linkToContent">
          <span style="font-weight: bold">Bewijslast voor leerdoel</span>
          <ul>
            <li :key="file" v-for="file in leerdoel.proof">
              <a target="_blank" :href="file.path">{{ file.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDrop: null,
      leerdoelen: [
        {
          id: 1,
          leerdoel: "Hoe kan de slimme stad gezondheid van jongere verbeteren?",
          reflecties: [
            "Voor dit leerdoel ben ik van plan een aantal verschillende leerdoelen op te zetten hieraan zal ik de week van 7 November te starten. Als ik veel verschillende data bronnen kan vinden wil ik dit leerdoel mogelijk verbinden met de PowerBI leerdoel.",
          ],
          description:
            "Dit leerdoel zal voornamelijk focussen op een literatuuronderzoek gevolgd waarin eerst de vraag wil stellen in hoeverre de gezondheid achteruit is gegaan van jongere, welke wensen jongere zelf hebben, welke oplossingen er nu bestaan en hoe steden momenteel de jeugd aanmoedigt om meer te bewegen.",
          proof: [""],
          dropped: false,
        },
        {
          id: 2,
          leerdoel: "Hoe visualiseer je data in PowerBI?",
          reflecties: [
            "Tijdens de Barcelona trip zal ik Nederland blijven, ik ben van plan deze week het volledige PowerBi leerdoel te behalen. Hiervoor wil ik een certificaat behalen via datacamp en daarnaast een video opnemen voor studenten die volgend sememster ook powerbi willen gebruiken als data visualisatie platform.",
          ],
          description:
            "Startende met een derde data certificaat, wil ik een oude dataset gebruiken waarin ik al een aantal verschillende visualisaties heb gemaakt om deze te verbeteren en toe te passen in een nieuwe omgeving. Verder wil ik reflecteren op de voorgaande dataopdracht kijken wat ik nu anders moet/kan gaan doen om tot een beter resultaat te komen.",
          proof: [""],
          dropped: false,
        },
        {
          id: 3,
          leerdoel:
            "Hoe ontwikkel je UX/UI voor slechtziende en andere handicaps?",
          reflecties: [
            "Dit leerdoel wil ik als laatste oppakken van de drie, ik heb al een aantal verschillende boeken aangeraden gekregen een ervan is 'Inclusive Design for a Digital World'. Verder heb ik al een klein idee over de onderwerpen die ik wil behandelen. Om dit leerdoel te behalen wilde ik een podcast of blog schrijven over hoe Fontys zijn eigen websites/canvas zou kunnen verbeteren om allerlei verschillende studenten te kunnen accomoderen. Een ander leuk idee was om mijn eigen portfolio juist in de tegenovergestelde manier in te richten met een klik om de knop.",
          ],
          description:
            "Dit onderwerp heb ik grotendeels overgeslagen in vorige semesters en dit heeft me in de weg gezeten bij mij laatste stage, waarin ik constante herzieningen moest maken in het ontwerp om aan alle doeleinde te voldoen. Startende met een literatuurstudie in de verschillende tools die momenteel in gebruik zijn en tools die in de toekomst mogelijk nog ontwikkeld gaan worden, welk effect typografie heeft op UX/UI, en de verschillen tussen Nederland en Internationaal. Hierop wil een onderzoek/test baseren op mijn eigen portfolio/canvas om te zien of deze voldoen aan de eisen/tools die in uit de literatuurstudie voort zijn gekomen.",
          proof: [""],
          dropped: false,
        },
      ],
    };
  },
  methods: {
    setChevron(id) {
      if (this.currentDrop == id) {
        return "fa-solid fa-chevron-circle-up";
      }
      return "fa-solid fa-chevron-circle-down";
    },
    dropLeerdoel(id) {
      this.leerdoelen.forEach((leerdoel) => {
        leerdoel.dropped = false;
      });
      if (this.currentDrop !== id) {
        this.currentDrop = id;
        this.leerdoelen.find((leerdoel) => leerdoel.id == id).dropped = true;
      } else {
        this.currentDrop = null;
      }
    },
  },
};
</script>
