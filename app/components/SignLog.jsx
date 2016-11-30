import React from 'react';
import { Link } from 'react-router';

export default class SignLog extends React.Component {
  render() {
    return (
      <div className="section with-background">
        <div className="container">
          <h2>Let's get started!</h2>
          <Link className="button button-primary" to="/signUp">Sign Up</Link>
          <Link className="button button-primary" to="/logIn">Log In</Link>
        </div>
      </div>
    );
  }
}
