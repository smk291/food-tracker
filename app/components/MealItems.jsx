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
      const sudoYear = Number.parseInt(key.substring(0, key.indexOf('-')));
      const sudoMonth = Number.parseInt(key.substring(key.indexOf('-') + 1, key.lastIndexOf('-'))) - 1;
      const sudoDay = Number.parseInt(key.substring(key.lastIndexOf('-') + 1, key.indexOf('T')));
      const newDate = new Date(Date.UTC(sudoYear, sudoMonth, sudoDay));
      console.log(newDate);
      const year = newDate.getFullYear();
      const month = newDate.getMonth() + 1;
      const date = newDate.getDate();
      const day = dayArr[newDate.getDay()];
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
