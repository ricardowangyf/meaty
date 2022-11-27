<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./view/HomePage.vue";
export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
body {
  margin: 0;
}
</style>