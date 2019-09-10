<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
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
  background: black;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
}

a {
  color: inherit !important;
  text-decoration: none !important;
}
</style>
