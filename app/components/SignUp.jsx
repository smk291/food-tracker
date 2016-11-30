import React from 'react';
import { Link } from 'react-router';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  signUp (e) {
    this.props.signUp(e);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  render() {
    return (
      <div className="section with-second-background">
        <h2>Sign Up</h2>
        <form onSubmit={this.signUp}>
          <div className="container">
            <div className="row">
              <div className="six columns">
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  className="u-full-width"
                  type="text"
                  placeholder="John"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.props.value}
                />
              </div>
              <div className="six columns">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  className="u-full-width"
                  type="text"
                  placeholder="Doe"
                  name="lastName"
                  onChange={this.handleChange}
                  value={this.props.value}
                />
              </div>
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
                    value={this.props.value}
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
                    onChange={this.handleChange}
                    value={this.props.value}
                  />
                </div>
              </div>
              <div>
                <Link className="button" to="/">Back to Home</Link>
                <input
                  className="button button-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
