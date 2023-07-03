import React from 'react';

function TodoListItem({ todo }) {
  return (
    <li>
      <span>
        <a href={todo.url}>{todo.title}</a>
      </span>
      <span>{todo.author}</span>
      <span>{todo.num_comments}</span>
      <span>{todo.points}</span>
    </li>
  );
}

export default TodoListItem;
