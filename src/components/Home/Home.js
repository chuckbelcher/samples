import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: '...'
        }
    }

    componentDidMount() {
        //Change the state value after 3 seconds
        setTimeout(()=> {
            this.setState({name: 'Chuck'});
        }, 3000)
    }

    render() {

        //Styles not in CSS
        const infoButton = {
            backgroundColor: '#234',
            border: '1px solid black',
            color: 'white',
            fontWeight: 'bold',
            padding: '15px'
        }

    ;

        //Use destructuring to break out the state
        const { name } = this.state;

        return (
            <div className="Home">
                <h1>Welcome to the Home Component</h1>
                {/* Lets render something from the state */}
                <p>You are currently logged on as: {name}</p>
                <button style={infoButton}>Show More</button>
                <p>Looking at styling for Harvest Front End</p>
                <a href="http://localhost:3000">Click Me</a>
            </div>
        )
    }
}

export default Home;