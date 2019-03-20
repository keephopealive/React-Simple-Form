import React, { Component } from 'react';

class TaskForm extends React.Component {
    constructor(props){
        console.log(props);
        
        super(props);
        this.state = {
            title: "",
            completed: "",
        }
    }

    handleChange = (e) => {
        console.log("e.target.name: ", e.target.name)
        console.log("e.target.value: ", e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleChangeTitle = (e) => {
    //     this.setState({
    //         "title": e.target.value
    //     })
    // }


    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTask({ title: this.state.title })
        this.setState({ title: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
                <label>
                    <input type="radio" name="completed" onChange={this.handleChange} value="Completed" /> Completed
                </label>
                <label>
                    <input type="radio" name="completed" onChange={this.handleChange} value="Incomplete" /> Incomplete
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default TaskForm;