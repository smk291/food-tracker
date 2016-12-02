import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MealItems from './MealItems';
import { notify } from 'react-notify-toast';

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
    .catch((err) => {
      console.log(err);
      notify.show(err.response.data.message, 'error', 3000);
    });
  }

  render() {
    return (
      <div className="section with-second-background background-adjust">
        <center><h2 className="heading">Meal Summary for {this.props.firstName}</h2></center>
        {this.state.groupByDay.length > 0 ? (
          <MealItems
            groupByDay={this.state.groupByDay}
          />
        ) : (
          <div>
            <h3>Opps! Seems like you haven't saved any meals!</h3>
            <Link to="/search" className="button button-primary">Click Here to Start!</Link>
          </div>
        )}
      </div>
    );
  }
}
