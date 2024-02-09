<template>
  <div>
  <img alt="Vue logo" src="./assets/logo.png">
    <h3> {{ user.first_name }} {{ user.last_name }}</h3><!-- modo normal -->
    <h3>{{ fullName }}</h3> <!--propriedade computada com compositoin api-->

    <button @click="MudarNomeFirstN(),MudarLastN()"> mudar nome</button>
  </div>
</template>

<script>

import { ref,computed,watch } from 'vue';
export default {
  name: 'App',
  components: {
    
  },
    setup(){ // trabalhando com composition
        const user=ref({ // decalração do objeto reativo 
            first_name:'Jon',
            last_name:'Snow'
          })

          const fullName = computed(()=> {
            
            return `${user.value.first_name} ${user.value.last_name}`
          })
          const MudarNomeFirstN = ()=> { // mudar nome  com arrow function
            user.value.first_name = 'Jairo'
           
          }
          function MudarLastN(){ // mudar nome com função normal
            user.value.last_name = 'Rocha'
          }

          watch(user, ()=>{ // vamos observar as mudanças do objeto user
            console.log("user esta assistido");
          },
          { 
            deep:true
          }) // o comando deep:true permiite que o watch faça uma observação profunda, inchergando mudanças de propriedades dentro de um objeto

          

          return{ // retorno dos objetos reativos
              user,
              fullName,
              MudarNomeFirstN,
              MudarLastN
          }

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
