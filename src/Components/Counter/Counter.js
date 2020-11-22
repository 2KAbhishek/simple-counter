import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    incrementCounter = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    decrementCounter = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    resetCounter = () => {
        this.setState({ counter: 0 });
    }

    render() {
        return (
            <div className="Counter">
                <h1>Counter Demo</h1>
                <h2>Counter: { this.state.counter } </h2>
                <button onClick={this.incrementCounter}>Increment Counter</button>
                <button onClick={this.decrementCounter}>Decrement Counter</button>
                <button onClick={this.resetCounter}>Reset Counter</button>
            </div>
        )
    }
}
