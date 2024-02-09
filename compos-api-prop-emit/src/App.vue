<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <AppButton data-vue="Jon"  @update="getUpdate" variant="jairo">
      Save <!-- o texto "Save" sera enserido no slot padrão declarado dentro do template do component AppButton-->
      <template #icon>Icon</template>
    </AppButton>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppButton from "./components/AppButton.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AppButton
  },
  setup(){
    const getUpdate =(dadoDeAppButton)=>{
      console.log('getUpdate', dadoDeAppButton) 
    }

    return{
      getUpdate
    }
  }
};
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
