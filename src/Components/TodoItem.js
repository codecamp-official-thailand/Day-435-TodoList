import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
  render() {
    return (
      <li class="list-group-item">
        {this.props.item}
      </li>
    )
  }
}

export default TodoItem;