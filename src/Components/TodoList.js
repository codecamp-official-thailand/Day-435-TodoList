import React from 'react';
import TodoItem from './TodoItem';
import { List } from 'antd';

class TodoList extends React.Component {
  render() {

    return (
      <List
        size="large"
        header={<div>List of Todo</div>}
        bordered
        dataSource={this.props.todoList}
        renderItem={item => (
          <List.Item key={item.id}>
            <TodoItem deleteItemById={this.props.deleteItemById} task={item.task} id={item.id} />
          </List.Item>
        )}
      />
    )
  }
}

export default TodoList;