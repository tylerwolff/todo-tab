import React, { useState } from "react";

export default props => {
  const [todo, setTodo] = useState("");
  const { todos, setTodos } = props;

  const handleChange = e => {
    setTodo(e.target.value);
  };

  return (
    <div>
      <ul>
        {todos.map((t, index) => (
          <li key={index}>
            {t.isDone}
            {t.value}
          </li>
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          setTodos([...todos, { value: todo, isDone: false }]);
          setTodo("");
        }}
      >
        <input type="text" value={todo} onChange={handleChange} />
      </form>
    </div>
  );
};
