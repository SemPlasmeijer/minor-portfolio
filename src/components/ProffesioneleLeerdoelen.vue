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
          leerdoel: "TEC",
          reflectie: [""],
          description:
            "De student beheerst TEC (Technology, Entrepreneurship, Creativity) skills.",
          proof: [""],
          dropped: false,
        },
        {
          id: 2,
          leerdoel:
            "Stakeholder & Data",
          reflectie: [""],
          description: "De student kan een data gerelateerde uitdaging vereenvoudigd uitleggen aan de stakeholders.",
          proof: [""],
          dropped: false,
        },
        {
          id: 3,
          leerdoel:
            "Analyse",
          reflectie: [""],
          description: "De student is in staat een probleem vanuit diverse invalshoeken te analyseren (commercieel, techniek, functionaliteit, financieel, ethisch).",
          proof: [""],
          dropped: false,
        },
        {
          id: 4,
          leerdoel:
            "Multidisciplinaire",
          reflectie: [""],
          description: "De student is in staat in multidisciplinaire teams samen te werken met verschillende expertisegebieden en vanuit verschillende gremia (de Triple Helix van overheid, onderwijs en bedrijfsleven).",
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
