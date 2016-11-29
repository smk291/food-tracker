import React from 'react';

const Login = React.createClass({
  updateEmail(e) {
    this.props.updateEmail(e);
  },

  updatePassword(e) {
    this.props.updatePassword(e);
  },

  login(e) {
    this.props.login(e);
  },

 //  componentDidMount() {
 //   $(ReactDOM.findDOMNode(this.refs.selectBox)).on('change', this.props.handleChangeDropDown);
 //   console.log(this.refs.selectBox);
 // },

  render() {
    return (
      <div id="content">
        <div id="login">
          <form id="loginForm">
            <input placeholder="Email" id="email" type="text" value={this.props.email} name="email" onChange={this.updateEmail}/>

            <input placeholder="Password" id="password" type="password" value={this.props.password} name="password" onChange={this.updatePassword}/>

            <button name="login" type="text" onClick={this.login}>Log in</button>
          </form>
        </div>
      </div>
    )
  }
});

export default Login;