import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo === "") {
      alert("Please enter a task!");
      return; // Prevent adding empty tasks
    }

    const newTodo = {
      id: `${todo}-${Date.now()}`,
      todo,
      completed: false, // Default completion status
    };

    if (editId) {
      // Update existing task
      const updatedTodos = todos.map((t) =>
        t.id === editId ? newTodo : t
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    // Add new task
    setTodos([newTodo, ...todos]);
    setTodo("");
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  const handleMarkComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const totalTasks = todos.length;
  const ongoingTasks = todos.filter((todo) => !todo.completed).length;
  const completedTasks = totalTasks - ongoingTasks;

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <p>
          Total Tasks: {totalTasks} | Ongoing: {ongoingTasks} | Completed:{" "}
          {completedTasks}
        </p>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleMarkComplete={handleMarkComplete}
        />
      </div>
    </div>
  );
};

export default App;
