import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  countTotalFeedback = () => {
    return this.props.good + this.props.bad + this.props.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.props.good /
        (this.props.good + this.props.bad + this.props.neutral)) *
      100
    );
  };

  render() {
    const { good, bad, neutral } = this.props;
    return (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        {bad > 0 && (
          <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
};
