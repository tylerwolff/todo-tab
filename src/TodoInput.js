import React from 'react';
import { FaRegCircle } from 'react-icons/fa';
import './TodoInput.css';

export default props => {
  return (
    <div className="todo__input">
      <FaRegCircle color="#757575" className="todo__inputIcon" />
      <input type="text" className="todo__inputField" {...props} />
    </div>
  );
};
