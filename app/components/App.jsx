import Main from './Main';
import {BrowserRouter, Link, Match} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import DeleteMeal from './DeleteMeal';
import GetUserMeals from './GetUserMeals';
import Logout from './Logout';
import PatchMeal from './PatchMeal';
import PatchMetrics from './PatchMetrics';
import PostMeal from './PostMeal';
import PostMetrics from './PostMetrics';
import SignUp from './SignUp';

const App = React.createClass({
  getInitialState() {
    return {
      meal: [],
      email: '',
      password: '',
      searchString: '',
      signUpEamil: '',
      signUpPassword: '',
      firstName: '',
      lastName: '',
      firstName: '',
      lastName: '',
      signupEmail: '',
      signupPassword: '',
      body: {
        name: '',
        meal: '',
        inPlan: false,
      },
      listOfMeals: [],
      usersMeals: [{}],
      mealDetail: []
    };
  },

  login (e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/token',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
    .then((res) => {
      console.log('Sucess');
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  },

  logout () {
    axios({
      method: 'delete',
      url: '/token'
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  },

  signUp (e) {
    e.preventDefault();
    axios({
      method: 'post',
      url: '/users',
      data: {
        lastName: this.state.lastName,
        firstName: this.state.firstName,
        email: this.state.signupEmail,
        password: this.state.signupPassword
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  },

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  },

  searchForMeal(e) {
    e.preventDefault();

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
      this.setState({meal: [res]});
    })
    .then(() => {
      console.log(meal);
      const entryName = this.props.meal.map((meal) => {
        return `${meal.food_name} (${meal.serving_qty}), `;
      });
      this.setState({body: {
        name: entryName,
        meal: this.state.meal,
        inPlan: false
      }})
    })
    .then(() => {
      console.log(this.state.body);
      console.log('success');
    }).catch((err) => {
      console.log(err);
    });
  },

  postMeal (e, data) {
    e.preventDefault();

    axios({
      method: 'post',
      url: '/meals',
      data: data
    })
    .then((res) => {
      console.log('success');
      console.log(res);
    })
    .then(() => {
    }).catch((err) => {
      console.log(err);
    });
  },

  handleGetUserMeals () {
    console.log('!hi!');
    const listMeals = [];

    let usersMeals = [];
    axios({
      method: 'get',
      url: '/users_meals_data'
    })
    .then((res) => {
      console.log('is this working');
      console.log(res.data);
      usersMeals = res.data;
      this.setState({usersMeals: res.data});
    })
    .then(() => {
      console.log(this.state.usersMeals);
    })
    .catch((err) => {
      console.log(err);
    });
  },

  handlePatchMeal (e, id, data) {
    e.preventDefault();

    axios({
      method: 'patch',
      url: `/meals/${id}`,
      data: data
    })
    .then((res) => {
      console.log('success');
      console.log(res);
    })
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
    });
  },

  handleDeleteMeal (id) {
    axios({
      method: 'delete',
      url: `/meals/${id}`
    })
    .then((res) => {
      console.log(res);
    })
    .then(() => {
      this.handleGetUserMeals();
    })
    .catch((err) => {
      console.log(err);
    });

  },

  handlePostMetrics (e, data) {
    e.preventDefault();

    axios({
      method: 'post',
      url: `/metrics`,
      data: data
    })
    .then((res) => {
      console.log('success');
      console.log(res);
    })
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
    });
  },

  handlePatchMetrics (e, data) {
    e.preventDefault();

    axios({
      method: 'patch',
      url: '/metrics',
      data: data
    })
    .then((res) => {
      console.log('success');
      console.log(res);
    })
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
    });
  },

  handleGetAMeal(id) {
    console.log(`id is ${id}`);
    axios({
      method: 'get',
      url: `/users_meals_data/${id}`
    })
    .then((res) => {
      const mealDetail = res.data;
      this.setState({mealDetail});
      console.log(mealDetail);
      console.log('success');
    })
    .then(() => {
      console.log(this.state.mealDetail);
    })
    .catch((err) => {
      console.log(err);
    });
  },

  render() {
    return (
      <BrowserRouter>
        <div>
          <Match pattern="/" exactly render={ ()=>
            <Main
              email={this.state.email}
              password={this.state.password}
              meal={this.state.meal}
              searchString={this.state.searchString}
              login={this.login}
              searchForMeal={this.searchForMeal}
              handleChange={this.handleChange}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              signupEmail={this.state.signupEmail}
              signupPassword={this.state.signupPassword}
              signUp={this.signUp}
              postMeal={this.postMeal}
              body={this.state.body}
              handleGetUserMeals={this.handleGetUserMeals}
              usersMeals={this.state.usersMeals}
              handleGetAMeal={this.handleGetAMeal}
              mealDetail={this.state.mealDetail}
              handleDeleteMeal={this.handleDeleteMeal}
              logout={this.logout}
            />
          }/>
        </div>
      </BrowserRouter>
    )
  }
});

export default App;
