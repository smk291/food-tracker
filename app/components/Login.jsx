import React from 'react';

const Login = React.createClass({
  login(e) {
    this.props.login(e);
  },

  render() {
    return (
      <div id="content">
        <div id="login">
          <form id="loginForm">
            <input
              placeholder="Email"
              ref="email"
              id="email"
              type="text"
              value={this.props.email}
              name="email"
              onChange={this.props.handleChange.bind(null, 'email')}
            />

            <input
              placeholder="Password"
              id="password"
              type="password"
              value={this.props.password}
              name="password"
              onChange={this.props.handleChange.bind(null, 'password')}
            />

            <button
              name="login"
              type="text"
              onClick={this.login}
              >Log in
            </button>
          </form>
        </div>
      </div>
    )
  }
});

export default Login;