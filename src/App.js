import React from 'react';

const initialTodoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  // Firts the constructor of the class that take the props
  constructor (props) {
    super(props);
    this.state = {
      todoList : initialTodoList,
      todoName : '',
      completed : false,
    }
  }



  render() {
    return (
      <div>
        <h2>My Todo list:</h2>
        {
          this.state.todoList.map(todo =>{
            if(todo.completed) {
              return (
                <div Style="text-decoration: line-through">{todo.task}</div>
              );
            }
            return (<div>{todo.task}</div>);
          })
        }
        <input type="text"></input>
        <button>Add</button>
        <button>Clear Completed</button>
      </div>
    );
  }

}

export default App;
