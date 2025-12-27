import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import "./TodoActions.css";

function RemoveTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="todo-list">
      <h3>Your Todos</h3>

      {todos.length === 0 && <p>No todos available</p>}

      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <button
            className="delete-btn"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default RemoveTodo;
