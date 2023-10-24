import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  // a loading state to indicate the data is still fetching
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    // new Promise to simulate an API call
    new Promise((resolve, reject) => {
      // timeout to mimic a loading delay
      setTimeout(() => {
        // Resolve the promise with the data from localStorage
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [],
          },
        });
      }, 2000);
    })
      .then((result) => {
        // Update the todoList state with the result
        setTodoList(result.data.todoList);
        setLoading(false);
      })
      .catch((error) => {
        // errors handling
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Only update the localStorage if the data is not loading
    if (!loading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, loading]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };
  return (
    <>
      <h2 style={{ marginBottom: '10px' }}>My Todo List</h2>
      <hr style={{ margin: '0' }} />
      <div style={{ margin: '10px' }}>
        <AddTodoForm onAddTodo={addTodo} />
      </div>
      {/* Display a loading message while the data is fetching */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
