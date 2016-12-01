import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SubmitMeal from './SubmitMeal';
import notify from 'react-notify-toast';

export default class SearchMeals extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.searchForMeal = this.searchForMeal.bind(this);
    this.postMeal = this.postMeal.bind(this);
    this.state = {
      searchString: '',
      mealToPost: [],
      name: '',
      meal: '',
      postDate: '',
      postTime: '',
    }
  }

  handleChange(e) {
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  searchForMeal(e) {
    e.preventDefault();

    let meal = {};
    let mealToPost = []
    axios({
      method: 'post',
      url: 'https://trackapi.nutritionix.com//v2/natural/nutrients',
      data: {
        "query": this.state.searchString,
        "timezone": "US/Eastern"
      },
      headers: {
        'Content-Type': 'application/json',
        'x-app-id': '664a2fa5',
        'x-app-key': '7de4a613f0054b205e2e00c58a13d18d',
        'x-remote-user-id': 0
      }
    })
    .then((res) => {
      console.log(res);
      meal = res;
      this.setState({meal: [res]});
      console.log(res.data.foods);
      for (let i = 0; i < res.data.foods.length; i++) {
        let tempObj = {};
        tempObj.food_name = res.data.foods[i].food_name;
        tempObj.full_nutrients = res.data.foods[i].full_nutrients;
        tempObj.full_nutrients = res.data.foods[i].full_nutrients;
        tempObj.serving_qty = res.data.foods[i].serving_qty;
        tempObj.serving_qty = res.data.foods[i].serving_qty;
        tempObj.serving_unit = res.data.foods[i].serving_unit;
        tempObj.photo = res.data.foods.photo;
        mealToPost.push(tempObj);
      }

      this.setState({mealToPost})
    })
    .then(() => {
      console.log(this.state.mealToPost);
      const mealName = mealToPost.reduce((acc, food, idx, arr) => {
        if (idx < arr.length - 1) {
          return acc += `${food.food_name} (${food.serving_qty} ${food.serving_unit}), `;
        } else {
          return acc += `${food.food_name} (${food.serving_qty}  ${food.serving_unit})`;
        }
      }, ``);

      this.setState({name: mealName})
    }).catch((err) => {
      notify.show(err.response.data, 'error', 3000);
    });
  }

  postMeal (name, meal, date, time) {
    axios({
      method: 'post',
      url: '/meals',
      data: {
        name: name,
        meal: meal,
        date: date,
        time: time
      }
    })
    .then((res) => {
      this.setState({
        searchString: '',
        mealToPost: [],
        name: '',
        meal: '',
        postDate: '',
        postTime: ''
      })
      notify.show('Meal Saved!', 'success', 3000);
    })
    .then(() => {
    }).catch((err) => {
      notify.show(err.response.data, 'error', 3000);
    });
  }

  render() {
    return (
      <div className="section with-second-background background-adjust">
        <center><h2 className="heading">Search for your Meal!</h2></center>
        <SearchBar
          searchString={this.state.searchString}
          handleChange={this.handleChange}
          searchForMeal={this.searchForMeal}
        />
        <SearchResults
          meal={this.state.meal}
        />
        { this.state.name.length > 0 ? (
          <SubmitMeal
            name={this.state.name}
            handleChange={this.handleChange}
            postMeal={this.postMeal}
          />) : null }
      </div>
    );
  }
}
