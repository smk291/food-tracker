import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
              <ul className="right">
                <li><a href="">Profile Home</a></li>
                <li><a href="">Log Out</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
