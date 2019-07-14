import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor() {
        super();

        //initial state
        this.state = {
            alert: {
                type: '',
                message: ''
            },
            time: 0,
            paused: false
        };

        this.times = {
            defaultTime: 1500, //25 min
            shortBreak: 300,   // 5 min
            longBreak: 900     //15 min
        };
    }

    componentDidMount() {
        //Set default time when component mounts
        this.setDefaultTime();
    }

    setDefaultTime = () => {
        //Default time is 25 min
        this.setState({
            time: this.times.defaultTime
        });
    }

    setTime = (newTime) => {
        this.restartInterval();
        this.setState({
            time: newTime
        });
    }

    restartInterval = () => {
        //Clear Interval
        clearInterval(this.interval);

        //Execute countDown function every second
        this.interval = setInterval(this.countDown, 1000);
    }

    countDown = () => {
        //If the time reaches 0 display alert
        if (this.state.time === 0) {
            this.setState({
                alert: {
                    type: 'buz',
                    message: 'buzzzzzzz'
                }
            });
        } else {
            //Decrease time by one second
            this.setState({
                time: this.state.time - 1
            });
        }
    }

    pauseTime = () => {
        console.log(this.state);
        this.setState({
            alert: {
                type: 'pause',
                message: 'Paused'
            },
            paused: !this.state.paused
        });
        console.log(this.state.time);
        //return this.setTime(currTime);

    }

    setTimeForWork = () => {
        this.setState({
            alert: {
                type: 'work',
                message: 'Working on Greatness'
            }
        });
        return this.setTime(this.times.defaultTime);
    }

    setTimeForShortBreak = () => {
        this.setState({
            alert: {
                type: 'shortBreak',
                message: 'Taking a short break'
            }
        });
        return this.setTime(this.times.shortBreak);
    }

    setTimeForLongBreak = () => {
        this.setState({
            alert: {
                type: 'longBreak',
                message: 'Taking a long break'
            }
        });
        return this.setTime(this.times.longBreak);
    }
    
    displayTimer = (seconds) => {
        //format time to mm:ss
        const m = Math.floor(seconds % 3600 / 60);
        const s = Math.floor(seconds % 3600 % 60);
        return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }
    
    render() {
        const { alert: { message, type }, time, paused } = this.state;
        return (
            <div className="Pomodoro" >
                <div className={`alert ${type}`}>
                    {message}
                </div>

                <div className="timer">
                    {this.displayTimer(time)}
                </div>

                <div className="types">
                    <button 
                        className="short"
                        onClick={this.setTimeForShortBreak}
                    > Short Break
                    </button>
                    <button 
                        className="work"
                        onClick={this.setTimeForWork}
                    > Start Working
                    </button>
                    <button 
                        className="long"
                        onClick={this.setTimeForLongBreak}
                    > Long Break
                    </button>
                    <button 
                        className="pause"
                        onClick={this.pauseTime}
                    > {paused ? 'Resume' : 'Pause' }
                    </button>
                    
                </div>
            </div>
        )
    }
}

export default Timer;