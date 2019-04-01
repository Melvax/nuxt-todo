<template>
  <section class="container">
    <v-content>
      <TodoList/>
    </v-content>
  </section>
</template>
<script>
import Vue from "vue";
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";
import TodoList from "~/components/TodoList";

//global.v = Vuex;

export default {
  watchQuery: true,
  components: { TodoList },
  data() {
    return {
      show: true,
      newTodo: ""
    };
  },
  async fetch({ store }) {
    await store.dispatch("todos/fetchTodos");
  },
  mounted() {},
  computed: mapGetters({
    todos: "todos/todos"
  })
};
</script>

<style scoped>
</style>
