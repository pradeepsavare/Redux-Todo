import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import "./AddTodo.css";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    dispatch(addTodo(input));
    setText(""); 
  };

  return (
    <form className="todo-form" onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="Enter your todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodo;
