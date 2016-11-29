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
      searchString: ''
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
    })
    .catch((err) => {
      console.log(err);
    });
  },

  updateEmail(e) {
    e.preventDefault();

    this.setState({email: e.target.value})
  },

  updatePassword(e) {
    e.preventDefault();

    this.setState({password: e.target.value});
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

  updateSearchString(e) {
    e.preventDefault();

    this.setState({searchString: e.target.value})
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
              updateEmail={this.updateEmail}
              updatePassword={this.updatePassword}
              searchForMeal={this.searchForMeal}
              updateSearchString={this.updateSearchString}
            />
          }/>
        </div>
      </BrowserRouter>
    )
  }
});

export default App;
