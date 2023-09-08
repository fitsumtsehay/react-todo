import React from 'react';
import './styles.css';

function TodoListItem({ todo, onRemove }) {
  const handleRemoveClick = () => {
    onRemove(todo.id);
  };

  return (
    <div className="todo-list-item">
      <div className="todo-info">
        <span>
          <a href={todo.url}>{todo.title}</a>
        </span>
        <span>{todo.author}</span>
        <span>{todo.num_comments}</span>
        <span>{todo.points}</span>
      </div>
      <button
        type="button"
        onClick={handleRemoveClick}
        className="action-button"
      >
        Remove
      </button>
    </div>
  );
}

export default TodoListItem;
