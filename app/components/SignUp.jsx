import React from 'react';
import { Link } from 'react-router';

export default class SignUp extends React.Component {
  render() {
    return (
      <main className="section with-second-background">
        <h2>Sign Up</h2>
        <form>
          <div className="container">
            <div className="row">
              <div className="six columns">
                <label for="firstName">First Name</label>
                <input id="firstName" className="u-full-width" type="text" placeholder="John" />
              </div>
              <div className="six columns">
                <label for="lastName">Last Name</label>
                <input id="lastName" className="u-full-width" type="text" placeholder="Doe" />
              </div>
              <div className="row">
                <div className="twelve columns">
                  <label for="email">Your Email</label>
                  <input id="email" className="u-full-width" type="email" placeholder="johndoe@mail.com" />
                </div>
              </div>
              <div className="row">
                <div className="twelve columns">
                  <label for="password">Password</label>
                  <input id="password" className="u-full-width" type="password" placeholder="youreawizard"/>
                </div>
              </div>
              <div>
                <Link className="button" to="/">Back to Home</Link>
                <input className="button button-primary" type="submit" placeholder="Submit"/>
              </div>
            </div>
          </div>
        </form>
      </main>
    );
  }
}
