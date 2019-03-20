import React, { Component } from 'react';
import TaskForm from './TaskForm';

class TaskApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [{title:"Test"}, {title:"Test"}]
        }
    }

    addTask = (newTask) => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }

    render() {
        return (
            <div>
                <h1>TaskApp</h1>
                {this.state.tasks.map( (task, index) => {
                    return <p key={index}>{task.title}</p>
                })}
                <TaskForm addTask={this.addTask} />
            </div>
        )
    }
}

export default TaskApp;