<template>
  <main>
    
    <div  v-if="showdiv">
      <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld/>
  </div>
    <button @click="showdiv = !showdiv">toggle</button>
  </main>
</template>

<script>
import { ref,$el} from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: { HelloWorld},

  setup() {
    // em composition não precisamos usar no ciclo de vida o beforeCreated e created, pois ambos estão abstraido na função setup()

    // Ciclo de vida:
    /***
     * Ganchos de ciclo de vida são uma janela para ver como a biblioteca
     * que você está usando funciona nos bastidores. Os ganchos de ciclo de vida
     * permitem saber quando seu componente é criado, adicionado ao DOM, atualizado ou destruído.
     *
     */
  
    let dom = ref($el);

    const showdiv = ref(true);

    
    
    

    return {
      
      dom,
      showdiv,
    };
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
