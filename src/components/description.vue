<template>
  <div class="paragraphContainer">
    <div class="paragraphContent">
      <h2>Wie Ben ik?</h2>
      <p>
        Sem Plasmeijer 21 Jaar student ICT aan Fontys Hogeschool Tilburg. Naar
        een jaar bouwkunde te hebben gestudeerd met de gedachten om mijn werk in
        werkelijkheid terug te willen zien kwam ik erachter dat mijn passie niet
        in het vak lag. Met de gedachten dat ik nog steeds dingen wilden
        ontwikkelen en problemen wilden oplossen was ik 3 jaar geleden
        overgestapt naar HBO ICT en sindsdien ben ik niet veranderd. Mijn vrije
        tijd besteed ik voornamelijk aan sport, maar daarbuiten heb ik interesse
        in architectuur, UX UI, game development en tekenen en hoe mensen in
        deze vakken over problemen zijn heen gekomen.
      </p>
    </div>
    <img class="paragraphPhoto" src="../assets/MadeGraySmall.jpg" />
  </div>
</template>
<style lang="scss">
.paragraphContainer {
  padding: 2.5rem 15rem 0rem 15rem;
  display: flex;
  flex-direction: column-reverse;
  flex: 0;
}

.paragraphContent {
  color: var(--vt-c-white-soft);
  flex: 1;
  background-color: var(--vt-c-black-soft);
  padding: 20px; 
  min-height: 20%;
}

.paragraphPhoto {
  filter: grayscale(100%);
}
</style>