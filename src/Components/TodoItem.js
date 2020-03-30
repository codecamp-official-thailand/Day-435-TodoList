import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
  render() {
    const task = this.props.task;
    const id = this.props.id;

    return (
      <li className="list-group-item">
        <div className="container">
          <div className="row">
            <div className="col-10 todo-item">
              {task}
            </div>
            <div onClick={() => this.props.deleteItemById(id)} className="col-2 btn btn-danger">
              Delete
          </div>
          </div>
        </div>
      </li>
    )
  }
}

export default TodoItem;