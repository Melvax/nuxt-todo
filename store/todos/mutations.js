export default {
  ADD_TODO(state, text) {
    /*
    state.list.push({
      text,
      done: false
    });
    */

    state.todos.unshift({
      title: text,
      completed: false,
      userId: 8,
      id: 42
    });

    console.log("add todo mutation called and text : " + text);
  },
  removeTodo(state, index) {
    console.log("mutation remove todo with index :" + index);
    state.todos.splice(index, 1);
  },
  completeTask(state, todo) {
    todo.completed = !todo.completed;
  },

  TOGGLE(state, todo) {
    //todo.done = !todo.done;
    //console.log("toggle mutation called");
  },
  set_todos(state, payload) {
    state.todos = payload;
    //console.table(state.list);
    //console.log("filtering to user 10");
    //console.table(state.todos);
  },
  modify(state) {
    fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: "melvax",
        completed: true,
        userId: 10
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(response => console.log(response));
    //.then(json => state.todos.push(json))
  }
};
