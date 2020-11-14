import React, { Component } from 'react';
import Section from './components/Section/Section';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <>
        <Section
          good={good}
          bad={bad}
          neutral={neutral}
          handleGood={this.handleGood}
          handleBad={this.handleBad}
          handleNeutral={this.handleNeutral}
        />
      </>
    );
  }
}
