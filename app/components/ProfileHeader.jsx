import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.navTransition = this.navTransition.bind(this);
  }

  navTransition(e) {
    this.props.navTrans(e);
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <div ref="sideNav" className="side-nav">
        <a href="" className="close closebtn" onClick={this.navTransition}><i className="close material-icons">close</i></a>
        <Link onClick={this.navTransition} to="/profile">Profile Home</Link>
        <Link onClick={this.navTransition} to="/search">Search Meals</Link>
        <Link onClick={this.navTransition} to="/review">Review Meals</Link>
        <a href="#">Analyze</a>
        <Link to="/" onClick={this.logout.bind(this)}>Log Out</Link>
      </div>
    );
  }
}
