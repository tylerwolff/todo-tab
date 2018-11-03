import React from "react";
import "./TodoInput.css";

export default props => {
  return <input type="text" className="todo__input" {...props} />;
};
