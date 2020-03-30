import React from 'react';
import TodoList from './Components/TodoList'
import './App.css';
import _ from 'lodash';

class App extends React.Component {
  state = {
    inputValue: "",
    todoList: [],
  }

  addTodoItem = () => {
    const inputValue = this.state.inputValue;
    const todoList = this.state.todoList;
    const newTodoObj = {
      id: _.uniqueId(),
      task: inputValue
    }

    // อย่าทำแบบนี้นะ: this.state.todoList.push(inputValue);

    this.setState({
      inputValue: '',
      todoList: [newTodoObj, ...todoList]
    })
  }

  deleteItemById = targetId => {
    let newTodoList = this.state.todoList.filter(itemEle => targetId !== itemEle.id)

    this.setState({
      todoList: newTodoList,
    })
  }

  onChangeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    const inputValue = this.state.inputValue;

    return (
      <div className="container" >
        <br />
        <br />
        <div className="row">
          <input value={inputValue} onChange={this.onChangeInputValue} className="form-control col-10 App" placeholder="Enter Todo-list" />
          <button onClick={this.addTodoItem} type="button" className="col-2 App btn btn-primary">Add</button>
        </div>
        <br />
        <TodoList deleteItemById={this.deleteItemById} todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
