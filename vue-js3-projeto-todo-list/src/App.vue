<template>
  <!--content-->
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <!--TodoSpinner-->
      <TodoSpinner v-if="loading" />

      <div v-else>
        <!--Todoform -->
        <TodoForm />

        <!-- Todo items -->
        <TodoItems />

        <!-- Todo empty -->
        <TodoEmpty />
      </div>
    </div>
  </div>
  <!--/ Content -->
</template>

<script>
import TodoForm from "./components/TodoForm.vue";
import TodoSpinner from "./components/TodoSpinner.vue";
import TodoItems from "./components/TodoItems.vue";
import TodoEmpty from "./components/TodoEmpty.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    TodoSpinner,
    TodoForm,
    TodoItems,
    TodoEmpty,
  },

  data() {
    return {
      loading: false,
    };
  },
  created() {
    this.loading = true;
    // abaiixo temos o codigo do ajax
    axios
      .get("http://localhost:3000/todos")
      .then((response) => {
        this.$store.commit("storeTodos", response.data);
      })
      // abaixo temos o codigo que vai finalizar o loading
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>