import React from 'react';


const todoList = [  
  {id: 1, title: 'Complete assignment' },
  {id: 2, title: 'Take a break' },
  {id: 3, title: 'go to bed'}
];

function App() {
  return (
    <div>
      <header>
        <h1>
          Todo List
          </h1>
      </header>

      <ul>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
      </ul>
      </div>
  );
}

export default App;
