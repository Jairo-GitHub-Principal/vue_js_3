<!-- esse é o componente filho esse componente sera importado no componente dentro do componente vue.js, e 
assim sera chamado entre tags dentro do template do componente vue.js, como esse componente sera aninhado 
dentro de outro componente, defiinimos esse componente(BaseAlert) como component filho-->

<template>
  <div>
    <div :class="baseClass">
      <div v-if="$slots.title"> <!-- se $slots.title for verdade sera exibido a diiv com o slot name=title -->
        <slot name="title" />
      </div>
      <button style="background: rgb(205, 0, 0); color: aliceblue; font-weight: 900" @click="fechaAlert()"> <!--aqui chamamos  a função fechar alert-->
        X
      </button>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "test",
    },
  },
  computed: {
    baseClass() {
      return ["alert", this.variant ? `alert-${this.variant}` : ""];
    },
  },
  methods:{
    fechaAlert(){/** aqui criamos a função fecharAlert, chamaremos ela la encima no template, dentro do botão X 
                      e atravez do codigo abaixo enviaremos ela atravez desse component para o component vue.js, onde o evento dessa função sera capturado */
        console.log("fechou")
        this.$emit('fecharAlert') /* atravez dessa função $emit() enviaremos o evento da função fecharAlerta para ser capturado em outro component
                                     onde nosso component BaseAlert for chamado, com isso sera possivel capturar o evento da função 
                                     BaseAlert dentro de outro component e enteragiir com o mesmo */
    }
  }
};
</script>

<style scoped>
.alert {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 5px;
  border-radius: 6px;
  color: gray;
  background: #ddd;
}

.alert-success {
  background: #42b983;
  color: #fff;
}
.alert-danger {
  background: red;
  color: white;
}
.alert-warning{
    background: orange;
  color: white;
}
</style>