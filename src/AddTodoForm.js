import React from 'react';

function AddTodoForm () {
    return (
       <form>
        <ul>
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" id="todoTitle" />
            </div>
            <div className="button">
                <button type="submit" style={{backgroundColor: "steelblue", color:"white", borderRadius: "5px"}}>Add</button>
            </div>
        </ul>
        
       </form> 
    );
}

export default AddTodoForm;