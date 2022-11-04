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
          title: "Imago Onderzoek",
          description:
                "Een imago onderzoek is een onderzoek, waarbij diensten, producten of naam onderzocht wordt om een beeld te scheppen over de mening van verschillende doelgroepen. Hel doel hiermee is om een gewenst en huidig imago op te richten en aanpassingen maken om de verschillen te overbruggen.",
          paragraphs: [
            {
              paragraphId: 1,
              title: "Methodiek",
              content: "Imago onderzoeken kunnen op verschillende manieren worden gedaan. Eerst wordt er onderscheden tussen kwantitatieve onderzoeken (massa enquêtes, online/social onderzoek of face- to-face vragenlijsten) en kwalitatieve onderzoeken (1-op-1 interviews, groepsgesprekken met doelgroepen). Beide hebben vormen brengen zijn eigen voor- en nadelen met zich mee (AMA, 2022). Voor steden wordt er voornamelijk gebruik gemaakt van kwantitatieve onderzoeken. Zoals Breda’s jaarlijkse stadsenquête (Gemeente Breda, 2022)."
            },
          ],
          files: [
            {
              name: "ImagoOnderzoek",
              path: inject("githubRef") + "CityMarketing/CityMarketingOnderzoek.pdf",
              },
             {
              name: "ImagoOnderzoekPPTX",
              path: inject("githubRef") + "CityMarketing/CityMarketingOnderzoek.pptx",
            },
          ],
        },
        {
          blogId: 2,
          dropped: false,
              title: "Mind the Gap",
          description:
            "Met een gap-analyse breng je de verschillen tussen de identiteit en het imago van een organisatie of merk in kaart. Het helpt je bij het maken van de juiste keuzes ter versterking van het imago. Het stappenplan in dit boek stelt iedereen in staat om snel, eenvoudig maar ook grondig een gap-analyse uit te voeren. Iedere stap wordt in een apart hoofdstuk uitgewerkt met behulp van voorbeelden en praktische tips.",
          paragraphs: [
            {
              paragraphId: 1,
              title: "Wat is het?",
              content:
                "Mind the Gap is een boek over een stappen plan in hoe je identiteit overbrengt naar een publiek imago en hoe deze vaak uit een lopen. De onderzoeksmethode die gebruikt wordt stelt dat als je eigen identiteit tegen over je imago zet en vervolgens kijkt waar de verschillen liggen 'the gap' kan je zien wat en waar je jezelf of je bedrijf moet verbeteren.",
            },
          ],
          files: [
            {
              name: "Foodcourts",
              path: inject("githubRef") + "Binnenstad/FoodCourts.pdf",
            },
            {
              name: "MotivatiePresentatie",
              path: inject("githubRef") + "Binnenstad/BinnenstadComplete.pptx",
            },
          ],
        },
      ],
    };
  },
  components: { BlogContainer },
};
</script>
