import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date() 
        }
        this.interval;
    }

    render() {
        let seconds = this.state.time.getSeconds();
        if (seconds < 10) {
            seconds = `0${seconds}`;
        } 
        let minutes = this.state.time.getMinutes()
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        return (
            <div id="clock">
                <h1>Clock</h1>
                <h2>Time: {(this.state.time.getHours()) % 12}:{minutes}:{seconds} </h2>
            </div>
        );
    }

    tick() {
        this.setState( { time: new Date() } );
       
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
        return this.interval;
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}

export default Clock;