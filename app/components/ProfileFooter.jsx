import React from 'react';
import { Link } from 'react-router';

export default class ProfileFooter extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/profile">Profile Home</Link></li>
        <li>Log Out</li>
        <li><a href="https://mikeechen-jquerycalc.surge.sh/">Need a Calculator?</a></li>
      </ul>
    );
  }
}
