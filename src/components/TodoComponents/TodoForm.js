import React from 'react';

export default function FormAction ({value, inputHandler, addTaskOnKey, addTask, clearCompleted}) {
    const onAdd = event => {
        // One liner. Implement using setFriendToBeEdited
        addTask();
    };

    const onClear = event => {
        // One liner. Implement using setFriendToBeEdited
        clearCompleted();
    };

    const onKey = event => {
        // One liner. Implement using setFriendToBeEdited
        addTaskOnKey(event);
    };    

    const onInput = event => {
        // One liner. Implement using setFriendToBeEdited
        inputHandler(event);
    };    

    return (
        <div className="actions">
        <input 
        value = {value}
        onChange = {onInput}
        onKeyPress= {onKey}
        type='text'        
        >
        </input>
        <button className="add" onClick={onAdd}>Add</button>
        <button className="clear" onClick={onClear}>Clear Completed</button>
        </div>
    ); 
}






