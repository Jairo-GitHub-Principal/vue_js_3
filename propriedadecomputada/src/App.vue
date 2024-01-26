<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p> abaixo temos o uso um objeto simples para exibir uma msg</p>
  {{ user }}

  <button @click="click">click</button>

  <div>
    {{ fullNameComputed }}
  </div>

  <div>
    {{ namefullMethod() }}
  </div>

  <div>
    <h2>To-dos incompletas</h2>
    <div>

      <div style="text-align: left;" v-for="(obj) in incompletasTodos" v-bind:key="obj.id">
        {{ obj.title }} <span>{{ obj.completed }}</span>
      </div>
    </div>

    <h2>To-dos completas</h2>

    <div>

      <div style="text-align: left;" v-for="(obj) in completasTodos" v-bind:key="obj.id">
        {{ obj.title }} <span>{{ obj.completed }}</span>
      </div>
    </div>


    <!-- o conteudo abaico nos lista todas as to-dos e nos permite interagir com elas marcando-as como completadas ou não, ou seja: false ou true--> 
    <h2>To-dos para serem verificadas</h2>
    <div>

      <div style="text-align: left;" v-for="(obj) in todos" :key="obj.id">
        <input 
          v-model="obj.completed"
          type="checkbox">
          {{ obj.title }}
       
      </div>
    </div>
  </div>

  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,

  },

  data() {
    return {
      user: { // objeto user
        first_name: 'Jon', // propriedades do objeto
        last_name: 'Snow'
      },

      todos: [
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
      ]
    }
  },
  computed: {
    fullNameComputed() {  // esse computa apenas uma vez, e so vai processar denovo, caso o valor ds propriedades mude, caso isso não ocorra o valor fica salvo em um cache
      return `${this.user.first_name} ${this.user.last_name}` // template string ou interpolação
    },

    // criar um filtro com compilted para exibir as propriedades do array de objetos todos, que não foram completadas ou seja, as com valores false
    incompletasTodos() {
      return this.todos.filter(todos => !todos.completed);
    },
    completasTodos() {
      return this.todos.filter(todos => todos.completed);
    }

  },


  methods: {
    click() {
      console.log(this.user)
    },

    namefullMethod() {  // toda vez que essa função for chamada ela sera processado ou computada para para exibir seus valores
      return `${this.user.first_name} ${this.user.last_name}` // template string ou interpolação
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
