export default {
  addTodo({ commit }, text) {
    console.log("add todo action called" + text);
    commit("ADD_TODO", text);
  },

  toggle({ commit }, todo) {
    //todo.done = !todo.done;
  },
  async completeTask({ commit }, todo) {
    const response = await this.$axios.$put(
      "https://jsonplaceholder.typicode.com/todos/" + todo.id
    );
    console.log(response);
  },
  async fetchTodos({ commit }) {
    const data = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    //console.log("fetch todo action");
    commit("set_todos", data);
  }
};
