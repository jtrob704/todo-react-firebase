import React, { Component } from 'react'
import './Todos.css'
import PropTypes from 'prop-types';


export class Todos extends Component {

    constructor(props) {
        super(props);

        this.todoId = props.todoId;
        this.todoContent = props.todoContent;
        this.timestamp = props.timestamp;
    }

    removeTodo(id) {
        this.props.deleteTodo(id)
    }

    render() {
        return (
            <div className="todosList">
                <div className="actionBar">
                    <div className="dateTime">{this.timestamp}</div>      
                    <span className="removeBtn" onClick={() => this.removeTodo(this.todoId)}>X</span>          
                </div>
                <p className="todoContent">{this.todoContent}</p>
            </div>
        )
    }
}

Todos.propTypes = {
    todoId: PropTypes.number,
    todoContent: PropTypes.string,
    timestamp: PropTypes.string
};

export default Todos
