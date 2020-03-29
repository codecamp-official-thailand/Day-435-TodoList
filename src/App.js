import React from 'react';
import TodoList from './Components/TodoList'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todoList: [],
    }
  }

  onInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  addTodoItem = () => {
    const inputValue = this.state.inputValue;
    const oldTodoList = this.state.todoList;

    this.setState({
      inputValue: '',
      todoList: [...oldTodoList, inputValue]
    })
  }

  render() {
    const inputValue = this.state.inputValue;
    const todoList = this.state.todoList;

    return (
      <div className="container" >
        <br />
        <br />
        <div className="row">
          <input className="form-control col-10 App" type="text" placeholder="Enter Todo" onChange={this.onInputChange} value={inputValue} />
          <button type="button" className="col-2 App btn btn-primary" onClick={this.addTodoItem}>Add</button>
        </div>
        <br />
        <TodoList todoList={todoList} />
      </div>
    );
  }
}

export default App;
