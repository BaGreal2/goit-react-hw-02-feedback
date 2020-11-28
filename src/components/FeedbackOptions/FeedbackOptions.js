import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  handleAddVote = e => {
    this.props.onLeaveFeedback(e.target.getAttribute('name'));
  };

  render() {
    const { options } = this.props;
    return (
      <>
        {options.map(option => (
          <button type="button" name={option} onClick={this.handleAddVote}>
            {option[0].toUpperCase() +
              option
                .split('')
                .splice(1, option.length - 1)
                .join('')}
          </button>
        ))}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
