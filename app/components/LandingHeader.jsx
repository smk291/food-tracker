import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  navTransition(e) {
    this.props.navTrans(e);
  }

  render() {
    return (
      <div ref="sideNav" className="side-nav">
        <a href="" className="closebtn" onClick={this.navTransition.bind(this)}><i className="material-icons">close</i></a>
        <Link to="/">Home</Link>
        <Link to="signUp">Sign Up</Link>
        <Link to="logIn">Log In</Link>
      </div>
    );
  }
}
