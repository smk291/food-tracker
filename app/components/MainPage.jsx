import React from 'react';
import Main from './Main';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { Match } from 'react-router';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Match exactly pattern="/" component={Main} />
        <Match pattern="/signUp" component={SignUp} />
        <Match pattern="/logIn" component={LogIn} />
      </div>
    );
  }
}
