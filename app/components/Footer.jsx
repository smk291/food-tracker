import React from 'react';
import LandingFooter from './LandingFooter';
import ProfileFooter from './ProfileFooter';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

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
              {this.props.loggedIn ?
                <ProfileFooter logout={this.props.logout}/> :
                <LandingFooter />}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
