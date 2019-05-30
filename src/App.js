import React from 'react';
import './App.css';

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

  // Handler for the input field
  inputHandler = (event) => {
    this.setState({todoName: event.target.value});
  }

  // Handler for click on a given task

  updateCompletion = (event) => {
    // Get the element clicked by its ID
    const currentTodoID = event.target.id;
    const clickedTask = document.getElementById(currentTodoID);
    // Toggle the class name
    clickedTask.classList.toggle("completed");
    // update the completed value
    this.setState(currentState => ({
      todoList: currentState.todoList.map(todo => {
        if (todo.id == currentTodoID) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    }));    
  }

addTaskOnKey = (event) => {
  if ( event.key == 'Enter' ) {
    this.addTask();
  }
} 
  // funtion to add a new todo in the list
addTask = () => {
    // format the new todo 
    const newTodo =
      {
        task: this.state.todoName,
        id: Date.now(),
        completed: false      
      }
      this.setState({
        todoList: this.state.todoList.concat(newTodo), // receive friendsList to be updated with new name (add)
        todoName: '', // initate the input field to empty again
      }) 
}

// function that clear from the display the completed tasks
clearCompleted = () => {
  this.setState({todoList: this.state.todoList.filter( todo => !todo.completed)});
}

  render() {
    return (
      <div className="container">
        <h2>My Todo list:</h2>
        {
          // this part will display the todo list as it is
          this.state.todoList.map(todo =>{
            if(todo.completed) {
              return (
                <div onClick={this.updateCompletion} id={todo.id} className="completed">{todo.task}</div>
              );
            }
            return (<div onClick={this.updateCompletion} id={todo.id}>{todo.task}</div>);
          })
        }
        <div className="actions">
          <input 
            value = {this.state.todoName}
            onChange = {this.inputHandler}
            onKeyPress= {this.addTaskOnKey}
            type='text'        
          >
          </input>
          <button className="add" onClick={this.addTask}>Add</button>
          <button className="clear" onClick={this.clearCompleted}>Clear Completed</button>
        </div>
      </div>
    );
  }

}

export default App;
