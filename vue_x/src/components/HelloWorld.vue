<template>
  <div class="hello">
    <h3>{{ $store.state.user.first_name }} {{ $store.state.user.last_name }}</h3>
    <h3>{{ $store.state.user.email }}</h3> <!-- obs que aquii nos não precisamos usar o this.$, como fiizemos dentro da função created()-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    console.log("helloWolrd",this.$store.state.user) // aqui nos fazemos um teste pra saber se nossos dados estaão sendo acessados deste local
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
