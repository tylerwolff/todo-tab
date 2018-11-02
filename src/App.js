import React, { useState } from "react";
import { format } from "date-fns";
import Todos from "./Todos";
import "./App.css";

export default props => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1 className="todos">{format(new Date(), "dddd HH:mm")}</h1>
      <Todos todos={todos} onChange={setTodos} />
    </div>
  );
};
