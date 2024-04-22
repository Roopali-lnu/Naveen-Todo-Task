// src/components/TodoList.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/TodoSlice.js";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos); // Ensure correct path to todos array
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul>
    <h1>Todo List</h1>
      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>          
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default TodoList;
