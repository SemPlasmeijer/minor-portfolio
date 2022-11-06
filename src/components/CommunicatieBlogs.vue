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
          title: "Sportiefste Bankje",
              description: "Op stedelijk maar ook provinciaal niveau willen ambtenaren zijn bevolking aansporen om meer te sporten en in beweging te blijven, en dit wil de Nederlander ook. Uit cijfers van Wandelnet blijkt dat 94% van de Nederlanders wandelt (Wandelnet, 2021), hieronder vallen dus ook kleine trips van korter dan een kilometer. ",
          paragraphs: [
            {
              paragraphId: 1,
              title: "Waar zit die groep?",
                  content: "Zoals eerder benoemt deze groep bevindt zich in heel Nederland, voor dit onderzoek willen wij ons gaan volgen op de groep mensen langs wandelroutes voor verschillende redenen. Dit kunnen de standaard wandelaren zijn die even snel een ommetje nemen of de fanatieke hardloper die net 5km achter de rug heeft gehad."
            },
          ],
          files: [
            {
              name: "WaaromWaarWat",
              path: inject("githubRef") + "communi/WaaromWaarWat.pdf",
            },
          ],
        },
      ],
    };
  },
  components: { BlogContainer },
};
</script>
