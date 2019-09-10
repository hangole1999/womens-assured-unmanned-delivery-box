import Vue from 'vue';
import Vuetify from 'vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/dist/vuetify.min.css';
// import 'vuetify/src/stylus/app.styl';

Vue.use(
  Vuetify,
  {
    iconfont: 'md',
    theme: {
      background: '#fedbf8',
      primary: '#000',
      secondary: '#000',
      accent: '#000',
      error: '#b71c1c',
      text: '#ac7fa3'
    }
  }
);
