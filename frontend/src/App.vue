<template>
  <div id="app">
    <OnboardList />
  </div>
</template>

<script>
import OnboardList from './components/OnboardList.vue'

export default {
  name: 'app',
  components: {
    OnboardList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style src='./assets/style.css'></style>

