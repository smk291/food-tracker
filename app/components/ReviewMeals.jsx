import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MealItems from './MealItems';
import { notify } from 'react-notify-toast';

export default class ReviewMeals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="section with-second-background background-adjust">
        <center><h2 className="heading">Meal Summary for {this.props.firstName}</h2></center>
        {Object.keys(this.props.groupByDay).length > 0 ? (
          <MealItems
            groupByDay={this.props.groupByDay}
          />
        ) : (
          <div>
            <h3>Opps! Seems like you haven't saved any meals!</h3>
            <Link to="/search" className="button button-primary">Click Here to Start!</Link>
          </div>
        )}
        <Link to="/profile" className="button">Back to Home</Link>
      </div>
    );
  }
}
