import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.objectID}>
          <TodoListItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
