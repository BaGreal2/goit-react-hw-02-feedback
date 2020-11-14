import React from 'react';
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

function Section(props) {
  const { good, bad, neutral, handleGood, handleBad, handleNeutral } = props;
  return (
    <>
      <FeedbackOptions
        handleGood={handleGood}
        handleBad={handleBad}
        handleNeutral={handleNeutral}
      />

      {bad > 0 || good > 0 || neutral > 0 ? (
        <Statistics good={good} bad={bad} neutral={neutral} />
      ) : (
        <p>No feedback</p>
      )}
    </>
  );
}

Section.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  handleGood: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
};

export default Section;
