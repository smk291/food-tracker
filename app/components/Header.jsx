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
    e.preventDefault();
    const sideNav = ReactDOM.findDOMNode(this.refs.sideNav);
    if (e.target.value === 'close') {
      sideNav.classList.remove("show-nav");
    } else {
      sideNav.classList.toggle("show-nav");
    }
  }

  render() {
    return (
      <header>
          <nav className="navigation">
            <a href="" onClick={this.navTransition}><i className="material-icons invoke">menu</i></a>
            {this.props.loggedIn ?
              <ProfileHeader logout={this.props.logout} navTrans={this.navTransition} ref="sideNav"/> :
              <LandingHeader navTrans={this.navTransition} ref="sideNav"/>}
          </nav>
      </header>
    );
  }
}
