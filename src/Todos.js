import React, { useState } from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import './Todos.css';

export default props => {
  const [newTodo, setNewTodo] = useState('');
  const { todos, onAdd, onUpdate, onToggle, onRemove } = props;

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="todos">
      <ul className="todos__list">
        {todos.map((t, index) => (
          <Todo
            key={index}
            todo={t}
            onToggle={onToggle}
            onDelete={onRemove}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          onAdd(newTodo);
          setNewTodo('');
        }}
      >
        <TodoInput
          value={newTodo}
          onChange={handleChange}
          placeholder={'Add task'}
          autoFocus={!todos.length}
        />
      </form>
    </div>
  );
};
