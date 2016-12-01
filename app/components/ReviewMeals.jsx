import React from 'react';
import axios from 'axios';
import MealItems from './MealItems';

export default class ReviewMeals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersMeals: [],
      groupByDay: {}
    };
  }

  componentWillMount() {
    let groupByDay = {};
    let sumByDay = {}
    axios({
      method: 'get',
      url: '/users_meals_data'
    })
    .then((res) => {
      this.setState({usersMeals: res.data});
    })
    .then(() => {
      this.state.usersMeals.reduce((acc, meal, idx) => {
        if (groupByDay.hasOwnProperty(meal.date)){
          groupByDay[meal.date].push(meal.meal.meal);
        } else {
          groupByDay[meal.date] = [meal.meal.meal];
        }
      }, {})
      this.setState({groupByDay});
    })
    .then(() => {
      console.log(this.state.groupByDay);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="section with-second-background background-adjust">
        <center><h2 className="heading">Meal Summary for {this.props.firstName}</h2></center>
        <MealItems
          groupByDay={this.state.groupByDay}
        />
      </div>
    );
  }
}
