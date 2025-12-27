import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";
import "./TodoActions.css";

function UpdateTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = () => {
    if (editText.trim() === "") return;

    dispatch(updateTodo({ id: editId, text: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <div className="todo-list">
      <h3>Update Todos</h3>

      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          {editId === todo.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
              />
              <button className="update-btn" onClick={handleUpdate}>
                ✔
              </button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button
                className="edit-btn"
                onClick={() => {
                  setEditId(todo.id);
                  setEditText(todo.text);
                }}
              >
                ✏️
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default UpdateTodo;
