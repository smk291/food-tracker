import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
    this.navTransition = this.navTransition.bind(this);
  }

  navTransition(e) {
    this.props.navTrans(e);
  }

  render() {
    return (
      <div className="side-nav">
        <a href="" className="close closebtn" onClick={this.navTransition}><i className="close material-icons">close</i></a>
        <Link onClick={this.navTransition} to="/">Home</Link>
        <Link onClick={this.navTransition} to="signUp">Sign Up</Link>
        <Link onClick={this.navTransition} to="logIn">Log In</Link>
      </div>
    );
  }
}
