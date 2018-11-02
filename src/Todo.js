import React from "react";

export default props => {
  const { todo, onToggle } = props;

  return (
    <li>
      <button onClick={() => onToggle(todo)}>
        {todo.isDone ? "✔" : "[ ]"}
      </button>
      {todo.value}
    </li>
  );
};
