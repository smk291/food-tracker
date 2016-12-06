import React from 'react';
import _ from 'lodash';
import MealItem from './MealItem';

export default class MealItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let mealArr = [];
    const dayObj = {
      Sun: 'Sunday',
      Mon: 'Monday',
      Tue: 'Tuesday',
      Wed: 'Wednesday',
      Thu: 'Thursday',
      Fri: 'Friday',
      Sat: 'Saturday'
    };
    const monthObj = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      May: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12
    };

    _.forEach(this.props.groupByDay, (elm, key) => {
      const newDate = new Date(key).toUTCString();
      const altDate = newDate.split(' ');
      const year = altDate[3];
      const month = monthObj[altDate[2]];
      const date = altDate[1];
      const day = dayObj[altDate[0].substring(0, altDate[0].indexOf(','))];
      mealArr.push(<MealItem
        key={key}
        day={day}
        year={year}
        month={month}
        date={date}
        meals={elm}
      />);
    });
    return (
      <div className="items container">
        {mealArr}
      </div>
    );
  }
}
