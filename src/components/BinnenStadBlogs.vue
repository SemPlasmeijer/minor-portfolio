<template>
  <BlogContainer :blogList="blogList"> </BlogContainer>
</template>
<script>
import BlogContainer from "./BlogContainer.vue";
import {inject} from "vue";
export default {
  data() {
    return {
      blogList: [
        {
          blogId: 1,
          dropped: false,
          title: "Breda Tevredeheidsonderzoek",
          description:
            "Elk najaar voert de gemeente Breda een algemene stadsenquête uit om vast te stellen in welke gebieden de stad en haar inwoners tevreden zijn en welke gebieden meer aandacht vereisen voor het komende jaar. ",
          paragraphs: [
            {
              paragraphId: 1,
              title: "",
              content:
                "In de afgelopen 3 jaar is de respons op de enquête toegenomen met 2019: 24%, 2020: 28% en 2021: 34% van 3400 verstuurde enquêtes beantwoord te zijn. Dit is volgens de gemeente (i&o research, 2022) ruim voldoende om betrouwbare uitspraken op gemeenteniveau te kunnen doen.",
            },
            {
              paragraphId: 2,
              title: "Trost op Breda",
              content:
                "De afgelopen 4 jaar is de Bredaënaar trots geweest op zijn stad. Sinds 2018 schommelt het percentage tussen 69 en 73% waarvan één derde zeer/heel trots is op de stad, (Gemeente Breda, 2022) en dit loopt ook in lijn met de gemiddelde score die de stad ontvangt per categorie met een gemiddeld rapport van 7.7 in 2019 (i&o research, 2020). Waardoor is dit cijfer een ruim voldoende en trekt deze trend ook door naar de binnenstad van Breda?",
            },
          ],
          files: [
            {
              name: "BinnenstadBredaTevredeHeid",
              path: inject("githubRef") + "Binnenstad/BredaTevredeHeid.pdf",
            },
          ],
        },
        {
          blogId: 2,
          dropped: false,
          title: "FoodCourts",
          description:
            "Foodcourts/foodhalls zijn publieke plekken/pleintjes met verschillende eetstallen waar men eten kan bestellen om op locatie of thuis op te eten. (Wikipedia, 2022) Terwijl in Nederland en Europa deze ruimte voornamelijk is op genomen door grote fastfoodketens zoals McDonalds, KFC en Subway in Azië en Afrika zijn dit voornamelijk kleine restaurants/foodtrucks.",
          paragraphs: [
            {
              paragraphId: 1,
              title: "Singapore",
              content:
                "Terug in de jaren 50-60 had Singapore het probleem dat veel eten onhygiënisch werd geproduceerd door niet gecertificeerde etensstallen (Wikipedia, 2022). Dit probleem werd niet direct voorkomen door de introductie van de Hawker Centres, maar met de verbouwingen en verbetering geïntroduceerd in 1990 en recent ingevoerde publieke hygiëne scores is het één van de meest populaire varianten van eet genot geworden in Singapore. Verder in 2019 hebben ruim 40 van deze stallen in Hawker Centers een Michelin Star gewonnen.",
            },
            {
              paragraphId: 2,
              title: "Londen",
              content:
                "Eén van de meest populaire courts in Londen is Kingly Court in Carnaby. Kingly ging voor het eerst open in 2018 met de gedachten om de eerste plek in Londen te worden met een publieke waterkraan en het verwijderen van eenmalige plastic flessen. Sindsdien heeft het drie verdiepingen hoge court 25 internationale restaurants, bars en cafés die nergens anders in Londen te vinden zijn behalve hier.",
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
