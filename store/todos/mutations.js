export default {
  ADD_TODO(state, text) {
    /*
    state.list.push({
      text,
      done: false
    });
    */

    state.todos.push({
      title: text,
      completed: false,
      user: 10,
      id: 22
    });

    console.log("add todo mutation called and text : " + text);
  },

  TOGGLE(state, todo) {
    //todo.done = !todo.done;
    //console.log("toggle mutation called");
  },
  set_todos(state, payload) {
    state.todos = payload;
    //console.table(state.list);
    console.log("filtering to user 10");
    console.table(state.todos);
  }
};
