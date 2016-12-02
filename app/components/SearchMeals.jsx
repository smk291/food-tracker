import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SubmitMeal from './SubmitMeal';
import { notify } from 'react-notify-toast';
import { Link } from 'react-router';

export default class SearchMeals extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.searchForMeal = this.searchForMeal.bind(this);
    this.postMeal = this.postMeal.bind(this);
    this.setName = this.setName.bind(this);
    this.state = {
      searchString: '',
      mealToPost: [],
      name: '',
      meal: '',
      postDate: '',
      postTime: '',
      nutrs: {},
      alcohol: '',
      caffeine: '',
      water: '',
      Energy: '',
      EnergyKJ: '',
      TotalFat: '',
      FattyAcidsTotal: '',
      FattyAcidsMonounsaturated: '',
      FattyAcidsPolyunsaturated: '',
      FattyAcidTrans: '',
      FattyAcidsTransMono: '',
      FattyAcidsTransP: '',
      Cholesterol: '',
      Na: '',
      Protein: '',
      Potassium: '',
      Carb: '',
      Fiber: '',
      Sugars: '',
      Glucose: '',
      Fructose: '',
      Galactose: '',
      Lactose: '',
      Maltose: '',
      Starch: '',
      Sucrose: ''
    };
    this.sumNutr = this.sumNutr.bind(this);
  }

  setName(name) {
    this.setState({name: name});
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
      meal = res;
      this.setState({meal: [res]});

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
      const mealName = mealToPost.reduce((acc, food, idx, arr) => {
        if (idx < arr.length - 1) {
          return acc += `${food.food_name} (${food.serving_qty} ${food.serving_unit}), `;
        } else {
          return acc += `${food.food_name} (${food.serving_qty}  ${food.serving_unit})`;
        }
      }, ``);

      this.setState({name: mealName})
    })
    .then(() => {
      const meal = this.state.mealToPost;
      let nutrs = {};

      for (let j = 0; j < meal.length; j++){
        for (let k = 0; k < meal[j].full_nutrients.length; k++){
          let nutrNameFromAttrId = this.props.nutrIds[meal[j].full_nutrients[k].attr_id][1];

          if (nutrs.hasOwnProperty(nutrNameFromAttrId)){
            nutrs[nutrNameFromAttrId][0] += meal[j].full_nutrients[k].value;
          } else {
            nutrs[nutrNameFromAttrId] = [meal[j].full_nutrients[k].value, this.props.nutrIds[meal[j].full_nutrients[k].attr_id][0]];
          }
        }
      }

      console.log(nutrs);
      this.setState({nutrs})


    })
    .then(() => {

      if (this.state.nutrs['Calories'] > 0) {
        this.setState({Calories: <tr><td>Calories</td><td>{this.state.nutrs['Calories']}</td></tr>})
      }

      if (this.state.nutrs['Energy (kJ)'] > 0) {
        this.setState({EnergyKJ: <tr><td>Energy (kJ)</td><td>{this.state.nutrs['Energy (kJ)']}</td></tr>})
      }

      if (this.state.nutrs['Total lipid (fat)'] > 0) {
        this.setState({TotalFat: <tr><td>Total lipid (fat)</td><td>{this.state.nutrs['Total lipid (fat)']}</td></tr>})
      }

      if (this.state.nutrs['Fatty acids, total saturated'] > 0) {
        this.setState({FattyAcidsTotal: <tr><td>Fatty acids, total saturated</td><td>{this.state.nutrs['Fatty acids, total saturated']}</td></tr>})
      }

      if (this.state.nutrs['Fatty acids, total monounsaturated'] > 0) {
        this.setState({FattyAcidsMonounsaturated: <tr><td>Fatty acids, total monounsaturated</td><td>{this.state.nutrs['Fatty acids, total monounsaturated']}</td></tr>})
      }

      if (this.state.nutrs['Fatty acids, total polyunsaturated'] > 0) {
        this.setState({FattyAcidsPolyunsaturated: <tr><td>Fatty acids, total polyunsaturated</td><td>{this.state.nutrs['Fatty acids, total polyunsaturated']}</td></tr>})
      }

      if (this.state.nutrs['Fatty acids, total trans'] > 0) {
        this.setState({FattyAcidTrans: <tr><td>Fatty acids, total trans</td><td>{this.state.nutrs['Fatty acids, total trans']}</td></tr>})
      }

      if (this.state.nutrs['Fatty acids, total trans-monoenoic'] > 0) {
        this.setState({FattyAcidsTransMono: <tr><td>Fatty acids, total trans-monoenoic</td><td>{this.state.nutrs['Fatty acids, total trans-monoenoic']}</td></tr>})
      }

      if (this.state.nutrs['Fatty acids, total trans-polyenoic'] > 0) {
        this.setState({FattyAcidsTransP: <tr><td>Fatty acids, total trans-polyenoic</td><td>{this.state.nutrs['Fatty acids, total trans-polyenoic']}</td></tr>})
      }

      if (this.state.nutrs['Cholesterol'] > 0) {
        this.setState({Cholesterol: <tr><td>Cholesterol</td><td>{this.state.nutrs['Cholesterol']}</td></tr>})
      }

      if (this.state.nutrs['Sodium, Na'] > 0) {
        this.setState({Na: <tr><td>Sodium, Na</td><td>{this.state.nutrs['Sodium, Na']}</td></tr>})
      }

      if (this.state.nutrs['Protein'] > 0) {
        this.setState({Protein: <tr><td>Protein</td><td>{this.state.nutrs['Protein']}</td></tr>})
      }

      if (this.state.nutrs['Potassium, K'] > 0) {
        this.setState({Potasium: <tr><td>Potassium, K</td><td>{this.state.nutrs['Potassium, K']}</td></tr>})
      }

      if (this.state.nutrs['Carbohydrate, by difference'] > 0) {
        this.setState({Carb: <tr><td>Carbohydrate, by difference</td><td>{this.state.nutrs['Carbohydrate, by difference']}</td></tr>})
      }

      if (this.state.nutrs['Fiber, total dietary'] > 0) {
        this.setState({Fiber: <tr><td>Fiber, total dietary</td><td>{this.state.nutrs['Fiber, total dietary']}</td></tr>})
      }

      if (this.state.nutrs['Sugars, total'] > 0) {
        this.setState({Sugars: <tr><td>Sugars, total</td><td>{this.state.nutrs['Sugars, total']}</td></tr>})
      }

      if (this.state.nutrs['Glucose (dextrose)'] > 0) {
        this.setState({Glucose: <tr><td>Glucose (dextrose)</td><td>{this.state.nutrs['Glucose (dextrose)']}</td></tr>})
      }

      if (this.state.nutrs['Fructose'] > 0) {
        this.setState({Fructose: <tr><td>Fructose</td><td>{this.state.nutrs['Fructose']}</td></tr>})
      }

      if (this.state.nutrs['Galactose'] > 0) {
        this.setState({Galactose: <tr><td>Galactose</td><td>{this.state.nutrs['Galactose']}</td></tr>})
      }

      if (this.state.nutrs['Lactose'] > 0) {
        this.setState({Lactose: <tr><td>Lactose</td><td>{this.state.nutrs['Lactose']}</td></tr>})
      }

      if (this.state.nutrs['Maltose'] > 0) {
        this.setState({Maltose: <tr><td>Maltose</td><td>{this.state.nutrs['Maltose']}</td></tr>})
      }

      if (this.state.nutrs['Starch'] > 0) {
        this.setState({Starch: <tr><td>Starch</td><td>{this.state.nutrs['Starch']}</td></tr>})
      }

      if (this.state.nutrs['Sucrose'] > 0) {
        this.setState({Sucrose: <tr><td>Sucrose</td><td>{this.state.nutrs['Sucrose']}</td></tr>})
      }

    })
    .catch((err) => {
      notify.show(err.response.data.message, 'error', 3000);
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
      });
      this.props.resetState();
      notify.show('Meal Saved!', 'success', 3000);
    })
    .then(() => {
    }).catch((err) => {
      const errArr = err.response.data.errors.map(elm => {
        return elm.messages[0];
      });
      const errString = errArr.join(', ');
      notify.show(errString, 'error', 3000);
    });
  }

  sumNutr() {
    const meal = this.state.mealToPost;
    let nutrs = {};

    for (let j = 0; j < meal.length; j++){
      for (let k = 0; k < meal[j].full_nutrients.length; k++){
        let nutrNameFromAttrId = this.props.nutrIds[meal[j].full_nutrients[k].attr_id][1];

        if (nutrs.hasOwnProperty(nutrNameFromAttrId)){
          nutrs[nutrNameFromAttrId][0] += meal[j].full_nutrients[k].value;
        } else {
          nutrs[nutrNameFromAttrId] = [meal[j].full_nutrients[k].value, this.props.nutrIds[meal[j].full_nutrients[k].attr_id][0]];
        }
      }
    }

    console.log(nutrs);
    this.setState({nutrs})
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
          sumNutr={this.sumNutr}
          meal={this.state.meal}
          name={this.state.name}
          mealToPost={this.state.mealToPost}
          setName={this.setName}
          nutrIds={this.props.nutrIds}
          nutrs={this.state.nutrs}
          alcohol={this.state.alcohol}
          caffeine={this.state.caffeine}
          water={this.state.water}
          Energy={this.state.Energy}
          EnergyKJ={this.state.EnergyKJ}
          TotalFat={this.state.TotalFat}
          FattyAcidsTotal={this.state.FattyAcidsTotal}
          FattyAcidsMonounsaturated={this.state.FattyAcidsMonounsaturated}
          FattyAcidsPolyunsaturated={this.state.FattyAcidsPolyunsaturated}
          FattyAcidTrans={this.state.FattyAcidTrans}
          FattyAcidsTransMono={this.state.FattyAcidsTransMono}
          FattyAcidsTransP={this.state.FattyAcidsTransP}
          Cholesterol={this.state.Cholesterol}
          Na={this.state.Na}
          Protein={this.state.Protein}
          Potassium={this.state.Potassium}
          Carb={this.state.Carb}
          Fiber={this.state.Fiber}
          Sugars={this.state.Sugars}
          Glucose={this.state.Glucose}
          Fructose={this.state.Fructose}
          Galactose={this.state.Galactose}
          Lactose={this.state.Lactose}
          Maltose={this.state.Maltose}
          Starch={this.state.Starch}
          Sucrose={this.state.Sucrose}
        />
        { this.state.name.length > 0 ? (
          <SubmitMeal
            name={this.state.name}
            mealToPost={this.state.mealToPost}
            postDate={this.state.postDate}
            postTime={this.state.postTime}
            handleChange={this.handleChange}
            postMeal={this.postMeal}
          />) : null }
          <Link to="/profile" className="button">Back to Home</Link>
      </div>
    );
  }
}
