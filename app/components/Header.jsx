import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import LandingHeader from './LandingHeader';
import ProfileHeader from './ProfileHeader';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navTransition = this.navTransition.bind(this);
  }

  navTransition(e) {
    const sideNav = ReactDOM.findDOMNode(this.refs.sideNav);
    const closeClass = e.target.classList[0];

    if (closeClass) {
      e.preventDefault();
    }

    if (!closeClass || closeClass === 'close') {
      sideNav.style.width = 0;
    } else {
      sideNav.style.width = '30rem';
    }
  }

  render() {
    return (
      <header>
          <nav className="navigation">
            <a href="" onClick={this.navTransition.bind(this)}><i className="material-icons invoke">menu</i></a>
            {this.props.loggedIn ?
              <ProfileHeader logout={this.props.logout} navTrans={this.navTransition} ref="sideNav"/> :
              <LandingHeader navTrans={this.navTransition} ref="sideNav"/>}
          </nav>
      </header>
    );
  }
}
