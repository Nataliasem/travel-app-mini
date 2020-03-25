<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/brazil" class="nav-link">Brazil</router-link>
      <router-link to="/hawaii" class="nav-link">Hawaii</router-link>
      <router-link to="/jamaica" class="nav-link">Jamaica</router-link>
      <router-link to="/panama" class="nav-link">Panama</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  .nav-link {
    padding: 10px;
  }
</style>
