<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
  <input type="text" v-model="name"><br>
  {{ name }}
</div>
  <div>
      <select v-model="pageCount">
        
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select><br>
      {{ pageCount }}
  </div>

  <div>
    <input 
    v-model="user.first_name" 
    type="text"><br>

    <input 
    v-model="user.last_name" 
    type="text"><br>

    {{ user.first_name }} {{ user.last_name }}
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  data(){
    return{
      name:'',
      pageCount:5,
      user:{
        first_name:'',
        last_name:'',
      }
    }
  },
  watch:{ 
  name(vl){ // esta observando a propriedade name declarada dentro do data(){} 
  if(vl.length >=3){

    this.saveUserName()
  }
      
   },
   pageCount(){
    this.changePages()
   },

   user:{   // nesse caso tivemos que usar o user como objeto, e não como função,pois como função o observador não inchergaria as proprriedades do objeto, e consequentimente não reagiria a suas mudanças 
    handler(){
      console.log("user alterado")
    },
    deep:true
   }    
},
    methods:{
      saveUserName(){
        console.log('ajax');
       console.log(this.name);
      },
      changePages(){
        console.log("ajax changPage");
        
      }
    }




}

// observador

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
