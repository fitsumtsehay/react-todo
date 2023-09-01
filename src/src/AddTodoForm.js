import React, { useState } from 'react';
import { InputWithLabel } from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    onAddTodo(newTodo);
    setTodoTitle('');
  };

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  return (
    <form onSubmit={handleAddTodo} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'left'}}>
        <InputWithLabel
          id="title"
          label="Title: "
          type="text"
          value={todoTitle}
          onChange={handleTitleChange}
          style={{ marginRight: '10px' }} 
        />
   
      <div className="button">
        <button
          type="submit"
          className="action-button"
          style={{ marginLeft: '10px' }}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
