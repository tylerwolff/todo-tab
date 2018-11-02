import React, { useState } from "react";
import Todos from "./Todos";
import "./App.css";

export default props => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todos__container">
      <Todos todos={todos} onChange={setTodos} />
    </div>
  );
};
