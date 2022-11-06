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
          description:
            "Wanneer gaat een stad van een normale stad, een van de duizenden in Nederland naar een selecteerde groep van honderden smart steden wereldwijd. In mijn ogen moet het aan een drietal onderdelen voldoen. Open, Gericht en Impact.",
          paragraphs: [
            {
              paragraphId: 1,
              title: "De officiële definitie",
              content:
                "De officiële definitie als beschreven door TWI-Global is een stad die niet alleen veel technologie heeft, maar een stad die gebruik maakt van smart technieken en data analyse om de economische, stedelijke functies en/of leefbaarheid van een stad te verbeteren.",
            },
            {
              paragraphId: 2,
              title: "De geschiedenis",
              content:
                "Rond 1960/70 begonnen de eerste steden te denken over het documenteren, opslaan en analyseren van data in de vorm databases, luchtfotografie en directe rapporten. Met als expliciet doel het verbeteren van services, vermindering van misdaad en rampen en vermindering van armoede.",
            },
          ],
          files: [
            {
              name: "BinnenstadBredaTevredeHeid",
              path: inject("githubRef") + "/SmartCityBlog.pdf",
            },
          ],
        },
      ],
    };
  },
  components: { BlogContainer },
};
</script>
