import React, { Component } from 'react'
import './TodosForm.css'

export class TodosForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newTodo: ''
        }

        this.handleFormInput = this.handleFormInput.bind(this);
        this.createTodo = this.createTodo.bind(this);
    }

    handleFormInput(e) {
        this.setState({
            newTodo: e.target.value
        })
    }

    createTodo() {
        this.props.addTodo(this.state.newTodo);

        this.setState({
            newTodo: ''
        })
    }

    render() {
        return (
            <div className="todoForm">
                <input type="text" 
                className="inputTodo"
                placeholder="Enter new Todo..."
                value={this.state.newTodo}
                onChange={this.handleFormInput} />
                <button onClick={this.createTodo}>New Todo</button>
            </div>
        )
    }
}

export default TodosForm
