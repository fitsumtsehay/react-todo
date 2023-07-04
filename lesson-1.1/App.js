import * as React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';


const list = [
{
title: 'React',
url: 'https://reactjs.org/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},

{
title: 'Redux',
url: 'https://redux.js.org/',
author: 'Dan Abramov, Andrew Clark',
num_comments: 2,
points: 5,
objectID: 1,
},
];
function List (){
  return (
    <ul>
    {list.map(function(item) {
      return (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        </li>
      );
    })}
    </ul>
  );
}

function Search() {
  return (
    <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
    </div>
  );
}
function App() { 
  return (
<div>
  <h1>My Hacker Stories</h1>

  <Search />

  <hr />
  <AddTodoForm />

  <TodoList />
  
</div>
);
}
export default App;



// import React from 'react';


// const todoList = [  
//   {id: 1, title: 'Complete assignment' },
//   {id: 2, title: 'Take a break' },
//   {id: 3, title: 'go to bed'}
// ];

// function App() {
//   return (
//     <div>
//       <header>
//         <h1>
//           Todo List
//           </h1>
//       </header>

//       <ul>
//       {todoList.map(todo => (
//         <li key={todo.id}>{todo.title}</li>
//       ))}
//       </ul>
//       </div>
//   );
// }

// export default App;
