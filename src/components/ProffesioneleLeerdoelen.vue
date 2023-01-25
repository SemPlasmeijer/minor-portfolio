<template>
  <div class="leerdoelContainer">
    <h1>Professionele Leerdoelen</h1>

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
import { inject } from "vue";

export default {
  data() {
    return {
      currentDrop: null,
      leerdoelen: [
        {
          id: 1,
          leerdoel: "TEC",
          reflecties: [
            "Geen idee hoe ik dit ga aantonen, maar ik verwacht dat het grootste deel aangetoond kan worden doormiddel van de groepsopdracht in het tweede deel van het semester",
            "Tijdens dit semester heb ik voor de drie onderwerpen verschillende projecten en opdrachten gemaakt. Voor Technology heb ik tijdens mijn project gekeken naar de technologische limitatie van 5G en hoe deze vermijdt kunnen worden door edge datacenters. Voor Entrepreneurship heb ik gekeken naar verschillende economische verdienmodellen van edge datacenters, maar ook hoe UI UX een impact kan hebben op de uitstraling van je imago en retentie op je website. Tot slot voor Creativity heb ik gekeken heb ik me verdiept in hoe ontworpen kan worden zonder verschillende groepen uit te sluiten  ",
          ],
          description:
            "De student beheerst TEC (Technology, Entrepreneurship, Creativity) skills.",
          proof: [],
          dropped: false,
        },
        {
          id: 2,
          leerdoel: "Stakeholder & Data",
          reflecties: [
            "Het grootste deel van deze leerdoel wil ik behalen door mijn powerbi leerdoel en deels aangetoont door de dataopdracht. Verder gaat dit ook hand in hand met de groepsopdracht die gedaan wordt for Rotterdam edge datacenters",
          ],
          description:
            "De student kan een data gerelateerde uitdaging vereenvoudigd uitleggen aan de stakeholders.",
          proof: [
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
            {
              name: "Onderzoeksrapport edge datacenters Rotterdam",
              path:
                inject("githubRef") +
                "/EdgeDatacenterRotterdam/EdgeDatacenterOnderzoeksRapport.pdf",
            },
            {
              name: "Onderzoeksrapport edge datacenters Rotterdam pptx",
              path:
                inject("githubRef") +
                "/EdgeDatacenterRotterdam/EdgeDataCenter.pptx",
            },
          ],
          dropped: false,
        },
        {
          id: 3,
          leerdoel: "Analyse",
          reflecties: [
            "Scenario Planning is een vak waarbij je risico's analyseert en vervolgens een plan ontwikkeld op basis van verschillende impactvolle risico's. Voor ons onderzoek hebben we gekeken naar wat de obstakels zijn voor elektrisch infrastructuur in 2032",
          ],
          description:
            "De student is in staat een probleem vanuit diverse invalshoeken te analyseren (commercieel, techniek, functionaliteit, financieel, ethisch).",
          proof: [
            {
              name: "Risk Analysis",
              path: inject("githubRef") + "Sp/LinkBovenSP.pdf",
            },
          ],
          dropped: false,
        },
        {
          id: 4,
          leerdoel: "Multidisciplinaire",
          reflecties: [
            "Peer Reviews",
            "Sem is een bijzonder motiverende toevoeging aan elk team. hij houd niet van uitstellen en zorgt hierdoor dat je altijd tijd over hebt aan het eind van de dag. Er is altijd een goede sfeer als Sem aanwezig is en dit zorgt voor een productieve en leuke omgeving. Als tip zou ik geven om niet te veel werk op te pakken van zijn groep, als hij denkt dat het niet gaat gebeuren gaat Sem alles zelf maken i.p.v. eerst communiceren met de verantwoordelijke.",
            "Ik vond de samenwerking met Sem erg prettig. Aangezien we bezig waren met een data opdracht en daarin werkten met Power BI kon hij zijn kennis goed inzetten. Mede daarom hebben we de opdracht goed kunnen maken. Daarnaast verliep de communicatie goed dus zodoende beviel het samenwerken met Sem goed.",
          ],
          description:
            "De student is in staat in multidisciplinaire teams samen te werken met verschillende expertisegebieden en vanuit verschillende gremia (de Triple Helix van overheid, onderwijs en bedrijfsleven).",
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
