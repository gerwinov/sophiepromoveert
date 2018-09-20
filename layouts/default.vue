<template>
  <v-app class="white">
    <v-toolbar flat height="35" color="sp pink">
      <v-toolbar-items>
        <v-btn class="white--text" flat @click="$vuetify.goTo('#signup')">Aanmelden</v-btn>
        <v-btn class="white--text" flat @click="$vuetify.goTo('#locations')">Locaties</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <section>
      <v-parallax src="jumbotron_1.png" height="250">
        <v-layout row>
          <v-flex column mt-2>
            <h1 class="text-xs-right font-weight-medium display-3">
              <v-icon size="56" color="sp pink">school</v-icon>
              Sophie promoveert
            </h1>
            <h2 class="text-xs-right display-1">
              31&nbsp;aug&nbsp;2018
            </h2>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-content>
        <nuxt />
      </v-content>
    </section>

    <section>
      <v-parallax src="jumbotron_2.png" height="200" id="locations">
        <v-layout row>
          <v-flex column mt-5>
            <h1 class="text-xs-center font-weight-medium display-3">
              <v-icon size="56" color="sp pink">location_on</v-icon>
              Locaties
            </h1>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container>
        <v-layout justify-center row wrap>
          <v-flex class="text-xs-center" xs12 sm8 md4 mt-5>
            <v-icon size="56" color="sp pink">local_library</v-icon>
            <h3 class="display-1">Aula</h3>
            <p mt-1>
              <strong>Generaal Foulkesweg 1</strong><br>
              <strong>Wageningen</strong>
              <br><br>
              Parkeren kan naast de Aula op het Irene Brigadeplein,
              het gedeelte achter de slagboom is gratis (vergeet niet om een parkeermunt te halen in de Aula).
              <br><br>
              Alles buiten de slagboom is betaald straatparkeren (&euro;1,40/u), indien onvoldoende plek op het Irene Brigadeplein
              en directe omgeving Generaal Foulkesweg kunt u navigeren naar de Gerdesstraat.
              <br><br>
              Zie <a href="http://prettigparkeren.nl/kaart/#!Wageningen">hier</a> voor meer info.
              <br><br>
              <a href="https://www.wur.nl/nl/locatie/Aula-gebouwnummer-362.htm">website</a>
            </p>
          </v-flex>
          <v-flex class="text-xs-center" xs12 sm8 md4 mt-5>
            <v-icon size="56" color="sp pink">local_movies</v-icon>
            <h3 class="display-1">Heerenstraat Theater</h3>
            <p mt-1>
              <strong>Molenstraat 1B</strong><br>
              <strong>Wageningen</strong>
              <br><br>
              Parkeren: zie aula.<br>
              300 meter lopen vanaf de aula.
              <br><br>
              <a href="https://www.heerenstraattheater.nl/">website</a>
            </p>
          </v-flex>
          <v-flex class="text-xs-center" xs12 sm8 md4 mt-5>
            <v-icon size="56" color="sp pink">local_bar</v-icon>
            <h3 class="display-1">Schreierstoren</h3>
            <p mt-1>
              <strong>Prins Hendrikkade 94-95</strong><br>
              <strong>Amsterdam</strong>
              <br><br>
              Het is aan te raden met het OV te komen. <br>
              De locatie is op loopafstand (300 meter) van Amsterdam Centraal Station.
              <br><br>
              <a href="https://www.schreierstoren.nl/">website</a>
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-footer height="auto" color="sp pink">
      <v-layout white--text justify-center row wrap>
        <v-flex xs11 offset-xs1 md5 offset-md1 mt-3>
          <v-layout>
            <v-flex xs2 lg1>
              <v-icon size="35" color="white">people</v-icon>
            </v-flex>
            <v-flex ml-2>
              <h3 class="headline">
                Paranimfen
              </h3>
              <p>
                Merel Defour - <a class="white--text" href="mailto:merel.defour@wur.nl">merel.defour@wur.nl</a><br>
                Charlotte Michielsen - <a class="white--text" href="mailto:charlotte.michielsen@wur.nl">charlotte.michielsen@wur.nl</a>
              </p>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs11 offset-xs1 md5 offset-md0 mt-3>
          <v-layout>
            <v-flex xs2 lg1>
              <v-icon size="35" color="white">contact_support</v-icon>
            </v-flex>
            <v-flex ml-2>
              <h3 class="headline">
                Contact
              </h3>
              <p>Sophie Schutte - <a class="white--text" href="mailto:sophiepromoveert2018@gmail.com">sophiepromoveert2018@gmail.com</a></p>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 ml-2 mt-4>
          <span class="caption font-weight-light"><a class="white--text" href="https://overeem.io" rel="noreferrer nofollow"><strong>Build with love</strong></a> - 2018</span>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Sophie promoveert'
      }
    }
  }
</script>

<style>

</style>
