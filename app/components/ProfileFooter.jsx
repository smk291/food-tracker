import React from 'react';
import { Link } from 'react-router';

export default class ProfileFooter extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this)
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <ul>
        <li><Link to="/profile">Profile Home</Link></li>
        <li><Link to="/" onClick={this.logout}>Log Out</Link></li>
        <li><a href="https://mikeechen-jquerycalc.surge.sh/">Need a Calculator?</a></li>
      </ul>
    );
  }
}
