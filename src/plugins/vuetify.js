import Vue from 'vue';
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
// import 'vuetify/src/stylus/app.styl';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'md'
  },
  theme: {
    dark: false
  },
  themes: {
    light: {
      primary: '#4682b4',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
  }
});

// Vue.use(
//   Vuetify,
//   {
//     icons: {
//       iconfont: 'md'
//     },
//     theme: {
//       dark: true
//     },
//     themes: {
//       light: {
//         background: '#fedbf8',
//         primary: '#000',
//         secondary: '#000',
//         accent: '#000',
//         error: '#b71c1c',
//         text: '#ac7fa3'
//       }
//     }
//   }
// );
