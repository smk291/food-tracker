import Main from './Main';
import {BrowserRouter, Link, Match} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
      signupPassword: ''
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
      console.log('success');
    }).catch((err) => {
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
            />
          }/>
        </div>
      </BrowserRouter>
    )
  }
});

export default App;
