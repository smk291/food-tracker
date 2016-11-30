import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="two-thirds column">
              <h5>Food App Tracker</h5>
              <p id="copyright">© 2016 F.A.T</p>
            </div>
            <div className="one-third column">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/logIn">Log In</Link></li>
                <li><Link to="/signUp">Sign Up</Link></li>
                <li><a href="https://mikeechen-jquerycalc.surge.sh/">Need a Calculator?</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
