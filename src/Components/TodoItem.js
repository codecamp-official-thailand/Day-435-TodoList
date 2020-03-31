import React, { Component } from 'react'
import { Button } from 'antd'
import './TodoItem.css'

class TodoItem extends Component {
  render() {
    const task = this.props.task;
    const id = this.props.id;

    function handleDelete() {
      return this.props.deleteItemById(id)
    }

    return (
      <>
        <div className="todo-item">
          {task}
        </div>
        <Button danger onClick={handleDelete.bind(this)}>
          Delete
        </Button>
      </>
    )
  }
}

export default TodoItem;