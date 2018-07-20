<template>
  <v-app class="white">
    <v-toolbar flat height="25" color="sp pink">
      <v-spacer></v-spacer>
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
        <v-layout row>
          <v-flex column mt-2 class="text-xs-center">
            <v-btn @click="$vuetify.goTo('#signup')" color="sp pink" dark class="hidden-sm-and-up">Ik ben er bij!</v-btn>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container>
        <v-content>
          <nuxt />
        </v-content>
      </v-container>
    </section>

    <section>
      <v-parallax src="jumbotron_2.png" height="200">
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
              Parkeren kan gratis naast de aula - doorrijden bij de slagboom (beperkt plek).
              Vergeet niet een parkeermunt te halen in de aula. <br>
              <i>(Alles buiten de slagboom is betaald straatparkeren - 1,60 EUR p.u.)</i>
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
            <h3 class="display-1">VOC Café - Schreierstoren</h3>
            <p mt-1>
              <strong>Prins Hendrikkade 94-95</strong><br>
              <strong>Amsterdam</strong>
              <br><br>
              Het is aan te raden met het OV te komen. <br>
              De locatie is op loopafstand (300 meter) van Amsterdam Centraal.
              <br><br>
              <a href="https://www.schreierstoren.nl/">website</a>
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-footer height="auto" color="sp pink">
      <v-layout white--text justify-center row wrap>
        <v-flex xs11 offset-xs1 sm5 offset-sm1 md4 offset-md1 mt-3>
          <v-layout>
            <v-flex xs2 lg1>
              <v-icon size="35" color="white">people</v-icon>
            </v-flex>
            <v-flex ml-2>
              <h3 class="headline">
                Paranimfen
              </h3>
              <p>
                Merel Defour - <i><a class="white--text" href="mailto:merel.defour@wur.nl">merel.defour@wur.nl</a></i><br>
                Charlotte Michielsen - <i><a class="white--text" href="mailto:charlotte.michielsen@wur.nl">charlotte.michielsen@wur.nl</a></i>
              </p>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs11 offset-xs1 sm4 mt-3>
          <v-layout>
            <v-flex xs2 lg1>
              <v-icon size="35" color="white">library_books</v-icon>
            </v-flex>
            <v-flex ml-2>
              <h3 class="headline">
                Proefschrift
              </h3>
              <v-btn href="" color="white" outline dark disabled>Open</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex xs12 ml-2 mt-4>
          <span class="caption font-weight-light"><strong>Build with love</strong> - 2018</span>
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
