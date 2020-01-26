import React, { Component } from 'react';
import Todos from './Todos/Todos'
import TodosForm from './TodosForm/TodosForm'
// eslint-disable-next-line
import { firebaseConfig } from './Config/config'
// eslint-disable-next-line
import firebase from 'firebase/app'
import 'firebase/database'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);

    this.state = {
      todos: [
        {todoId:0, todoContent:'Test todo 1'},
        {todoId:1, todoContent:'Test todo 2'}
      ]
    }
  }

  addTodo(todo) {
    let prevTodos = this.state.todos;

    prevTodos.push({todoId: prevTodos.length + 1, todoContent: todo})

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
