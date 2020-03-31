import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';
import _ from 'lodash';
import Axios from 'axios';
import { Button, Input, Row, Col } from 'antd';

class App extends React.Component {
  state = {
    inputValue: "",
    todoList: [],
    editedId: null,
    editedText: null,
  }

  clickToSendRequest = () => {
    Axios.get("http://www.mocky.io/v2/5e82e4942f00006cfa2fc586")
      .then(response => {
        console.log(response.data)
        this.setState({
          todoList: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
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

  editItemById = () => {
    const targetId = this.state.editedId;
    const editedText = this.state.editedText

    let newTodoList = this.state.todoList.map((todoItem) => {
      if (todoItem.id == targetId) {
        return {
          id: todoItem.id,
          task: editedText,
        }
      } else {
        return todoItem
      }
    })

    console.log(newTodoList)

    this.setState({
      todoList: newTodoList
    })
  }

  onChange = (stateName, stateValue) => {
    this.setState({
      [stateName]: stateValue
    })
  }

  render() {
    const inputValue = this.state.inputValue;
    const editedId = this.state.editedId;
    const editedText = this.state.editedText;

    return (
      <Col>
        <br />
        <Row justify="space-around">
          <Col span={10}>
            <Row justify="center">
              Todo Task
            </Row>
          </Col>
          <Col span={4}>
            <Row justify="center">
              Action Button
            </Row>
          </Col>
        </Row>
        <br />
        <br />
        <Row justify="space-around">
          <Col span={10}>
            <Input value={inputValue} onChange={(e) => this.onChange("inputValue", e.target.value)} className="form-control col-10 App" placeholder="Enter Todo-list" />
          </Col>
          <Col span={4}>
            <Row justify="center">
              <Button onClick={this.addTodoItem} type="button" className="col-2 App btn btn-primary">Add</Button>
            </Row>
          </Col>
        </Row>
        <br />
        <Row justify="space-around">
          <Col xs={8} sm={7} md={6}>
            <Input value={editedText} onChange={(e) => this.onChange("editedText", e.target.value)} className="form-control col-8 App" placeholder="Edit text here" />
          </Col>
          <Col xs={8} sm={7} md={2}>
            <Input value={editedId} onChange={(e) => this.onChange("editedId", e.target.value)} className="form-control col-2 App" placeholder="Edited ID" />
          </Col>
          <Col xs={8} sm={7} md={4}>
            <Row justify="center">
              <Button onClick={this.editItemById} className="col-2 App btn btn-primary" >Edit</Button>
            </Row>
          </Col>
        </Row>
        <br />
        <TodoList deleteItemById={this.deleteItemById} todoList={this.state.todoList} />
      </Col>
    );
  }
}

export default App;
