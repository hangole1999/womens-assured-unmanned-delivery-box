<template>
  <v-app id="app">
    <v-progress-linear v-if="$store.getters.progress.show" :indeterminate="true" class="main-progress" height="2"></v-progress-linear>
    <v-snackbar v-model="$store.getters.snackbar.show" :color="$store.getters.snackbar.color" :multi-line="$store.getters.snackbar.mode === 'multi-line'" :timeout="$store.getters.snackbar.timeout" :vertical="$store.getters.snackbar.mode === 'vertical'" top right>
      {{ $store.getters.snackbar.message }}
      <v-btn dark text @click="$store.getters.snackbar.show = false">Close</v-btn>
    </v-snackbar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@font-face {
  font-family: 'Do Hyeon';
  src: url('./fonts/DoHyeon-Regular.ttf');
}
@font-face {
  font-family: 'Jua';
  src: url('./fonts/Jua-Regular.ttf');
}

* {
  outline: none;
  vertical-align: middle;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(124, 124, 124, 0.5);
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(124, 124, 124, 0.5);
}

html, body {
  margin: 0px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
}

a {
  color: inherit !important;
  text-decoration: none !important;
}

#app {
  /* background-color: #fedbf8; */
  background-color: rgb(254, 215, 49);
}

.dohyeon,
.dohyeon * {
  font-family: 'Do Hyeon', sans-serif !important;
}

.jua,
.jua * {
  font-family: 'Jua', sans-serif !important;
}

.text-back {
  background: black;
  color: white;
}

.full-height {
  height: 100%;
}

.full-button {
  width: 100% !important;
  height: 100% !important;
}
</style>
