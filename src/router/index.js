import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

import Login from '@/views/Login';
import Delivery from '@/views/Delivery';
import Check from '@/views/Check';
import Complaint from '@/views/Complaint';
import WorngApproach from '@/views/WorngApproach';

Vue.use(Router);

const checkWorngApproach = () => (to, from, next) => {
  console.log(to);
  console.log(from);

  var dev = window.location.hostname === 'localhost';
  var loggedIn = store.getters.identity && store.getters.password;
  if (dev || loggedIn) {
    return next();
  }
  next('/worngApproach');
};

const storeIdentityAndGoLogin = () => (to, from, next) => {
  console.log(to.params.identity);

  if (to.params.identity) {
    store.dispatch('setPassword', {password: null});
    store.dispatch('setIdentity', {
      identity: to.params.identity,
      then: () => {
        next('/login');
      }
    });
  } else {
    checkWorngApproach(to, from, next);
  }
};

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/delivery/:identity', // EX) http://xxx.xxx/delivery/0x150f14991f9B890749BB4a635c3C8DF8a1D26b48
      props: true,
      name: 'DeliveryEnter',
      beforeEnter: storeIdentityAndGoLogin()
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/delivery',
      name: 'Delivery',
      component: Delivery,
      beforeEnter: checkWorngApproach()
    }, {
      path: '/check',
      name: 'Check',
      component: Check,
      beforeEnter: checkWorngApproach()
    }, {
      path: '/complaint',
      name: 'Complaint',
      component: Complaint,
      beforeEnter: checkWorngApproach()
    }, {
      path: '*',
      name: 'WorngApproach',
      component: WorngApproach
    }
  ]
});

export default router;
