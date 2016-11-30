import React from 'react';
import { Link } from 'react-router';

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  logIn (e) {
    this.props.logIn(e);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    return (
      <div className="section with-second-background">
        <h2>Log In</h2>
        <form onSubmit={this.logIn}>
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="twelve columns">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    className="u-full-width"
                    type="email"
                    placeholder="johndoe@mail.com"
                    name="email"
                    onChange={this.handleChange}
                    value={this.props.email}
                  />
                </div>
              </div>
              <div className="row">
                <div className="twelve columns">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    className="u-full-width"
                    type="password"
                    placeholder="youreawizard"
                    name="password"
                    onChange={this.props.handleChange}
                    value={this.props.password}
                  />
                </div>
              </div>
              <div>
                <Link className="button" to="/">Back to Home</Link>
                <input className="button button-primary" type="submit" placeholder="Submit"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
