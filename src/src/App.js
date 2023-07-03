import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import React, { useState } from 'react';


function App() { 
  const [newTodo, setNewTodo] = useState('');

 const handleAddTodo = (todo) => {
  setNewTodo(todo);

 }

  return (
<div>

  <h1 style={{ marginBottom: "10px" }}>My Hacker Stories</h1> 
      
      <hr style={{ margin: "0" }} /> 

<AddTodoForm onAddTodo = {handleAddTodo} />
<p>New Todo: {newTodo}</p>
  <TodoList />
  
</div>
);
}

export default App;

