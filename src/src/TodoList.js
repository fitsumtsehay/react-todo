import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.objectID}>
          <TodoListItem key={todo.id} todo={todo} onRemove={onRemoveTodo}/>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
