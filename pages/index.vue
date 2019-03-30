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
      input: "",
      isDark: true,
      show: true,
      newTodo: ""
    };
  },
  async fetch({ store }) {
    await store.dispatch("todos/fetchTodos");
  },
  mounted() {
    console.log("mounted");

    /*
    console.log("mounted");

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(json =>
        //console.log("there is currently " + json.length + " todos")
        console.log(json)
      );
      */

    /*const { data } = this.$axios.$get(
      "https://jsonplaceholder.typicode.com/todos"
    );*/
    //console.log(data);
    //test action with params
    //this.$store.dispatch("todos/addTodo", "oui");
  },
  computed: {
    ...mapState(["todos/todos"]),

    ...mapGetters(["todos/todos"]) // mapstate  to do
  },
  methods: {
    addTodo(e) {
      const text = e.target.value;
      if (text.trim()) {
        this.$store.commit("todos/add", { text });
      }
      e.target.value = "";
    }
    /*
    ...mapMutations({
      toggle: "todos/toggle"
    })
    */
  }
};
</script>

<style scoped>
</style>
