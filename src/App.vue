<template>
  <div id="app">
    <TheNavigation />
    <transition name="fade">
      <router-view :key="$route.path"/>
    </transition>
  </div>
</template>

<script>
  import TheNavigation from './components/TheNavigation'

  export default {
    components: {
      TheNavigation
    }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>
