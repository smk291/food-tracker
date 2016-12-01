import React from 'react';

const SumOfDay = React.createClass({
  sumOfDay() {
    // console.log(this.props.dayToSum);;
    this.props.sumOfDay(this.props.dayToSum);
  },

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.dayToSum}
          onChange={this.props.handleChange.bind(null, 'dayToSum')}
        />
        <button type="text" onClick={this.sumOfDay}>
          Sum the day
        </button>
      </div>
    );
  }

});

export default SumOfDay;