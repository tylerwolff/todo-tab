import React from "react";

export default props => {
  return (
    <ul>
      {props.todos.map((t, index) => (
        <li key={index}>{t.value}</li>
      ))}
    </ul>
  );
};
