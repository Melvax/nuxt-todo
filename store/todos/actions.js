export default {
  addTodo({ commit }, text) {
    console.log("add todo action called" + text);
    commit("ADD_TODO", text);
  },
  removeTodo({ commit }, index) {
    console.log("removeTodo " + index);
    commit("removeTodo", index);
  },

  toggle({ commit }, todo) {
    //todo.done = !todo.done;
  },
  async completeTask({ commit }, todo) {
    commit("completeTask", todo);
    const response = await this.$axios
      .$patch("https://jsonplaceholder.typicode.com/todos/" + todo.id, {
        completed: !todo.completed
      })
      .catch(error => {
        //s'il y a une erreure sur le serveur => rétablir la checkbox
        commit("completeTask", todo);
      });
  },
  async fetchTodos({ commit }) {
    const data = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    //console.log("fetch todo action");
    commit("set_todos", data);
  },
  modify({ commit }) {
    commit("modify");
  }
};
