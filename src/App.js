import React, { Component } from 'react';
import Todos from './Todos/Todos'
import TodosForm from './TodosForm/TodosForm'
import { firebaseConfig } from './Config/config'
import firebase from 'firebase/app'
import 'firebase/database'
import './App.css';

const moment = require('moment');

class App extends Component {

  constructor(props) {
    super(props);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);

    this.app = firebase.initializeApp(firebaseConfig);
    this.database = this.app.database().ref().child('todos');

    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    const previousTodos = this.state.todos;

    this.database.on('child_added', snap => {
      previousTodos.push({
        id: snap.key,
        todoContent: snap.val().todoContent,
        timestamp: snap.val().timestamp
      })

      this.setState({
        todos: previousTodos
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousTodos.length; i++){
        if(previousTodos[i].id === snap.key){
          previousTodos.splice(i, 1);
        }
      }

      this.setState({
        todos: previousTodos
      })
    })
  }

  addTodo(todo) {    
    const timestamp = moment().format('dddd - MMMM Do YYYY, h:mm:ss a');    
    this.database.push().set({todoContent: todo, timestamp: timestamp});
  }

  deleteTodo(id) {
    this.database.child(id).remove();
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
              <Todos todoContent={todo.todoContent}
              todoId={todo.id}
              key={todo.id}
              timestamp={todo.timestamp}
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
