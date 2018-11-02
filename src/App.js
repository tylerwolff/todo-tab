import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import Todos from "./Todos";
import "./App.css";

export default props => {
  const [todos, setTodos] = useState([]);
  const [time, setTime] = useState(new Date());

  useEffect(
    () => {
      document.title = `${todos.length} tasks today`;
    },
    [todos]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 30000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="App">
      <h1 className="todos">{format(time, "dddd HH:mm")}</h1>
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
};
