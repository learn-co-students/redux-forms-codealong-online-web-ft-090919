export default function manageTodo(state = {
  todos: [],
}, action) {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, action.todo];
        default:
          return state;
    }
}
