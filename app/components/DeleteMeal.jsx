import React from 'react';

const DeleteMeal = React.createClass({
  deleteMeal(){
    console.log(`Imma delete meal at meal.id ${this.props.meal.id}`);
    this.props.handleDeleteMeal(this.props.meal.id);
  },

  render() {
    return (
      <div>
        <p>Delete meal</p>
        <button
          type="text"
          name="deleteThisMeal"
          onClick={this.deleteMeal}
        >
          Delete this meal
        </button>
      </div>
    );
  }

});

export default DeleteMeal;