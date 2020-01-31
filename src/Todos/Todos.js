import React, { Component } from 'react'
import './Todos.css'

export class Todos extends Component {

    constructor(props) {
        super(props);

        this.todoId = props.todoId;
        this.todoContent = props.todoContent;
        this.timestamp = props.timestamp;
    }

    render() {
        return (
            <div className="todosList">
                <div className="actionBar">
                    <div className="dateTime">{this.timestamp}</div>      
                    <span className="removeBtn">X</span>          
                </div>
                <p className="todoContent">{this.todoContent}</p>
            </div>
        )
    }
}

export default Todos
