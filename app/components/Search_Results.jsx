import React from 'react';

const Search_Results = React.createClass({

  render() {
    return (
      <div>
        <p>hi!</p>
        <p>meal: {this.props.meal}</p>
        <p>ndb_no: {this.props.ndb_no}</p>
        <p>nf_calories: {this.props.nf_calories} kcal</p>
        <p>serving_qty: {this.props.serving_qty}</p>
        <p>serving_unit: {this.props.serving_unit}</p>
        <p>serving_weight_grams: {this.props.serving_weight_grams}g</p>
        <p>nf_calories: {this.props.nf_calories} kcal</p>
        <p>nf_total_fat: {this.props.nf_total_fat}g</p>
        <p>nf_saturated_fat: {this.props.nf_saturated_fat}g</p>
        <p>nf_cholesterol: {this.props.nf_cholesterol}mg</p>
        <p>nf_sodium: {this.props.nf_sodium}mg</p>
        <p>nf_total_carbohydrate: {this.props.nf_total_carbohydrate}g</p>
        <p>nf_dietary_fiber: {this.props.nf_dietary_fiber}g</p>
        <p>nf_sugars: {this.props.nf_sugars}g</p>
        <p>nf_protein: {this.props.nf_protein}g</p>
        <p>nf_potassium: {this.props.nf_potassium}mg</p>
        <p>nf_phosphorus: {this.props.nf_p}mg</p>
        <img src={this.props.thumb} />
        <img src={this.props.highres} />
      </div>
    )
  }
});

export default Search_Results;