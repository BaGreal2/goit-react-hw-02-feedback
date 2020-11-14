import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FeedbackOptions extends Component {
  handleAddGood = () => {
    this.props.handleGood();
  };

  handleAddBad = () => {
    this.props.handleBad();
  };

  handleAddNeutral = () => {
    this.props.handleNeutral();
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.handleAddGood}>
          Good
        </button>
        <button type="button" onClick={this.handleAddNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleAddBad}>
          Bad
        </button>
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  handleGood: PropTypes.func.isRequired,
  handleBad: PropTypes.func.isRequired,
  handleNeutral: PropTypes.func.isRequired,
};
