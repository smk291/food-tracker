import React from 'react';

export default class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="with-background">
          <div className="section container">
            <h3 className="">Welcome to Food App Tracker!</h3>
            <a className="button button-primary" href="">Sign Up</a>
            <a className="button button-primary" href="">Log In</a>
          </div>
        </div>
      </main>
    );
  }
}
