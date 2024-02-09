<template>
  <div>
    <div>
      <!-- abaixo temos um component chamado dentro desse template, e atravez desse compnent que 
        instanciamos aqui dentro do template do component vue.js, nos vamos enviar dados para esse component(vue.js) e 
      assim caracterizamos o envio de dados do comonent filho para o compnent pai -->

      <!--
        Obs.: abaixo dentro do compnent AlertCompnent temos o v-if="showAlert" que a quem foi atribuido uma valor true ou false, quando ele for true
        o alerta sera exibido e quando ele for falso o alerta sera fecha, o valor de showAlert sera mudado dentro da função
        fecharA() pois quando ela for chama no click do botão X ela mudara o valor de showAlert de true para false, lembrando 
        que o botão X esta no component BaseAlert que aqui nos o apelidamos de AlertComponent, e o botão quando cliicado, ele
        envia a funcão fechar alert como um evento de click, e a esse evento de nome @fecharAlert()é atribuido a ele a funcção 
        fechar, que uma vez dentro do component AlertComponent altera o valor de showalert dentro do compnent AlertComponent para false 
        e o alerta é fechado.

        obs: o showAlert é declarado no compnent AlertCompnent atravez da diretiva v-if dentro do template do component vue.js
        portanto essa interação so acontece dessa forma dentro do template do component  vue.js

        e no caso do showalert  paara fechar o alerta, nos temos também o enviio de dados do compnent pai para o component filho
        e no caso do envio do evento do click fecharAlert, feito pela função $emit() la no compnent BaseAlert, nos temos 
        o envio de dados do compnent filho para o component pai 
      -->
      <AlertComponent  
      v-if="showAlert" 
      @fecharAlert="fecharA()" 
      :variant="variantValor"> <!-- component filho para compnent pai, aquii estamos recebendo a props variant, para que aqui nos possamos interagiar com a variant e alterar o seu valor, e assim alternar entre os diferentes alertas-->
        <template v-slot:title> <!--atravez do da diretiva v-slot nos chamaremod slot title se ele estiver presente dentro do componente BaseAlert,o conteudo do h1 que definimos aqui dentro desta tag template sera exibido-->
          <h1>alerta</h1>
        </template>
        
        <br />
    
      </AlertComponent>
    </div>

    <div>
      <button
        style="color: aliceblue; background: red; padding: 5px" @click="perigo()" >
        alert
      </button>
      <button style="color: aliceblue; background: orange; padding: 5px" @click="cuidado()">
        warning
      </button>
      <button style="color: aliceblue; background: greenyellow; padding: 5px" @click="sussesso()">
        success
      </button>
    </div>
   
  </div>
</template>

<script>
import AlertComponent from "./components/BaseAlert.vue";

export default {
  
  name: "App",
  components: {AlertComponent},
  data(){
    return{
      variantValor:'',
      showAlert:true,
    }
  },

  methods:{
    sussesso(){
      this.variantValor = 'success'
    },
    perigo(){
      this.variantValor = 'danger'
    },
    cuidado(){
      this.variantValor = 'warning'
    },
    fecharA(){
      console.log('on close')
      this.showAlert=false
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
