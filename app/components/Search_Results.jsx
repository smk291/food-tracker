import React from 'react';

const Search_Results = React.createClass({

  render() {
    return (
      <div>
        <p>Meal: {this.props.meal}</p>
        {/* <p>Nutritionix db No.: {this.props.ndb_no}</p> */}
        {/* <p>Number of Servings: {this.props.serving_qty}</p> */}
        <p>Serving Unit: {this.props.serving_unit}</p>
        {/* <p>Serving Weight: {this.props.serving_weight_grams}g</p> */}
        <p>Calories: {this.props.nf_calories} kcal</p>
        <p>Total fat: {this.props.nf_total_fat}g</p>
        {/* <p>Saturdate Fat: {this.props.nf_saturated_fat}g</p> */}
        {/* <p>Cholesterol: {this.props.nf_cholesterol}mg</p> */}
        {/* <p>Sodium: {this.props.nf_sodium}mg</p> */}
        <p>Total Carbohydrate: {this.props.nf_total_carbohydrate}g</p>
        {/* <p>Dietary Fiber: {this.props.nf_dietary_fiber}g</p> */}
        {/* <p>Sugars: {this.props.nf_sugars}g</p> */}
        <p>Protein: {this.props.nf_protein}g</p>
        {/* <p>Potassium: {this.props.nf_potassium}mg</p> */}
        {/* <p>Phosphorus: {this.props.nf_p}mg</p> */}
        <img src={this.props.thumb} />
        {/* <img src={this.props.highres} /> */}
      </div>
    )
  }
});

export default Search_Results;