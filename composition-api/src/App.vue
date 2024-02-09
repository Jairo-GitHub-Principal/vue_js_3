<template>
  <dv>
    <img @click="changeName()" alt="Vue logo" src="./assets/logo.png" />

    <div>
       <AppProducts/>
    </div>

    <div>
      <h3>{{ n }}</h3>
      <h3>{{ n2 }}</h3>
      <h3>{{ user.first_name }} {{ user.last_name }}</h3>
      <h3>{{admin.f_name }} {{ admin.l_name }}</h3>
     
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </dv>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppProducts from "./components/products/AppProducts.vue"
import { ref,reactive } from 'vue'

export default {
  name: "App",
  components: {
    HelloWorld,
    AppProducts
  },
  setup(){  // essa function setut() substituii o data() e tuto que for decarado aqui, dever ser  retornada, como um objeto, dentro de return{} para poder ser chamada dentro do template
    
    let n = 'jon' // escopo local
    var n2="jairo" // escopo global
    
    const user= reactive({ // procure intender a diferença entre reactive  e ref
      first_name: 'jon',
      last_name:'snow'
      })
      
      const admin = ref({
        f_name:"admim",
        l_name: "master"
      })
    
    const changeName = ()=>{
         
      user.first_name = "jairo" // obs.: que no setup até aqui não temos uma propriedade reativa
      user.last_name = "santos"

      admin.value.f_name = "ADM" // obs.: o ref exige que se use o comando .value para depois acessar a propriiedade que deseja alterar 
      admin.value.l_name = "Junior"

      n = 'jairo'
      
    }

    
    
    return {
      user,
      n,
      n2,
      admin,
      changeName,

      
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
