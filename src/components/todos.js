import React from "react";

const Todos = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
