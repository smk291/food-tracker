import React from 'react';
import DeleteMeal from './DeleteMeal';

const Meal = React.createClass({
  handleGetAMeal() {
    console.log(this.props.id);
    this.props.handleGetAMeal(this.props.id);
  },

  render() {
    return (
      <div>
]        <p>{this.props.idx}</p>
        <p>{this.props.meal.name}</p>
        <button
            type="text"
            name="getTheMeal"
            onClick={this.handleGetAMeal}>
            Get details
        </button>
        <DeleteMeal
          meal={this.props.meal}
          handleDeleteMeal={this.props.handleDeleteMeal}
        />
      </div>
    )
  }
});

export default Meal;