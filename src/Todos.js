import React, { useState } from "react";
import Todo from "./Todo";

export default props => {
  const [newTodo, setNewTodo] = useState("");
  const { todos, setTodos } = props;

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const toggleTodo = todo => {
    setTodos(
      todos.reduce((acc, t) => {
        if (t.id === todo.id) {
          acc.push({ ...t, isDone: !t.isDone });
        } else {
          acc.push(t);
        }

        return acc;
      }, [])
    );
  };

  return (
    <div>
      <ul>
        {todos.map((t, index) => (
          <Todo key={index} todo={t} onToggle={toggleTodo} />
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          setTodos([
            ...todos,
            { id: new Date().toISOString(), value: newTodo, isDone: false }
          ]);
          setNewTodo("");
        }}
      >
        <input type="text" value={newTodo} onChange={handleChange} />
      </form>
    </div>
  );
};
