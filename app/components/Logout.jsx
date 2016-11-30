import React from 'react';

const MealDetail = React.createClass({
  logout() {
    this.props.logout();
  },

  render() {
    return (
      <div>
        <button
          type="text"
          name="logout"
          onClick={this.logout}
          >Logout
        </button>
      </div>
    );
  }
});

export default MealDetail;