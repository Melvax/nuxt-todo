<template>
  <v-list two-line subheader>
    <v-container xs12 lg7>
      <v-flex xs12>
        <v-text-field
          clearable
          color="white"
          v-model="newTodo"
          id="newTodo"
          name="newTodo"
          label="Type your task"
          @keyup.enter="addTodo"
        ></v-text-field>

        <v-subheader class="subheading" v-if="myuser.length == 0">You have 0 Tasks, add some</v-subheader>
        <v-subheader class="subheading" v-else="myuser.length >= 1">Your Tasks</v-subheader>
        <div v-for="(todo, i) in myuser">
          <v-list-tile avatar>
            <v-list-tile-action @click="completeTodo(todo)">
              <v-checkbox v-model="todo.completed" @click.prevent></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title
                :class="{
                    done: todo.completed
                    }"
                class="title"
              >{{todo.title | capitalize}}</v-list-tile-title>
              <v-list-tile-sub-title>user: {{todo.userId}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-btn icon ripple color="red" @click.self="removeTodo(i)">
              <v-icon class="white--text">close</v-icon>
            </v-btn>
          </v-list-tile>
        </div>
      </v-flex>
    </v-container>
  </v-list>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      newTodo: "",
      todo: []
    };
  },
  computed: mapGetters({
    myuser: "todos/user8",
    completed: "todos/completed",
    todos: "todos/todos"
  }),
  mounted() {
    console.log("child mounted");
    this.$store.dispatch("todos/modify");
    console.log("modifying");
  },
  methods: {
    async completeTodo(todo) {
      await this.$store.dispatch("todos/completeTask", todo);
      console.log("complete task with this index : " + todo.id);
    },
    addTodo() {
      var value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }

      this.$store.dispatch("todos/addTodo", this.newTodo);

      this.newTodo = "";
    },
    removeTodo(index) {
      console.log("remove todo Todolist : " + index);
      //this.todos.splice(index, 1);
      this.$store.dispatch("todos/removeTodo", index);
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
<style>
.done {
  text-decoration: line-through;
}
</style>
