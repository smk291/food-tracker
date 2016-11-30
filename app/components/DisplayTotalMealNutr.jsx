import React from 'react';
import Nutr from './Nutr';

const DisplayTotalMealNutr = React.createClass({
  handleSumMeals() {
    this.props.handleSumMeals();
  },
  
  render() {
    return (
      <div>
        <button type="text" onClick={this.handleSumMeals}>
          Sum nutrition for a meal
        </button>
      </div>
    );
  }

});

export default DisplayTotalMealNutr;