import React from 'react';

export default class LogIn extends React.Component {
  render() {
    return (
      <main className="section with-second-background">
        <h2>Log In</h2>
        <form>
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="twelve columns">
                  <label for="email">Your Email</label>
                  <input id="email" className="u-full-width" type="email" placeholder="johndoe@mail.com" />
                </div>
              </div>
              <div className="row">
                <div className="twelve columns">
                  <label for="password">Password</label>
                  <input id="password" className="u-full-width" type="password" placeholder="youreawizard" />
                </div>
              </div>
              <div>
                <input className="button button-primary" type="submit" placeholder="Submit"/>
              </div>
            </div>
          </div>
        </form>
      </main>
    );
  }
}
