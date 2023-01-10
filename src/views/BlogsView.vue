<template>
  <main>
    <section class="baseSection">
      <section class="titleSection">
        <h1>Thema's</h1>
      </section>
      <section class="themaSection leefbaarheid">
        <section class="left">
          <h1>Leefbaarheid</h1>
          <p>
            De meest interessante gastles op dit gebied kwam van Sorama.
            Geluidsdetectie en visualisatie kwam in mijn ogen alleen voor in
            natuurkundige metingen, en leek in mijn ogen één van de mindere
            nuttige vormen van sensoriek. Maar om geluid goed te kunnen
            gebruiken is een sterke vorm van visualisatie nodig, om precies te
            weten wat de problemen zijn kan geluidsensoriek gebruikt in
            combinatie met andere technieken om sneller achter een probleem te
            komen.
            <br />
            <br />
            Geluid hoeft niet alleen in de technisch wereld gebruikt te worden
            om geluidsdichtheid te meten of geluidsoverlast sensoren te meten,
            maar het kan ook in een interactieve en recreatieve manieren
            gebruiken binnen sport.
            <br />
            <br />
            Maar leefomgeving en leefbaarheid zijn niet alleen gelimiteerd in de
            fysieke wereld. In een wereld waar men ruim 8 uur per dag achter een
            scherm werkt, vrije tijd besteed of tot rust komt is het belangrijk
            dat gemeentes hun best doen om hun inwoners gezond te houden zowel
            mentaal als fysiek. En de tijd die besteed wordt tijdens die 8 uur
            per dag, moet ook worden ingericht zodat iedere groep zo moeiteloos
            mogelijk ermee interacteren. Deze twee onderwerpen heb ik onderzocht
            tijdens mijn persoonlijke leerdoelen en hoe gemeentes ze proberen
            aan te pakken, maar ook hoe ik zelf verschillende elementen kan
            verbeteren.
          </p>
          <section class="reflectie">
            <h2>Reflectie</h2>
            <p></p>
          </section>
          <div class="linkToContent">
            <h2>Bronnen</h2>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/SemPlasmeijer/minor-portfolio/blob/main/src/assets/certificateDataAnalysis.pdf"
                  >Certificaat DataAnalysis alksdfjlkasdfjaskld;fj aanpassen</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/SemPlasmeijer/minor-portfolio/blob/main/src/assets/certificateIntroduction.pdf"
                  >Certificaat Introduction to SpreadSheets</a
                >
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/SemPlasmeijer/minor-portfolio/blob/main/Certs/certificateIntroPowerBi.pdf"
                  >Certificaat Introduction to PowerBI</a
                >
              </li>
            </ul>
          </div>
        </section>
        <section class="right">
          <section class="innerLeft">
            <img src="../assets/sophia-sideri-LFXMtUuAKK8-unsplash.jpg" />
          </section>
          <section class="innerRight">
            <img
              src="../assets/thisisengineering-raeng-zKGGN4-E5Tw-unsplash.jpg"
            />
            <img src="../assets/alex-lvrs-4N5huJDOydQ-unsplash.jpg" />
          </section>
        </section>
      </section>
      <section class="themaSection vastgoed">
        <h1>Vastgoed & Retail</h1>
      </section>
      <section class="themaSection mobiliteit">
        <section class="left"></section>
        <section class="right"><h1>Mobiliteit</h1></section>
      </section>
      <section class="themaSection veiligheid">
        <h1>Veiligheid</h1>
      </section>
      <section class="themaSection duurzaamheid">
        <h1>Duurzaamheid</h1>
      </section>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.titleSection {
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url("../assets/joshua-rawson-harris-KRELIShKxTM-unsplash.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  transition: transform 500ms cubic-bezier(0.13, 0.53, 0.38, 0.97);
  color: var(--vt-c-white-soft);
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
    font-size: 77px;
  }
}
.linkToContent {
  h2 {
    color: var(--vt-c-black-soft);
    user-select: none;
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
    font-size: 18px;
  }
  margin-top: 1rem;
  ul {
    list-style: none;
    li {
      margin-bottom: 0.5rem;
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

.reflectie {
  h2 {
    color: var(--vt-c-black-soft);
    user-select: none;
    font-family: "Major Mono Display", monospace;
    font-weight: 400;
    font-size: 18px;
  }
}
.themaSection {
  height: 100vh;
}

.leefbaarheid {
  display: flex;
  .left {
    p {
      margin: 1rem 0rem;
      margin-left: 40px;
    }
    width: 50vw;
    flex: 1;
    padding-top: 6rem;
    padding-left: 7rem;
    padding-right: 20rem;
    h1 {
      color: var(--vt-c-black-soft);
      user-select: none;
      font-family: "Major Mono Display", monospace;
      font-weight: 400;
      font-size: 40px;
    }
  }

  .right {
    display: flex;
    flex: 0;
    width: 50vw;
    max-height: 100vh;

    .innerLeft {
      img {
        object-fit: cover;
        max-height: 100vh;
      }
    }
    .innerRight {
      display: flex;
      flex-direction: column;
      width: 25vw;
      img {
        object-fit: cover;
        margin-bottom: 2vh;
        margin-left: 1vw;
        max-height: 49vh;
      }
    }
  }
}
.vastgoed {
  background-color: var(--vt-c-fourth);
}

.mobiliteit {
  display: flex;
  .left {
    width: 50vw;
  }
  .right {
    width: 50vw;
    background-color: var(--vt-c-fourth);
  }
}
.veiligheid {
  background-color: var(--vt-c-secondary);
}
.duurzaamheid {
  background-color: var(--vt-c-third);
}
</style>
