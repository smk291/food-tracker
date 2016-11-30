import React from 'react';

const MealDetail = React.createClass({
  mealDetail (){
    this.props.mealDetail;
    console.log(this.props.mealDetail);
  },

  render() {
    return (
      <div>
        <p>Here are details for your selected meal</p>
        <p>{JSON.stringify(this.props.mealDetail)}</p>
        {/* Fill this in */}
      </div>
    )
  }
});

export default MealDetail;