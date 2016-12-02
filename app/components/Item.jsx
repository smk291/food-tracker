import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="u-full-width individual-item">
        <h5>{this.props.element.food_name}</h5>
        <div className="row">
          <div className="offset-by-one column">
            Qty: {this.props.element.serving_qty} {this.props.element.serving_unit}
          </div>
        </div>
        <div className="row">
          <div className="offset-by-one column">
            Calories: {this.props.element.full_nutrients[1].value}kcal
          </div>
        </div>
      </div>
    );
  }
}
