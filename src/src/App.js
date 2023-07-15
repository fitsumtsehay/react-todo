import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div>
      <h1 style={{ marginBottom: '10px' }}>My Hacker Stories</h1>
      <hr style={{ margin: '0' }} />
      <div style={{ margin: '10px' }}>
        <AddTodoForm onAddTodo={addTodo} />
      </div>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
