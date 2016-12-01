import React from 'react';
import axios from 'axios';
import Main from './Main';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { Match } from 'react-router';
import { notify } from 'react-notify-toast';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  login(e) {
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
      this.setState({
        email: '',
        password: ''
      });
      this.props.changeState();
      notify.show('Logged In!', 'success', 3000);
    })
    .catch((err) => {
      notify.show(err.response.data, 'error', 3000);
    });
  }

  signUp(e) {
    e.preventDefault();

    axios({
      method: 'post',
      url: '/users',
      data: {
        lastName: this.state.lastName,
        firstName: this.state.firstName,
        email: this.state.email,
        password: this.state.password
      }
    })
    .then((res) => {
      this.setState({
        firstName: '',
        lastName: '',
      });
      this.login(e);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  handleChange(e) {
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
      <div>
        <Match exactly pattern="/" component={Main} />
        <Match pattern="/signUp" render={() => (
          <SignUp
            {...this.state}
            signUp={this.signUp}
            handleChange={this.handleChange}
          />
        )} />
        <Match pattern="/logIn" render={() => (
          <LogIn
            email={this.state.email}
            password={this.state.password}
            logIn={this.login}
            handleChange={this.handleChange}
          />
        )} />
      </div>
    );
  }
}
