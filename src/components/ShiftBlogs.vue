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
            "Belangerijke tussenpersonen in Made en Wat hun antwoorden waren voor diverse vragen rondom het drop.",
          paragraphs: [
           
          ],
          files: [
            {
              name: "MadeseTussenPersoon",
              path: inject("githubRef") + "Shift/MadeseTussenPersoon.pptx",
            },
          ],
        },
      ],
    };
  },
  components: { BlogContainer },
};
</script>
