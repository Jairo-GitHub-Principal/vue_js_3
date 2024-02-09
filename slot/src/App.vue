<template>
 
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Header msg="eu sou o header">
      <template v-slot:title>
        home
      </template>

      <template v-slot:description>
        <h2>description</h2>
      </template>
            
      content do header - menu... <!--esse esta sendo injtado no slot padrão onde ou seja: o slot que não tem nenhuma name ou atributo definido para o identifiica-lo -->
    </Header>

    <Teste msg="teste de msg passad para o componente "/>
  
  <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>

  
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/HeaderComponet.vue";
import Teste from "./components/teste.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
    Teste
  },
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
