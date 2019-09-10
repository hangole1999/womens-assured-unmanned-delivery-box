
export default {
  setIdentity (state, {identity, then}) {
    state.identity = identity;

    if (typeof then === 'function') {
      then();
    }
  },
  setPassword (state, {password, then}) {
    state.password = password;

    if (typeof then === 'function') {
      then();
    }
  },
  setProgressStack (state, {val, then}) {
    state.progress.stack = val;
    state.progress.show = state.progress.stack > 0;
    state.progress.stack = state.progress.stack < 0 ? 0 : state.progress.stack;

    if (typeof then === 'function') {
      then();
    }
  },
  addProgressStack (state, {val, then}) {
    state.progress.stack += val;
    state.progress.show = state.progress.stack > 0;
    state.progress.stack = state.progress.stack < 0 ? 0 : state.progress.stack;

    if (typeof then === 'function') {
      then();
    }
  },
  showSnackbar (state, {message, timeout, color, then}) {
    state.snackbar.show = true;
    state.snackbar.color = color || 'info';
    state.snackbar.timeout = timeout || 10000;
    state.snackbar.message = message;

    if (typeof then === 'function') {
      then();
    }
  }
};
