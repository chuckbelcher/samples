import React, { Component } from 'react';
import List from './List';
import uuidv4 from 'uuid/v4';
import './Todo.css';

class Todo extends Component {
    constructor() {
        super();

        //initial state
        this.state = {
            task: '',
            items: []
        };
    }


    componentWillMount() {
        //Setup default state
        this.setState({
            items: [
                {
                    id: uuidv4(),
                    task: 'Create Form',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Create Workflow',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Attach database',
                    completed: false
                }
            ]
        });
    }

    handleOnChange = (e) => {
        const { target: {value}} = e;
        //update task with input values
        this.setState({
            task: value
        });
    }

    handleOnSubmit = (e) => {
        //Prevent default to avoid an acutal submit
        e.preventDefault();

        //Once submitted push task to array
        if (this.state.task.trim() !=='') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: uuidv4(),
                        task: this.state.task,
                        complete: false
                    }
                ]
            });
        }
    }

    markAsCompleted = (id) => {
        //Find task by id
        const foundTask = this.state.items.find(
            task => task.id === id
        );

        //update the completed status
        foundTask.completed = true;

        //Update State
        this.setState({
            items: [
                ...this.state.items,
                //...foundTask
            ]
        });
    }
    
    removeTask = (id) => {
        //Filter tasks by removing specific task id
        const filteredTasks = this.state.items.filter(
            task => task.id !== id
        );

        //Update State
        this.setState({
            items: filteredTasks
        });
    }

    render() {

        return (
            <div className='Todo'>
                <h1>New Task</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <input value={this.state.task}
                        onChange={this.handleOnChange} 
                    />
                </form>

                <List 
                    items={this.state.items}
                    markAsCompleted={this.markAsCompleted}
                    removeTask={this.removeTask}
                />
            </div>
        );
    }
}

export default Todo;