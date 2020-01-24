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
      todos: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">        
          <h1>ToDo</h1>          
        </header>
        <Todos />
        <TodosForm />
      </div>
    );
    }
  }

export default App;
