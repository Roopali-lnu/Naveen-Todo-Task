// src/components/AddTodoForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/TodoSlice';

const AddTodoForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue.trim()));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
