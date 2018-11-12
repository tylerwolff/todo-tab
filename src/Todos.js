import React, { useState } from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';
import './Todos.css';

export default props => {
  const [newTodo, setNewTodo] = useState('');
  const { todos, setTodos } = props;

  const handleChange = e => {
    setNewTodo(e.target.value);
  };

  const addTodo = text => {
    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        value: text,
        isDone: false,
        completedAt: null,
      },
    ]);
  };

  const toggleTodo = todo => {
    setTodos(
      todos.reduce((acc, t) => {
        if (t.id === todo.id) {
          acc.push({
            ...t,
            isDone: !t.isDone,
            completedAt: new Date(),
          });
        } else {
          acc.push(t);
        }

        return acc;
      }, [])
    );
  };

  const deleteTodo = todo => {
    setTodos(
      todos.reduce((acc, t) => {
        if (t.id === todo.id) {
          return acc;
        }

        return [...acc, t];
      }, [])
    );
  };

  const updateTodo = (todo, newValue) => {
    setTodos(
      todos.reduce((acc, t) => {
        if (t.id === todo.id) {
          acc.push({
            ...t,
            value: newValue,
          });
        } else {
          acc.push(t);
        }

        return acc;
      }, [])
    );
  };

  return (
    <div className="todos">
      <ul className="todos__list">
        {todos.map((t, index) => (
          <Todo
            key={index}
            todo={t}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ))}
      </ul>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo(newTodo);
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
