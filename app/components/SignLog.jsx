import React from 'react';
import { Link } from 'react-router';

export default class SignLog extends React.Component {
  render() {
    return (
      <div className="section with-background">
        <div className="container">
          <h3>Let's get started!</h3>
          <Link className="button button-primary" to="/signUp">Sign Up</Link>
          <Link className="button button-primary" to="/LogIn">Log In</Link>
        </div>
      </div>
    );
  }
}
