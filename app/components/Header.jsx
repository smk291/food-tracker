import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navTransition = this.navTransition.bind(this);
  }

  navTransition(e) {
    e.preventDefault();
    const sideNav = ReactDOM.findDOMNode(this.refs.sideNav);
    if (e.value === 'close') {
      sideNav.classList.remove("show-nev");
    } else {
      sideNav.classList.toggle("show-nav");
    }
  }

  render() {
    return (
      <header>
          <nav className="navigation">
            <a href="" onClick={this.navTransition}><i className="material-icons invoke">menu</i></a>
            <div ref="sideNav" className="side-nav">
              <a href="" className="closebtn" onClick={this.navTransition}><i className="material-icons">close</i></a>
              <a href="#">Profile</a>
              <a href="#">Search Meals</a>
              <a href="#">Review Meals</a>
              <a href="#">Analyze</a>
              <a href="#">Log Out</a>
            </div>
          </nav>
      </header>
    );
  }
}
