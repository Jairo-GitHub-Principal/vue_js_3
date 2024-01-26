<template>
 
  <div id="app">
    <TheHeader  v-show="showHeader"    />
    <UnicHeader v-if="showUnicHeader"/>
    

    <div>
    <img  src="./assets/logo.png" >
    <br>

    <h1>{{ imgName }}</h1>
  </div>
  <img v-bind:src="srcImg"/>
    <br>

    <div class="containerTodos">
      <div class="todos"
           v-for="(obj,index) in todos"
           v-bind:key="obj.id">
         indice {{ index }} = {{ obj.title }}
      </div>
    </div>

    <div v-show="showNametrue">
      Nome: {{ firstName }} <br>
      Sobrenome:{{ lastName }}
    </div>

    <div v-if="accessLevel === 'admin'">Admin</div>
    <div v-else-if="accessLevel ==='marketing'">Marketing</div>
    <div v-else>Usuario comum</div>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <TheFooter></TheFooter>
    
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TheHeader from './components/TheHeader.vue';
import UnicHeader from './components/UnicHeader.vue';
import TheFooter from './components/TheFooter.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    TheHeader,
    UnicHeader,
    TheFooter
  },
  // eslint-disable-next-line 
  data(){
    return{
    showHeader:true,
    showUnicHeader:true,
    firstName:"jhon ", // variavel sendo usada para exibir msg no template ou na pagina, processo chamado interpolação
    lastName: "snow", 

    showNamefalse: true, // variavel sendo usada para armazenar o comando true ou false, que mostra ou esconde o elemento div com o nome e sobrenome
      
    accessLevel:"marketing",


     imgName:"Vue",
     srcImg:"https://via.placeholder.com/600/92c952",

    todos:[
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
    ],

    




    


    
  }

}
 
}
</script>

<style>
.containerTodos{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.todos{
  text-align: left;
  width: 600px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
