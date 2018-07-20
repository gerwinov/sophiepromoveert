import Vue from 'vue'

import {
  Vuetify,
  VApp,
  VFooter,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VJumbotron,
  VParallax,
  VForm,
  VTextField,
  VCheckbox,
  transitions
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VFooter,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VJumbotron,
    VParallax,
    VForm,
    VTextField,
    VCheckbox,
    transitions
  },
  theme: {
    primary: '#D1447A',
    error: '#D21E1E'
  }
})
