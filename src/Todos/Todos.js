import React, { Component } from 'react'
import './Todos.css'

export class Todos extends Component {

    constructor(props) {
        super(props);

        this.todoId = props.todoId;
        this.todoContent = props.todoContent;
    }

    render() {
        return (
            <div id="todos-list">
                <p className="todoContent">{this.todoContent}</p>
            </div>
        )
    }
}

export default Todos
