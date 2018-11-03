import React from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./Todo.css";

export default props => {
  const { todo, onToggle, onDelete } = props;

  return (
    <li className={`todo ${todo.isDone && "todo--done"}`}>
      <button
        type="button"
        onClick={() => onToggle(todo)}
        className="todo__check"
      >
        {todo.isDone ? <FaRegCheckCircle /> : <FaRegCircle />}
      </button>
      <span className="todo__text">{todo.value}</span>
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
