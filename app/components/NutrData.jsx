import React from 'react';

const NutrData = React.createClass({
  handleGetAMealNutr (e) {
    e.preventDefault();
    this.props.handleGetAMealNutr(this.props.mealId, e);
  },

  render() {
    return (
      <div>
          <input
            type="text"
            name="nutr_data"
            value={this.props.mealId}
            onChange={this.props.handleChange.bind(null, 'mealId')}
          />
          <button name="getNutrData" onClick={this.handleGetAMealNutr}>Get Nutritional data</button>
      </div>
    );
  }

});

export default NutrData;