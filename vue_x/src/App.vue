<template>
  <main>
    <div class="border border-primary border-3 p-3 m-5">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      <button @click="updateUser()">Atualizar perfil</button>
    </div>

    <div
      id="app-products"
      class="border border-primary border-3 p-3 m-5 d-flex"
    >
      <AppProducts />
    </div>

    <div>
      <div>
        <h4>carrinho</h4>
        <br />

        <h5>quantidade de item no carrinho = {{ $store.state.cart.length }}</h5>
        <h5>valor total dos itens do carrinho = {{ $store.getters.total }}</h5>

        <div>
              <pre>
            {{ $store.state.cart }}
          </pre>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppProducts from "./components/Products/AppProducts.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    AppProducts,
  },
  created() {
    // essa função é mais apropriada para fazer debug,
  },
  methods: {
    updateUser() {
      // atualiza trabalha com os metodos do escopo de mutations do stored
      const newUser = {
        // aqui eu fiz uma inserção de dados na constante newUser para atualizar dados existentes la no meu state, em store
        first_name: "Jairo",
        last_name: "Cesar",
        email: "jairo@cesar.com",
      };
      this.$store.commit("storedUser", newUser); // aqui estamos enviando os os dados atuais que acabamos de add na noss const newUser
      // la para a sessão mutation, com uso da função commit() e la pegaremos esses dados e
      // faremos a atualização dos dados existentes
    },
  },
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
