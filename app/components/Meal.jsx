import React from 'react';
import Item from './Item';

export default class Meal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.totalCal(this.props.meal);
  }

  render() {
    const array = this.props.meal.map((elm, key) => {
      return (
        <Item
          key={key}
          element={elm}
        />
      );
    });
    return (
      <div className="one-third column meal-item">
        <h3>Meal {this.props.number + 1}</h3>
        <div className="row">
          {array}
        </div>
      </div>
    );
  }
}
