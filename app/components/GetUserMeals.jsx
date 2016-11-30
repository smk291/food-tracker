import React from 'react';
import Meal from './Meal';

const GetUserMeals = React.createClass({
  handleGetUserMeals() {
    this.props.handleGetUserMeals();
  },

  render() {
    return (
      <div>
        <button
          type="text"
          name="getUserMeals"
          onClick={this.handleGetUserMeals}>
          Retrieve meals
        </button>
        {this.props.usersMeals.map((meal, idx) => {
          return <Meal
            key={idx}
            meal={meal}
            id={meal.id}
            handleGetAMeal={this.props.handleGetAMeal}
            handleDeleteMeal={this.props.handleDeleteMeal}
          />
        })}
      </div>
    )
  }
});

export default GetUserMeals;