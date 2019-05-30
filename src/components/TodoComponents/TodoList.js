import React from 'react';

export default function TodoList ({todoList, updateCompletion}) {

    const onCompletion = event => {
        // One liner. Implement using setFriendToBeEdited
        updateCompletion(event);
    };
   
    return (
        <>
        {
          // this part will display the todo list as it is
          todoList.map(todo =>{
            if(todo.completed) {
              return (
                <div onClick={onCompletion} id={todo.id} className="completed">{todo.task}</div>
              );
            }
            return (<div onClick={onCompletion} id={todo.id}>{todo.task}</div>);
          })
        }
        </>
    ); 
}