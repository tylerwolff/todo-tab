export default (state, action) => {
  switch (action.type) {
    case 'addTodo':
      return {
        todos: [
          ...state.todos,
          {
            id: new Date().toISOString(),
            value: action.todo,
            isDone: false,
            completedAt: null,
          },
        ],
      };
    case 'updateTodo':
      return {
        todos: state.todos.reduce((acc, t) => {
          if (t.id === action.todo.id) {
            acc.push({
              ...t,
              value: action.value,
            });
          } else {
            acc.push(t);
          }

          return acc;
        }, []),
      };
    case 'toggleTodo':
      return {
        todos: state.todos.reduce((acc, t) => {
          if (t.id === action.todo.id) {
            acc.push({
              ...t,
              isDone: !t.isDone,
              completedAt: new Date(),
            });
          } else {
            acc.push(t);
          }

          return acc;
        }, []),
      };
    case 'removeTodo':
      return {
        todos: state.todos.filter(t => t.id !== action.todo.id),
      };
    case 'resetTodos':
      return { todos: action.todos };
    default:
      return state;
  }
};
