import React from 'react';
import ReactDOM from 'react-dom';
import Meal from './Meal';

export default class MealItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cal: 0
    };
    this.totalCalories = this.totalCalories.bind(this);
  }

  totalCalories(mealArr) {
    const totalCal = mealArr.reduce((tot, elm) => {
      const cal = Number.parseFloat(elm.full_nutrients[1].value);
      return tot += cal;
    }, 0);

    this.setState({ cal: totalCal });
  }

  handleClick(e) {
    e.preventDefault();
    const transition = ReactDOM.findDOMNode(this.refs.trans);
    const display = ReactDOM.findDOMNode(this.refs.display);
    const others = transition.parentNode.children;

    transition.classList.toggle('three');
    transition.classList.toggle('columns');
    transition.classList.toggle('twelve');
    transition.classList.toggle('columns');
    transition.classList.toggle('show-big');
    if (!transition.style["min-height"] || transition.style["min-height"] === '10rem') {
      transition.style["min-height"] = '45rem';
    } else {
      transition.style["min-height"] = '10rem';
    }
    display.classList.toggle('meals-display');

    for (let node of others) {
      if (node !== transition) {
        node.classList.toggle('meals-display');
      }
    }
  }

  render() {
    const mealArr = this.props.meals.map((elm, key) => {
      return (
        <Meal
          key={key}
          meal={elm}
          number={key}
          totalCal={this.totalCalories}
        />
      );
    });

    return (
      <a ref="trans" href="" className="three columns meal-item" onClick={this.handleClick.bind(this)}>
        <div>
          <div className="date-display">
            <div>{this.props.day}</div>
            <div>{this.props.year}/{this.props.month}/{this.props.date}</div>
          </div>
          <div ref="display" className="section meals-section meals-display">
            {mealArr}
            <h4 className="twelve columns total-cal">Total Calories: {this.state.cal}kcal</h4>
          </div>
        </div>
      </a>
    );
  }
}
