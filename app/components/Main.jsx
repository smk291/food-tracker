import React from 'react';
import Footer from './Footer';
import SignLog from './SignLog';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="section with-background">
          <div className="container">
            <h3 className="section-heading">Welcome to Food App Tracker!</h3>
            <p className="section-description">Your first stop to track calories!</p>
          </div>
        </div>
        <div className="section description">
          <div className="container">
            <div className="row">
              <div className="one-third column">
                <h3>Description 1</h3>
                <p>Some descriptions</p>
              </div>
              <div className="one-third column">
                <h3>Description 2</h3>
                <p>Some descriptions</p>
              </div>
              <div className="one-third column">
                <h3>Description 3</h3>
                <p>Some descriptions</p>
              </div>
            </div>
          </div>
        </div>
        <SignLog />
      </div>
    );
  }
}
