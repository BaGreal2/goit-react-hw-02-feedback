import React from 'react';
import PropTypes from 'prop-types';

function Statistics(props) {
  const { good, bad, neutral, total, positivePercentage } = props;
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      {bad > 0 && <p>Positive Feedback: {positivePercentage}%</p>}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
