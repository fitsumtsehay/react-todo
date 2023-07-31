import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState() {
  const savedTodoList = localStorage.getItem('savedTodoList');
  const [todoList, setTodoList] = useState(savedTodoList ? JSON.parse(savedTodoList) :[]);
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);
  return [todoList, setTodoList];
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

 
  return (
    <>
      <h1 style={{ marginBottom: '10px' }}>My Hacker Stories</h1>
      <hr style={{ margin: '0' }} />
      <div style={{ margin: '10px' }}>
        <AddTodoForm onAddTodo={addTodo} />
      </div>
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
