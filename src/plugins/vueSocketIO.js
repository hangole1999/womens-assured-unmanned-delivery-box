
import Vue from 'vue';
import store from '@/store';
import VueSocketIO from 'vue-socket.io';

Vue.use(
  new VueSocketIO(
    {
      debug: true,
      connection: store.getters.server.socketIO.host,
      vuex: {
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
      }
    }
  )
);
