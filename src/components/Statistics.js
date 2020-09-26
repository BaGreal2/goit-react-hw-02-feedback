import React, { Component } from 'react';

class Statistics extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      bad: 0,
      neutral: 0,
    };
    this.handleGood = this.handleGood.bind(this);
    this.handleBad = this.handleBad.bind(this);
    this.handleNeutral = this.handleNeutral.bind(this);
  }

  handleGood = e => {
    this.setState({ good: this.state.good + 1 });
  };

  handleBad = e => {
    this.setState({ bad: this.state.bad + 1 });
  };

  handleNeutral = e => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <button onClick={this.handleGood}>GOOD</button>
        <button onClick={this.handleBad}>BAD</button>
        <button onClick={this.handleNeutral}>NEUTRAL</button>
        <h2>Statistics</h2>
        {bad > 0 || good > 0 || neutral > 0 ? (
          <>
            <p>good: {good}</p>
            <p>bad: {bad}</p>
            <p>neutral: {neutral}</p>
            <p>total: {good + bad + neutral}</p>
            {bad > 0 && (
              <p>positive feedback: {(good / (good + bad + neutral)) * 100}%</p>
            )}
          </>
        ) : (
          <p>No feedback</p>
        )}
      </div>
    );
  }
}

export default Statistics;
