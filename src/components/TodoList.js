import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit, handleMarkComplete }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo" key={t.id}>
          <span
            className="todoText"
            style={{
              textDecoration: t.completed ? "line-through" : "none",
              color: t.completed ? "green" : "black",
            }}
          >
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
          <button onClick={() => handleMarkComplete(t.id)}>
            {t.completed ? "Unmark" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
