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

    this.state = {
      todos: [
        {todoId:0, todoContent:'Test todo 1'},
        {todoId:1, todoContent:'Test todo 2'}
      ]
    }
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
          <TodosForm />
        </div>
      </div>
    );
    }
  }

export default App;
