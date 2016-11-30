import React from 'react';

const SignUp = React.createClass({
  signUp(e) {
    this.props.signUp(e);
  },

  render() {
    return (
      <div id="content">
        <form>
          <input
            placeholder="First Name"
            type="text"
            value={this.props.firstName}
            name="firstName"
            onChange={this.props.handleChange.bind(null, 'firstName')}
          />

          <input
            placeholder="Last Name"
            type="text"
            value={this.props.lastName}
            name="lastName"
            onChange={this.props.handleChange.bind(null, 'lastName')}
          />

          <input
            placeholder="Email"
            type="text"
            value={this.props.signupEmail}
            name="email"
            onChange={this.props.handleChange.bind(null, 'signupEmail')}
          />

          <input
            placeholder="Password" id="password"
            type="password"
            value={this.props.signupPassword}
            name="password"
            onChange={this.props.handleChange.bind(null, 'signupPassword')}
          />

          <button
            name="signUp"
            type="text"
            onClick={this.signUp}
          >Sign up
          </button>
        </form>
      </div>

    )
  }
});

export default SignUp;