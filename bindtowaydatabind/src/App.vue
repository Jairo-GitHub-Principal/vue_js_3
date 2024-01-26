<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ToWayDataBind/>
  <DataBind/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DataBind from './components/DataBind.vue';
import ToWayDataBind from './components/ToWayDataBind.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    DataBind,
    ToWayDataBind
   
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
</style>
