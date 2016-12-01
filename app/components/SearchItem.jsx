import React from 'react';

export default class SearchItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="one-third column item">
        <div className="image-div">
          <img src={this.props.thumb}/>
        </div>
        <h4>{this.props.foodItem}</h4>
        <p>Calories: {this.props.calories}kcal</p>
        <p>Protein: {this.props.protein}g</p>
        <p>Fat: {this.props.totalFat}g</p>
        <p>Carbohydrate: {this.props.totalCarb}g</p>
      </div>
    );
  }
}
