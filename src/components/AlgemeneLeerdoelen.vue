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
          id: 0,
          leerdoel:
            "Data verzamelen",
          reflectie: ["",],
          description: "De student kan (innovatieve) mogelijkheden om data te verzamelen benoemen en toepassen.",
          proof: [''],
          dropped: false,
        },
        {
          id: 1,
          leerdoel:
            "Dataverzameling: Ethiek en Privacy.",
          reflectie: ["",],
          description: "De student kent de uitdagingen van dataverzameling in relatie tot slimme steden op het vlak van ethiek en privacy.",
          proof: [''],
          dropped: false,
        },
        {
          id: 2,
          leerdoel:
            "Data management",
          reflectie: ["",],
          description: "De student leert het belang van verschillende aspecten van data management, zoals recht en ethiek, data opslag, data opschoning en data aggregatie.",
          proof: [''],
          dropped: false,
        },
        {
          id: 3,
          leerdoel:
            "Data interpreteren",
          reflectie: ["",],
          description: "De student kan data interpreteren en door middel van analytisch denken waardevolle conclusies uit de data te halen en deze omzetten in oplossingen die een impact hebben op het gebied van slimme steden.",
          proof: [''],
          dropped: false,
        },
        {
          id: 4,
          leerdoel:
            "Toekomstige Uitdagingen",
          reflectie: ["",],
          description: "De student kan de toekomstige uitdagingen op het gebied van slimme en toekomstbestendige stadsontwikkeling duiden.",
          proof: [''],
          dropped: false,
        },
        {
          id: 5,
          leerdoel:
            "Trend Analyse",
          reflectie: ["",],
          description: "De student is in staat om trends te signaleren en hierop beleid/visie af te stemmen.",
          proof: [''],
          dropped: false,
        },
        {
          id: 6,
          leerdoel:
            "City Marketing",
          reflectie: ["",],
          description: "De student kan adviseren hoe data kan worden ingezet binnen slimme en toekomstbestendige stadsontwikkeling en hoe integratie met offline marketing kan plaatsvinden.",
          proof: [''],
          dropped: false,
        },
        {
          id: 7,
          leerdoel:
            "Iteratieve benadering",
          reflectie: ["",],
          description: "De student kan een iteratieve benadering hanteren om tot creatief handelen en denken aan te zetten.",
          proof: [''],
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
  margin-top: 2rem;
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
