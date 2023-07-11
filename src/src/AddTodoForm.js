import React, { useState } from 'react';

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
    <form onSubmit={handleAddTodo}>
      <div>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          type="text"
          value={todoTitle}
          onChange={handleTitleChange}
        />
      </div>
      <div className="button">
        <button
          type="submit"
          style={{
            backgroundColor: 'steelblue',
            color: 'white',
            borderRadius: '5px',
            marginTop: '10px',
          }}
        >
          Add Todo
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
