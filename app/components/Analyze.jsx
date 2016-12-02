import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { notify } from 'react-notify-toast';
import { Chart } from 'react-google-charts';
import _ from 'lodash';
import MealItems from './MealItems';

export default class Analyze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOn: true,
      options: {
        title: 'Calories by Day',
        hAxis: {title: 'Date'},
        vAxis: {title: 'Calories (kcal)'},
        legend: {position: 'bottom'}
      },
      rows: [],
      columns: [],
    };
  }

  componentDidMount() {
    let mealGroup = this.props.groupByDay;
    let mealSummed = [];
    let rows = this.state.rows;
    let columns = [
      {
        'type': 'string',
        'label': 'Date'
      },
      {
        'type': 'number',
        'label': 'Calories'
      }
    ];

    _.forEach(mealGroup, (elm, key) => {
      let nutrs = {};
      let newArr = [];
      const newDate = new Date(key);
      const month = newDate.getMonth() + 1;
      const date = newDate.getDate();
      const dateString = month + '/' + date;
      for (let j = 0; j < elm.length; j++){
        for (let l = 0; l < elm[j].length; l++) {
          for (let k = 0; k < elm[j][l].full_nutrients.length; k++){
            let nutrNameFromAttrId = this.props.nutrIds[elm[j][l].full_nutrients[k].attr_id][1];

            if (nutrs.hasOwnProperty(nutrNameFromAttrId)){
              nutrs[nutrNameFromAttrId][0] += elm[j][l].full_nutrients[k].value;
            } else {
              nutrs[nutrNameFromAttrId] = [elm[j][l].full_nutrients[k].value, this.props.nutrIds[mealGroup[key][j][l].full_nutrients[k].attr_id][0]];
            }
          }
        }
      }
      newArr = [dateString, Number.parseFloat(nutrs.Calories[0])];
      mealSummed.push(newArr)
    });

    mealSummed.forEach((elm) => {
      rows.push(elm);
    });
    this.setState({rows: rows, columns: columns})
  }

  render() {
    return (
      <div className="section with-second-background background-adjust">
        <center><h2 className="heading">Meal Analysis for {this.props.firstName}</h2></center>
        <div className="container">
          {/* <div class="six columns">
            <label for="chart">Reason for contacting</label>
            <select class="u-full-width" id="chart">
              <option value="Option 1">Questions</option>
              <option value="Option 2">Admiration</option>
              <option value="Option 3">Can I get your number?</option>
            </select>
          </div> */}
          <Chart className="section section-description" chartType="LineChart" rows={this.state.rows} columns={this.state.columns} options={this.state.options} graph_id="LineChart" width={'100%'} height={'50rem'}/>
        </div>
        <Link to="/profile" className="button">Back to Home</Link>
      </div>
    );
  }
}
