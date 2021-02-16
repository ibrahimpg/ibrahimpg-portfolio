import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

// eslint-disable-next-line no-unused-vars
import colors from 'vuetify/lib/util/colors';
// eslint-disable-next-line no-unused-vars
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#9575CD',
        secondary: '#9575CD',
        accent: '#9575CD',
        error: '#9575CD',
        info: '#9575CD',
        success: '#9575CD',
        warning: '#9575CD',
      },
    },
  },
});

Vue.use(Vuetify);

export default new Vuetify({
});
