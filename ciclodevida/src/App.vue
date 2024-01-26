<template>
 <TheHeader v-if="showHeader"/>
 <div>
  <input v-model="name" type="text"><br>
  <div>
    <h1>{{ name }}</h1>
  </div>
  
 </div>
 
  <button @click="showHeader = !showHeader">  <!-- mudamos o estado da variavel showheader, sem a nescessidade do uso de função, e com isso ativamos e dasativamos o header-->
    ativar e desativar o header 
  </button>
  <br>
  <button @click="togleHeader()"> <!-- mudamos o estado da variavel usando uma função ou metodo-->
    togleHeader
  </button>
  
</template>

<script>

import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },

  data(){
      return{
        name:'Jon snow',

        showHeader:true,// variavel que armazena o valor inicial do TheHeader
      }
  },
  methods:{ //
    togleHeader(){ // metodo que ativa e desativa o theheader
      this.showHeader = !this.showHeader
    }
  },

  //Ciclo de vida de um componente

  // criação
        // preparar o componente
        // ajax, inicializar variaveis, não tem acesso ao template(Dom)
  //montagem
        // inicializar uma lib externa
        // precisa acesso ao template(Dom)
        // tem acesso ao template(Dom)
  // atualização
        // debug
        // update
  //desmontagem
        // desmontar o componente
        // remove tudo que for necessario (lib-destroyer)
        //para liberar memoria 

        // hooks
        beforeCreate(){ // antes de crear
            console.log('beforCreate')
            console.log('estado:',this.name)
            console.log('DOM:',this.$el)
        },
        created(){ // creado
          console.log('created')
          console.log('estado:',this.name)
          console.log('DOM:',this.$el)
        },
        beforeMount(){// antes de montar
          console.log('beforeMount')
          console.log('estado:',this.name)
          console.log('DOM:',this.$el)
        },
        mounted(){ // montado
          console.log('mounted')
          console.log('estado:',this.name)
          console.log('DOM:',this.$el)
        },

            beforeUpdate(){
                console.log('BeforeUpdate',this.name)
                
            },
            updated(){
                console.log('update',this.name)
               
            }
        // beforeUnmount(){// antes de desmontar 
        //   console.log('beforeUnmount')
        //   console.log('estado:',this.name)
        //   console.log('DOM:',this.$el)
        // },
        // unmounted(){ // desmontado
        //   console.log('unmounted')
        //   console.log('estado:',this.name)
        //   console.log('DOM:',this.$el)
        // }

        
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
