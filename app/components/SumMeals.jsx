import React from 'react';

const SumMeals = React.createClass({
  sumMealsInput (e) {
    console.log(this.props.mealId);
    // e.preventDefault();
    this.props.sumMealsInput(this.props.mealId);
  },

  render() {
    return (
      <div>
          <input
            type="text"
            name="mealid"
            value={this.props.mealId}
            onChange={this.props.handleChange.bind(null, 'mealId')}
          />
          <button name="mealId" onClick={this.sumMealsInput}>Sum this meal</button>
      </div>
    );
  }
});

export default SumMeals;