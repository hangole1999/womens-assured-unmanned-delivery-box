import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/es5/util/colors';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
import 'vuetify/src/stylus/app.styl';
import '@/stylus/main.styl';

Vue.use(
  Vuetify,
  {
    iconfont: 'md',
    theme: {
      light: {
        background: '#cccccc',
        primary: colors.deepPurple.accent3,
        secondary: colors.cyan.accent3,
        accent: colors.blue.accent4,
        error: '#b71c1c',
        text: colors.black
      },
      dark: {
        background: colors.black,
        primary: colors.deepPurple.accent3,
        secondary: colors.cyan.accent3,
        accent: colors.blue.accent4,
        error: '#b71c1c',
        text: colors.white
      }
    }
  }
);
