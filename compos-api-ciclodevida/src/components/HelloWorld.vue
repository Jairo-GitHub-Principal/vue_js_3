<template>
   <div >
      <h3>Ciclo de vida</h3>
      <h3>{{ name }}</h3>
    </div>

</template>

<script>
import { ref,$el,onBeforeMount,onMounted,onBeforeUnmount, onUnmounted } from "vue";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  
  setup() {
    // em composition não precisamos usar no ciclo de vida o beforeCreated e created, pois ambos estão abstraido na função setup()

    // Ciclo de vida:
    /***
     * Ganchos de ciclo de vida são uma janela para ver como a biblioteca
     * que você está usando funciona nos bastidores. Os ganchos de ciclo de vida
     * permitem saber quando seu componente é criado, adicionado ao DOM, atualizado ou destruído.
     *
     */
    const name = ref("jairo");
    let dom = ref($el);

    

    onBeforeMount(() => {
      console.log("antes de montar: ", name.value);
      console.log("Dom", dom.value);
    });
    onMounted(() => {
      console.log("montado: ", name.value);
      console.log("Dom", dom.value);
    });
    onBeforeUnmount(() => {
      console.log("antes de desmontar : ");
      console.log("Dom",$el);
    });
    onUnmounted(() => {
      console.log("desmontado: ");
      console.log("Dom",$el);
    });
    

    return {
      name,
      dom
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
