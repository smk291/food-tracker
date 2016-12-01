import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

export default class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  navTransition(e) {
    this.props.navTrans(e);
  }

  render() {
    return (
      <div ref="sideNav" className="side-nav">
        <a href="" className="closebtn" onClick={this.navTransition.bind(this)}><i className="material-icons">close</i></a>
        <a href="#">Profile</a>
        <a href="#">Search Meals</a>
        <a href="#">Review Meals</a>
        <a href="#">Analyze</a>
        <a href="#">Log Out</a>
      </div>
    );
  }
}
