import React from 'react';

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
                <li>Log In</li>
                <li>Sign Up</li>
                <li><a href="https://mikeechen-jquerycalc.surge.sh/">Need a Calculator?</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
