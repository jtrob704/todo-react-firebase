import React, { Component } from 'react';
import Todos from './Todos/Todos'
import TodosForm from './TodosForm/TodosForm'
// eslint-disable-next-line
import { firebaseConfig } from './Config/config'
// eslint-disable-next-line
import firebase from 'firebase/app'
import 'firebase/database'
import './App.css';

const moment = require('moment');

class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);

    this.state = {
      todos: []
    }
  }

  addTodo(todo) {
    let prevTodos = this.state.todos;
    let timestamp = moment().format('MMMM Do YYYY, h:mm:ss a');

    prevTodos.push({todoId: prevTodos.length + 1, todoContent: todo, timestamp: timestamp})

    this.setState({
      todos: prevTodos
    })
  }

  render() {
    return (
      <div className="todoWrapper">
        <header className="todoHeader">        
          <h1>Todos</h1>          
        </header>
        <div className="todosBody">
          {this.state.todos.map((todo) => {
            return (
              <Todos todoId={todo.todoId}
              todoContent={todo.todoContent}
              timestamp={todo.timestamp}
              key={todo.todoId}/>
            )
          })}          
          <TodosForm addTodo={this.addTodo}/>
        </div>
      </div>
    );
    }
  }

export default App;
