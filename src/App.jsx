import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./actions/todoActions";
import Todos from "./components/todos";
import "./App.css";

function App() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const handleInputChane = e => {
    setUserInput(e.target.value);
  };
  const handleSubmit = () => {
    if (!userInput) return;
    dispatch(addTodo(userInput));
    setUserInput("");
  };
  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChane} />
      <button onClick={() => handleSubmit()}>{"➕"}</button>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
