import React from 'react';

function AddTodoForm ({ onAddTodo}) {
    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        onAddTodo(todoTitle);
        event.target.reset();
    };

    return (
       <form onSubmit={handleAddTodo}>
        <ul>
            <div>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" />
            </div>
            <div className="button">
                <button type="submit" style={{backgroundColor: "steelblue", color:"white", borderRadius: "5px", marginTop: "10px"}}>Add Todo</button>
            </div>
        </ul>
        
       </form> 
    );
}

export default AddTodoForm;