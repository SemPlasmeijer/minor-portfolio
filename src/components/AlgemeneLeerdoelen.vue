<template>
  <div class="leerdoelContainer">
    <h1>Algemene Leerdoelen</h1>
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
          <span style="font-weight: bold">reflecties: {{ key + 1 }}</span>

          <p class="reflectie">{{ reflectie }}</p>
        </div>
        <div class="linkToContent" v-if="leerdoel.proof.length > 0">
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
import { inject } from "vue";
export default {
  data() {
    return {
      currentDrop: null,
      leerdoelen: [
        {
          id: 0,
          leerdoel: "Data verzamelen",
          reflecties: [
            "Dit onderwerp ligt dichtbij voorgaande semesters. Data verzamelen kan op een spectrum geplaatst worden met op de x-as van automatisch naar persoonlijk, en de op y-as van vrijwillig of onvrijwillig. Simpelweg automatisch onvrijwillig is de meest voorkomende vorm met sensoren, camera's of pin informatie die opgenomen wordt. Automatisch vrijwilig komt niet vaak voor maar ticket checkins is er een voorbeeld van. Vrijwilig persoonlijk komt het meest voor in de vorm van enquettes waarbij mensen op straat vragen stellen. en tot slot onvrijwillig persoonlijk is simpelweg observatie in of participatie onderzoeken.",
          ],
          description:
            "De student kan (innovatieve) mogelijkheden om data te verzamelen benoemen en toepassen.",
          proof: [
            {
              name: "Artikel: data collection",
              path: "https://www.techtarget.com/searchcio/definition/data-collection",
            },
          ],
          dropped: false,
        },
        {
          id: 1,
          leerdoel: "Dataverzameling: Ethiek en Privacy.",
          reflecties: [
            "Zover ik weet zijn de grootste problemen over de ethics van data verdeeld over twee gebieden. Wie is de eigennaar en Wie mag het zien, eigennaren van data zou realistisch moeten liggen bij de klant/persoon zelf, maar het bedrijf moet de opslag waarborgen en het datacenter moet die data fysiek veilighouden. Een ander vraag ligt rondom AI, Als het bedrijf en de software ontwikkelaar niet bij de data mogen komen of inzien. Waarom mag een AI systeem deze data wel inzien, een goed voorbeeld hiervan is een simpel ML algoritme kan op basis van 3 data punten aanwijzen wie een persoon is een database.",
          ],
          description:
            "De student kent de uitdagingen van dataverzameling in relatie tot slimme steden op het vlak van ethiek en privacy.",
          proof: [
            {
              name: "Artikel: Is Artificial Intelligence a Threat to Privacy",
              path: "https://thinkml.ai/is-artificial-intelligence-a-threat-to-privacy/",
            },
            {
              name: "Artikel: Who should own data?",
              path: "https://thinkml.ai/is-artificial-intelligence-a-threat-to-privacy/",
            },
          ],
          dropped: false,
        },
        {
          id: 2,
          leerdoel: "Data management",
          reflecties: [
            "Vergelijkbaar met het vorige leerdoel, tijdens dit semester tijdens de dataopdracht werd ik geplaatst in de opslag en opschoning van de data in powerbi. Doordat mijn kennis over het programma nog niet heel diep was, was dit niet heel efficient gedaan. Ik wil dit leerdoel beter aantonen met mijn persoonlijke leerdoel PowerBi.",
          ],
          description:
            "De student leert het belang van verschillende aspecten van data management, zoals recht en ethiek, data opslag, data opschoning en data aggregatie.",
          proof: [inject("githubRef") + "Data/DataOpdracht.pbix"],
          dropped: false,
        },
        {
          id: 3,
          leerdoel: "Data interpreteren",
          reflecties: [
            "Vergelijkbaar met het vorige leerdoel, tijdens dit semester tijdens de dataopdracht werd ik geplaatst in de opslag en opschoning van de data in powerbi. Doordat mijn kennis over het programma nog niet heel diep was, was dit niet heel efficient gedaan. Ik wil dit leerdoel beter aantonen met mijn persoonlijke leerdoel PowerBi.",
          ],
          description:
            "De student kan data interpreteren en door middel van analytisch denken waardevolle conclusies uit de data te halen en deze omzetten in oplossingen die een impact hebben op het gebied van slimme steden.",
          proof: [
            {
              name: "Dataopdracht powerbi",
              path: inject("githubRef") + "Data/DataOpdracht.pbix",
            },
          ],
          dropped: false,
        },
        {
          id: 4,
          leerdoel: "Toekomstige Uitdagingen",
          reflecties: [
            "De twee grootste partij en daarmee ook de twee grootste uitdagingen van de slimme stad zijn de gemeente en de inwoner. Gemeentes zijn niet van plan te veranderen tenzij aanzienlijk bewijs is om iets in te voeren zoals gezien met het voorbeeld van Helmond, waarbij talloze onderzoeks- en adviesbureaus aan kunnen tonen dat het city marketing team niet genoeg geld of mankracht heeft maar toch een 40% vermindering in budget ontvangt. Verder weten veel steden niet wat hun inwoners willen, wanneer een gemeente bereid iets te veranderen vragen stellen ze niet de vraag aan het publiek, maar een selectie van inwoners die al tevreden zijn over de stad.",
            "Andere problemen waarom er nu al niet meer smart cities zijn 3 hoofdredenen. Kosten, Complexiteit en Veiligheid en Privacy. Een goed voorbeeld is publiek transport om het beste busnetwerk aan te leggen moeten veel sensoren om het publiek te monitoren aangelegd worden over een al een bestaand netwerk met de mankracht die hoogopgeleid genoeg is om al deze systemen met elkaar te verbinden en conclusies uit te trekken. ",
          ],
          description:
            "De student kan de toekomstige uitdagingen op het gebied van slimme en toekomstbestendige stadsontwikkeling duiden.",
          proof: [
            {
              name: "Artikel: Smart Cities ??? Why Don???t We See More of Them?",
              path: "https://www.natix.io/blogs/smart-cities-why-dont-we-see-more-of-them",
            },
          ],
          dropped: false,
        },
        {
          id: 5,
          leerdoel: "Trend Analyse",
          reflecties: [
            "Scenario Planning is een vak waarbij je risico's analyseert en vervolgens een plan ontwikkeld op basis van verschillende impactvolle risico's. Voor ons onderzoek hebben we gekeken naar wat de obstakels zijn voor elektrisch infrastructuur in 2032",
          ],
          description:
            "De student is in staat om trends te signaleren en hierop beleid/visie af te stemmen.",
          proof: [
            {
              name: "Dataopdracht powerbi",
              path: inject("githubRef") + "Sp/LinkbovenSP.pdf",
            },
          ],
          dropped: false,
        },
        {
          id: 6,
          leerdoel: "City Marketing",
          reflecties: [
            "Imago onderzoeken kunnen op verschillende manieren worden gedaan. Eerst wordt er onderscheden tussen kwantitatieve onderzoeken (massa enqu??tes, online/social onderzoek of face- to-face vragenlijsten) en kwalitatieve onderzoeken (1-op-1 interviews, groepsgesprekken met doelgroepen). Beide hebben vormen brengen zijn eigen voor- en nadelen met zich mee (AMA, 2022). Voor steden wordt er voornamelijk gebruik gemaakt van kwantitatieve onderzoeken. Zoals Breda???s jaarlijkse stadsenqu??te (Gemeente Breda, 2022).",
          ],
          description:
            "De student kan adviseren hoe data kan worden ingezet binnen slimme en toekomstbestendige stadsontwikkeling en hoe integratie met offline marketing kan plaatsvinden.",
          proof: [
            {
              name: "ImagoOnderzoek",
              path:
                inject("githubRef") +
                "CityMarketing/CityMarketingOnderzoek.pdf",
            },
            {
              name: "ImagoOnderzoekPPTX",
              path:
                inject("githubRef") +
                "CityMarketing/CityMarketingOnderzoek.pptx",
            },
          ],
          dropped: false,
        },
        {
          id: 7,
          leerdoel: "Iteratieve benadering",
          reflecties: ["Geloof me, deze website had veel iteraties"],
          description:
            "De student kan een iteratieve benadering hanteren om tot creatief handelen en denken aan te zetten.",
          proof: [],
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

<style lang="scss">
.leerdoelContainer {
  h1 {
    margin-bottom: 3rem;
    font-size: 40px;
    font-weight: bold;
  }
  padding-top: 6rem;
  margin-left: 5rem;

  .leerdoelItem {
    margin-bottom: 1.5rem;
    width: 100%;
    h2 {
      font-size: 1rem;
      font-weight: 700;
    }

    .dropper {
      cursor: pointer;

      &:hover {
        color: var(--vt-c-gray-mute);
      }
    }

    .description {
      max-width: 60%;
      font-style: italic;
      font-size: small;
    }

    .leerdoelContent {
      max-width: 75%;
      .leerdoelParagraph {
        margin-top: 1rem;
        h3 {
          font-weight: 600;
        }

        .reflectie {
          margin-left: 2rem;
        }
      }

      .linkToContent {
        margin-top: 1rem;
        ul {
          li {
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
}
</style>
