<template>
  <div class="leerdoelContainer">
    <h1>Persoonlijke Leerdoelen</h1>

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
        <div class="linkToContent" v-if="leerdoel.proof.length > 0">
          <span style="font-weight: bold">Bewijslast voor leerdoel</span>
          <ul>
            <li class="proof" :key="file" v-for="file in leerdoel.proof">
              <div v-if="file.type === 'powerBi'">
                <a target="_blank" :href="file.path">{{ file.name }}</a>
                <iframe
                  title="DataOpdracht"
                  class="powerBi"
                  :src="file.path"
                  frameborder="0"
                  allowFullScreen="true"
                ></iframe>
              </div>
              <a v-else target="_blank" :href="file.path">{{ file.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
import path from "path";
export default {
  data() {
    return {
      currentDrop: null,
      leerdoelen: [
        {
          id: 1,
          leerdoel: "Hoe kan de slimme stad gezondheid van jongere verbeteren?",
          reflecties: [
            "Voor dit leerdoel ben ik van plan een aantal verschillende leerdoelen op te zetten hieraan zal ik de week van 7 November te starten. Als ik veel verschillende databronnen kan vinden wil ik dit leerdoel mogelijk verbinden met de PowerBI leerdoel.",
            "Om dit leerdoel aan te tonen wilde ik twee dingen doen, hoe zou een slimme stad de gezondheid van jongeren kunnen verbeteren en hoe zou een kleine gemeente zoals mijn eigen gemeente Drimmelen dit kunnen aanpakken zonder een groot budget om verschillende sensoren en dergelijke te gebruiken. Ik kwam er al gauw achter hoe divers de problemen zijn van overgewicht en drugsgebruik onder jongeren tot mentale problemen zoals faalangst en slapeloosheid. Om voor oplossingen te zoeken heb ik eerst gekeken naar de oorzaak van de meeste gevallen, en vervolgens een technologisch antwoord op gezocht. Vervolgens heb ik naar mijn eigen gemeente gekeken, mensen van mijn gemeenteraad ondervraagd over hoe zij problemen onder jeugd tackelen en er gauw achter gekomen hoe de gemeente Drimmelen door zijn unieke omstandigheden een alternatieve vorm van dataverzameling heeft gedaan zonder hiervoor de meest geavanceerde technologieën te gebruiken. Als ik dit project nogmaals zou mogen aanpakken zou ik verder willen inkijken op hoe andere gemeentes in de diepte problemen onder de jeugd tackelen, en een mogelijk goedkopere of haalbare oplossingen vinden die zelfs de kleinere gemeentes kunnen gebruiken.",
          ],
          description:
            "Dit leerdoel zal voornamelijk focussen op een literatuuronderzoek gevolgd waarin eerst de vraag wil stellen in hoeverre de gezondheid achteruit is gegaan van jongere, welke wensen jongere zelf hebben, welke oplossingen er nu bestaan en hoe steden momenteel de jeugd aanmoedigt om meer te bewegen.",
          proof: [
            {
              name: "Gezondheid en Slimme Steden pdf",
              path: "https://github.com/SemPlasmeijer/minor-portfolio/blob/main/onderzoek-bestanden-etc/Leerdoelen/Tech%26Beweging/Movement.pdf",
            },
            {
              name: "Gezondheid en Slimme Steden pptx",
              path: "https://github.com/SemPlasmeijer/minor-portfolio/blob/main/onderzoek-bestanden-etc/Leerdoelen/Tech%26Beweging/Bereikbaarheid.pptx",
            },
          ],
          dropped: false,
        },
        {
          id: 2,
          leerdoel: "Hoe visualiseer je data in PowerBI?",
          reflecties: [
            "Tijdens de Barcelona trip zal ik Nederland blijven, ik ben van plan deze week het volledige PowerBI leerdoel te behalen. Hiervoor wil ik een certificaat behalen via datacamp en daarnaast een video opnemen voor studenten die volgend semester ook PowerBI willen gebruiken als data visualisatie platform.",
            "Voor dit leerdoel was ik begonnen met een certificaat te behalen van datacamp rondom het gebruik van PowerBI. Deze course vond ik zelf best lang voor de informatie die je krijgt, maar zorgde voor een goede basis waar ik later op kon bouwen. Als ik mijn eerste PowerBI opdracht vergelijk met het bestand dat ik heb gemaakt voor dit leerdoel is er visueel niet veel veranderd, maar de verbetering was duidelijk te zien in hoe snel en hoe dynamisch ik nu dashboarden in elkaar kon zetten. Als ik nu een nieuw dashboard zou willen creeren zal ik wel meer letten op visualisatie zelf, dit is deels onderbouwd met mijn nieuwe kennis voer UI UX, maar een gastles gegeven door Jugo over data visualisatie standaarden heeft mij een nieuwe diepte van kennis gegeven die ik zeker in de toekomst wou willen toepassen. ",
          ],
          description:
            "Startende met een derde data certificaat, wil ik een oude dataset gebruiken waarin ik al een aantal verschillende visualisaties heb gemaakt om deze te verbeteren en toe te passen in een nieuwe omgeving. Verder wil ik reflecteren op de voorgaande dataopdracht kijken wat ik nu anders moet/kan gaan doen om tot een beter resultaat te komen.",
          proof: [
            {
              name: "A quick guide to powerbi by Sem Plasmeijer",
              path: "https://youtu.be/ad-dnxfRTvc",
            },
            {
              name: "Eerste powerbi design",
              path: "https://app.powerbi.com/reportEmbed?reportId=f2422372-d1c7-4960-9605-2c7e0cb65dc8&autoAuth=true&ctid=c66b6765-b794-4a2b-84ed-845b341c086a",
              type: "powerBi",
            },
            {
              name: "Tweede powerbi design",
              path: "https://app.powerbi.com/reportEmbed?reportId=41296498-44c8-4f2d-be90-dc1f5c5f9fac&autoAuth=true&ctid=c66b6765-b794-4a2b-84ed-845b341c086a",
              type: "powerBi",
            },
          ],
          dropped: false,
        },
        {
          id: 3,
          leerdoel:
            "Hoe ontwikkel je UX/UI voor slechtziende en andere handicaps?",
          reflecties: [
            "Dit leerdoel wil ik als laatste oppakken van de drie, ik heb al een aantal verschillende boeken aangeraden gekregen een ervan is 'Inclusive Design for a Digital World'. Verder heb ik al een klein idee over de onderwerpen die ik wil behandelen. Om dit leerdoel te behalen wilde ik een podcast of blog schrijven over hoe Fontys zijn eigen websites/canvas zou kunnen verbeteren om allerlei verschillende studenten te kunnen accommoderen. Een ander leuk idee was om mijn eigen portfolio juist in de tegenovergestelde manier in te richten met een klik om de knop.",
            "Om dit leerdoel aan te tonen heb ik een onderzoek gedaan naar de geschiedenis van webdesign, oplossingen voor verschillende handicaps en tot slot heb ik deze kennis toegepast om een aantal pagina’s binnen canvas te verbeteren. Als ik hierop terugkijk ben ik tevreden met wat ik heb geleerd, en heb ik ook deels met deze gedachten mijn eigen portfolio verbeterd, Als iets klikbaar is dan heeft het een duidelijkere animatie dan voorheen, ik heb de kleuren veranderd om minder vervelend te zijn op het oog, zonder al te veel contrast te verliezen. Alle links en teksten hebben nu een eigen functie en worden niet meerdere keren door elkaar heen gebruikt. Als ik meer tijd had gehad dan had ik waarschijnlijk meerdere van mijn oude projecten willen vergelijken en mogelijk meer van Canvas willen verbeteren, maar overall heb ik nu een betere basis waar ik de komende jaren op kan bouwen en ontwerpen.",
          ],
          description:
            "Dit onderwerp heb ik grotendeels overgeslagen in vorige semesters en dit heeft me in de weg gezeten bij mij laatste stage, waarin ik constante herzieningen moest maken in het ontwerp om aan alle doeleinde te voldoen. Startende met een literatuurstudie in de verschillende tools die momenteel in gebruik zijn en tools die in de toekomst mogelijk nog ontwikkeld gaan worden, welk effect typografie heeft op UX/UI, en de verschillen tussen Nederland en Internationaal. Hierop wil een onderzoek/test baseren op mijn eigen portfolio/canvas om te zien of deze voldoen aan de eisen/tools die in uit de literatuurstudie voort zijn gekomen.",
          proof: [
            {
              name: "Blog over UIUX",
              path: "https://github.com/SemPlasmeijer/minor-portfolio/blob/main/onderzoek-bestanden-etc/Leerdoelen/UIUX/Blog.pdf",
            },
            {
              name: "Artikel met voorbeelden van oogziektes",
              path: "https://oogfonds.nl/onze-ogen/feiten-en-cijfers/",
            },
            {
              name: "Video over hoe het meest gebruikte UI element slecht kan zijn",
              path: "https://www.youtube.com/watch?v=hcYAHix-riY",
            },
          ],
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
