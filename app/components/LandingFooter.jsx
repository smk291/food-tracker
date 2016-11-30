import React from 'react';
import { Link } from 'react-router';

export default class LandingFooter extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/logIn">Log In</Link></li>
        <li><Link to="/signUp">Sign Up</Link></li>
        <li><a href="https://mikeechen-jquerycalc.surge.sh/">Need a Calculator?</a></li>
      </ul>
    );
  }
}
