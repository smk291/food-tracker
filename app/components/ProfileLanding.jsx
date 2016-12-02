import React from 'react';
import { Link } from 'react-router';

export default class ProfileLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="section with-background">
          <h2>Hello {this.props.firstName}!</h2>
          <h4>What do you want to do today?</h4>
        </div>
        <div className="section section-description">
          <div className="container">
            <div className="row profile-button">
              <div className="one-third column">
                <Link to="/search" className="button">Search Meals</Link>
              </div>
              <div className="one-third column">
                <Link to="/review" className="button">Review My Meals</Link>
              </div>
              <div className="one-third column">
                <Link to="/analyze" className="button">Analyze My Meals</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
