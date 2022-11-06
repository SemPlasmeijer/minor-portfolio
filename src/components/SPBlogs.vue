<template>
  <BlogContainer :blogList="blogList"> </BlogContainer>
</template>
<script>
import BlogContainer from "./BlogContainer.vue";
import { inject } from "vue";
export default {
  data() {
    return {
      blogList: [
        {
          blogId: 1,
          dropped: false,
          title: "Wat is een Smart City",
              description: "Voor al een langere tijd kunnen inwoners en bedrijven hun opgewekte energie terug leveren aan het elektriciteitsnet van Nederland. Dit elektriciteitsnet kan gezien worden als een grote batterij die Nederland van stroom voorziend",
          paragraphs: [
            {
              paragraphId: 1,
              title: "Actieradius verbeterd, Stroomcapaciteit niet",
              content: "Wat zijn dus de oplossingen hiervoor. Met de toenamen van laadpalen en die 24/7 beschikbaar zijn is er het idee om wanneer deze palen inactief zijn een tijdelijke opslag toe te voegen aan deze palen. In plaats van op te laden om het net worden auto’s nu opgeladen via een batterij op de paal zelf. Die in de daluren zal worden opgeladen door het net of door een eigen energiebron", },
            {
              paragraphId: 2,
              title: "Actieradius en Stroomcapaciteit verbeteren.",
              content: "Als advies, verhoog subsidies en start campagnes voor zowel elektrisch rijden maar ook vergroening van huizen. Tot slot om een herhaling te voorkomen zal het elektriciteitsnet uitbreid baar moeten blijven en regelmatigere gemonitord moeten worden."
            },
          ],
          files: [
            {
              name: "ScenarioPlanning2032",
              path: inject("githubRef") + "Sp/LinkBovenSP.pdf",
            },
          ],
        },
      ],
    };
  },
  components: { BlogContainer },
};
</script>
