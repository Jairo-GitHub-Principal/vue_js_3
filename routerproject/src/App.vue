<template>
  <div class="container-fluid ">
    <nav class="nav justify-content-center">
      <ul class="nav">
        <li class="nav-item" >
          <a class="nav-link active" aria-current="page" >
            <router-link to="/" style="text-decoration: none;">Home</router-link> 
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >
            <router-link :to="rotaDinamica" style="text-decoration: none;">About</router-link> <!-- rota dinamica-->
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link :to="{name:'testeView'}" style="text-decoration: none;">teste view</router-link><!-- rota com objeto e Dinamica-->
            </a>
        </li>
      </ul>
    </nav>
    <router-view />
    <!-- essa tag renderiza os elementos relacionado as paginas dos link acima dentro da tag nav-->
  </div>
</template>

<script>
  export default{
    data(){
      return{
        rotaDinamica:{name: 'about'}
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
