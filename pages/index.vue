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
    <v-form ref="form" id="gform" v-model="valid" lazy-validation>
      <v-layout justify-center row>
        <v-flex xs12 sm10 md8>
          <v-alert
            :value="success"
            type="success"
            transition="scale-transition"
            outline
            color="sp pink"
          >
            Je aanmelding is succesvol verzonden!
          </v-alert>
          <v-alert
            :value="error"
            type="error"
            transition="scale-transition"
            outline
            color="sp pink"
          >
            {{ errorMessage }}
          </v-alert>
        </v-flex>
      </v-layout>
      <v-layout justify-center row wrap reverse class="black--text" mt-2>
        <v-flex xs12 sm5 md4>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Naam"
            required
            validate-on-blur
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mailadres"
            required
            validate-on-blur
          ></v-text-field>
          <vue-recaptcha :sitekey="sitekey" @verify="captchaKey = $event" @expired="captchaKey = ''" ref="captcha"></vue-recaptcha>
          <v-checkbox
            v-model="confirmation"
            label="Bevestiging van aanmelding"
            hint="Ontvang bevestiging per e-mail"
            persistent-hint
            color="sp pink"
          ></v-checkbox>
        </v-flex>
        <v-flex xs12 sm5 md4>
          <p class="sp--text text--pink mt-4">Ik ben aanwezig bij:</p>
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
            label="Receptie (incl. lichte lunch)"
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
      <v-layout justify-center row mb-5 mt-3>
        <v-flex xs12 sm5 offset-sm5 md4 offset-md4 class="text-xs-center text-sm-left">
          <v-btn
            :disabled="buttonDisabled"
            @click="submit"
            color="sp pink"
            class="white--text"
            :loading="loading"
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
  import VueRecaptcha from 'vue-recaptcha'

  export default {
    components: { VueRecaptcha },

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
        checkboxError: false,
        sitekey: '6LekX2UUAAAAAF8EweSIRcDMX_B4djvhmPTR9Snb',
        captchaKey: null,
        confirmation: false,
        loading: false,
        success: false,
        error: false,
        errorMessage: null
      }
    },

    computed: {
      buttonDisabled () {
        return !this.valid || !this.captchaKey
      }
    },

    methods: {
      submit () {
        // Validate
        this.validateCheckboxes()

        // Return on validation errors
        if (!this.$refs.form.validate() || this.checkboxError) {
          return
        }

        // Set button to loading state and create body for form post call

        this.loading = true

        let body = {
          name: this.name,
          email: this.email,
          defence: this.defence,
          reception: this.reception,
          party: this.party,
          confirmation: this.confirmation,
          captchaKey: this.captchaKey,
          formGoogleSendEmail: this.email
        }

        // Do form post call using XHR
        var xhr = new XMLHttpRequest()
        xhr.open('POST', '/exec')
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

        // Callback for form post reply
        xhr.onreadystatechange = () => {
          if (xhr.responseText) {
            if (JSON.parse(xhr.responseText).result === 'success') {
              this.loading = false
              this.clear()
              this.success = true
              return
            }
            if (JSON.parse(xhr.responseText).result === 'error') {
              this.loading = this.success = false
              this.errorMessage = JSON.parse(xhr.responseText).error
              this.error = true
            }
          }
        }

        // url encode form data for sending as post data
        var encoded = Object.keys(body).map(function (k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(body[k])
        }).join('&')

        // Post the form
        xhr.send(encoded)
      },

      validateCheckboxes () {
        this.checkboxError = !this.defence && !this.reception && !this.party
      },

      clear () {
        this.$refs.captcha.reset()
        this.captchaKey = null
        this.errorMessage = null
        this.$refs.form.reset()
        this.checkboxError = this.confirmation = this.defence = this.reception = this.party = this.success = this.error = false
      }
    }
  }
</script>