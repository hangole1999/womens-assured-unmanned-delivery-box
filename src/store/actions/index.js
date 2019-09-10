
export default {
  setIdentity ({commit}, {identity, then, err, final}) {
    try {
      commit('setIdentity', {identity, then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  },
  setPassword ({commit}, {password, then, err, final}) {
    try {
      commit('setPassword', {password, then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  },
  setProgressStack ({commit}, {val, then, err, final}) {
    try {
      commit('setProgressStack', {val, then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  },
  addProgressStack ({commit}, {val, then, err, final}) {
    try {
      commit('addProgressStack', {val, then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  },
  showSnackbar ({commit}, {message, timeout, color, then, err, final}) {
    try {
      commit('showSnackbar', {message, timeout, color, then});
    } catch (error) {
      if (typeof err === 'function') {
        err(error);
      }
    }
    if (typeof final === 'function') {
      final();
    }
  }
};
