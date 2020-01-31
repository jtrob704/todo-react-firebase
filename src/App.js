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
    this.deleteTodo = this.deleteTodo.bind(this);

    this.state = {
      todos: []
    }
  }

  addTodo(todo) {
    const prevTodos = this.state.todos;
    const timestamp = moment().format('dddd - MMMM Do YYYY, h:mm:ss a');
    const debugDate = new Date();
    const debugMs = debugDate.getTime();

    prevTodos.push({todoId: debugMs, todoContent: todo, timestamp: timestamp})

    this.setState({
      todos: prevTodos
    })
  }

  deleteTodo(id) {
    
    const remainingTodos = this.state.todos.filter((todo) => todo.todoId !== id);

    this.setState({
      todos: remainingTodos
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
              key={todo.todoId}
              deleteTodo={this.deleteTodo}/>
            )
          })}          
          <TodosForm addTodo={this.addTodo}/>
        </div>
      </div>
    );
    }
  }

export default App;
