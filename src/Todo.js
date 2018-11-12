import React, { useState } from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import './Todo.css';

export default props => {
  const [isEditing, setIsEditing] = useState(false);
  const { todo, onToggle, onDelete, onUpdate } = props;

  const handleKeyDown = e => {
    if (e.key === 'Enter') setIsEditing(false);
  };

  return (
    <li className={`todo ${todo.isDone && 'todo--done'}`}>
      <button
        type="button"
        onClick={() => onToggle(todo)}
        className="todo__check"
      >
        {todo.isDone ? <FaRegCheckCircle /> : <FaRegCircle />}
      </button>
      {isEditing ? (
        <input
          type="text"
          className="todo__inputField"
          value={todo.value}
          onKeyDown={handleKeyDown}
          onChange={e => onUpdate(todo, e.target.value)}
          onBlur={() => setIsEditing(false)}
          autoFocus={true}
        />
      ) : (
        <span className="todo__text" onClick={() => setIsEditing(true)}>
          {todo.value}
        </span>
      )}
      <button
        type="button"
        className="todo__remove"
        onClick={() => onDelete(todo)}
      >
        <MdClose />
      </button>
    </li>
  );
};
