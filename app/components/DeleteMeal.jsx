import React from 'react';

const DeleteMeal = React.createClass({
  deleteMeal(){
    this.props.handleDeleteMeal(this.props.meal.id);
  },

  render() {
    return (
      <div>
        <button
          type="text"
          name="deleteThisMeal"
          onClick={this.deleteMeal}
        >Delete this meal
        </button>
      </div>
    );
  }

});

export default DeleteMeal;