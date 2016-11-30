import React from 'react';
import Footer from './Footer';
import SignLog from './SignLog';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="section with-background">
          <div className="container">
            <h1 className="section-heading">Welcome to Food App Tracker!</h1>
            <h4 className="section-description">Your first stop to track calories!</h4>
          </div>
        </div>
        <div className="section description">
          <div className="container">
            <div className="row">
              <div className="two columns">
                <h3>10%</h3>
                <p>L.U.C.K</p>
              </div>
              <div className="two columns">
                <h3>20%</h3>
                <p>S.K.I.L.L</p>
              </div>
              <div className="two columns">
                <h3>15%</h3>
                <p>Concentrated P.O.W.E.R and W.I.L.L</p>
              </div>
              <div className="two columns">
                <h3>5%</h3>
                <p>P.L.E.A.S.U.R.E</p>
              </div>
              <div className="two columns">
                <h3>50%</h3>
                <p>P.A.I.N</p>
              </div>
              <div className="two columns">
                <h3>100%</h3>
                <p>Reason to Remember the N.A.M.E</p>
              </div>
            </div>
          </div>
        </div>
        <SignLog />
      </div>
    );
  }
}
