import React from "react";
import "./App.css";
import TodoList from "./components/TodoList"; 
import AddTodoForm from "./components/TodoForm";
const App = () => {
  return (
  
      <div className="App">
      <h1>Redux Todo List</h1>
        <h1>Add Todo</h1>
        <AddTodoForm />       
        <TodoList />
      </div>
  );
};

export default App;
