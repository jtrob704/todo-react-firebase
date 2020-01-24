import React, { Component } from 'react'

export class Todos extends Component {
    render() {
        return (
            <div id="todo-form">
                <input type="text" placeholder="Enter new Todo"></input>
                <button>New Todo</button>
            </div>
        )
    }
}

export default Todos
