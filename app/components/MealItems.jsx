import React from 'react';
import _ from 'lodash';
import MealItem from './MealItem';

export default class MealItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let mealArr = [];
    const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    _.forEach(this.props.groupByDay, (elm, key) => {
      const newDate = new Date(key);
      console.log(newDate);
      console.log(newDate.toUTCString());
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 1;
      const date = newDate.getDate();
      const day = dayArr[newDate.getDay()];
      const altDate = new Date(Date.UTC(year, month - 1, date));
      console.log(altDate);
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
