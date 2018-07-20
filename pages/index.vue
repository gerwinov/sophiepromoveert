<template>
  <v-container>
    <v-layout justify-center mt-5>
      <v-flex class="text-xs-center" xs12 sm10>
        <p class="headline font-weight-light font-italic" id="signup" mt-5>
          <v-icon size="26" color="sp pink">format_quote</v-icon>
          Ik promoveer op vrijdag 31 augustus en ik zou het leuk vinden als jij hier bij bent!
          Om logistieke redenen (o.a. het bestellen van lunch) zou ik het fijn vinden als je hieronder aangeeft of je van plan bent te komen. Iedereen is welkom om alle onderdelen bij te wonen!
          <v-icon size="26" color="sp pink">format_quote</v-icon>
        </p>
      </v-flex>
    </v-layout>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-layout justify-center row wrap reverse class="black--text" mt-2>
        <v-flex xs12 sm5 md4>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Naam"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mailadres"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm5 md4>
          <v-checkbox
            v-model="defence"
            label="Verdediging (ceremonie)"
            hint="Aula Wageningen Universiteit - 11.00 uur"
            persistent-hint
            color="sp pink"
            :rules="checkboxRules"
            validate-on-blur
            :error="checkboxError"
            @change="validateCheckboxes"
          ></v-checkbox>
          <v-checkbox
            v-model="reception"
            label="Receptie (incl. lunch)"
            hint="Heerenstraat Theater Wageningen - 12.30 uur"
            persistent-hint
            color="sp pink"
            :rules="checkboxRules"
            validate-on-blur
            :error="checkboxError"
            @change="validateCheckboxes"
          ></v-checkbox>
          <v-checkbox
            v-model="party"
            label="Feest"
            hint="Schreierstoren Amsterdam - 20.00 uur"
            persistent-hint
            color="sp pink"
            :rules="checkboxRules"
            validate-on-blur
            :error="checkboxError"
            @change="validateCheckboxes"
          ></v-checkbox>
          <v-slide-y-transition>
            <p
              class="sp--text text--red caption"
              v-show="checkboxError"
              >
              Selecteer minimaal &eacute;&eacute;n locatie
            </p>
          </v-slide-y-transition>
        </v-flex>
      </v-layout>
      <v-layout justify-center row mb-5>
        <v-flex xs12 sm5 offset-sm5 md4 offset-md4 class="text-xs-center text-sm-left">
          <v-btn
            :disabled="!valid"
            @click="submit"
            color="sp pink"
            class="white--text"
          >
            Verstuur
          </v-btn>
          <v-btn
            @click="clear"
            color="sp pink"
            class="white--text"
            outline
          >
            Leegmaken
          </v-btn>
        </v-flex>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        valid: true,
        name: null,
        nameRules: [
          (v) => !!v || 'Naam is verplicht',
          (v) => (v && v.length <= 50) || 'Naam moet minder dan 50 tekens bevatten'
        ],
        email: null,
        emailRules: [
          (v) => !!v || 'E-mailadres is verplicht',
          (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mailadres moet geldig zijn'
        ],
        defence: false,
        reception: false,
        party: false,
        checkboxRules: [
          (v) => (!this.defence && !this.reception && !this.party) || true
        ],
        checkboxError: false
      }
    },

    methods: {
      submit () {
        // Validate
        this.$refs.form.validate()
        this.validateCheckboxes()

        // To do: Send to backend
      },

      validateCheckboxes () {
        this.checkboxError = !this.defence && !this.reception && !this.party
      },

      clear () {
        this.$refs.form.reset()
        this.checkboxError = false
      }
    }
  }
</script>