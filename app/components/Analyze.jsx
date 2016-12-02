import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { notify } from 'react-notify-toast';
import { Chart } from 'react-google-charts';
import _ from 'lodash';
import MealItems from './MealItems';
import Options from './Options';

export default class Analyze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOn: true,
      chartOption: 'Energy',
      options: {},
      rows: [],
      columns: []
    };
    this.organizeData = this.organizeData.bind(this);
  }

  organizeData() {
    let mealGroup = this.props.groupByDay;
    let mealSummed = [];
    let rows = []
    let titleString = this.state.chartOption;
    let unit = '';

    if (this.state.chartOption === 'Energy') {
      titleString = 'Calories';
    }

    let columns = [
      {
        'type': 'string',
        'label': 'Date'
      },
      {
        'type': 'number',
        'label': titleString
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
      newArr = [dateString, Number.parseFloat(nutrs[this.state.chartOption][0])];
      unit = nutrs[this.state.chartOption][1];
      mealSummed.push(newArr);
    });

    const options = {
      title: titleString + ' by Day',
      hAxis: {title: 'Date'},
      vAxis: {title: titleString + ' ' + unit},
      legend: {position: 'bottom'}
    };

    mealSummed.forEach((elm) => {
      rows.push(elm);
    });
    this.setState({rows: rows, columns: columns, options: options});
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({chartOption: value}, () => {
      this.organizeData();
    });
  }

  componentDidMount() {
    this.organizeData();
  }

  render() {
    const optionArr = this.props.nutrit.map((elm, index) => {
      let elmStr = elm;

      if (elmStr === 'Energy') {
        elmStr = 'Calories';
      }

      return <Options
        key={index}
        value={elm}
        string={elmStr}
      />
    });

    return (
      <div className="section with-second-background background-adjust">
        <center><h2 className="heading">Meal Analysis for {this.props.firstName}</h2></center>
        <div className="container">
          <Chart className="section section-description chart" chartType="LineChart" rows={this.state.rows} columns={this.state.columns} options={this.state.options} graph_id="LineChart" width={'100%'} height={'50rem'}/>
          <div className="six columns chartLabel">
            <label htmlFor="chartOption">Please Choose an Option</label>
            <select className="u-full-width" id="chartOption" onChange={this.handleChange.bind(this)}>
              {optionArr}
            </select>
          </div>
        </div>
        <Link to="/profile" className="button">Back to Home</Link>
      </div>
    );
  }
}
