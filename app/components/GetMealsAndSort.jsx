import React from 'react';

const GetMealsAndSort = React.createClass({
  handleGetUserMealsDateSort() {
    this.props.handleGetUserMealsDateSort();
  },

  render() {
    return (
      <div>
        <button type="text" onClick={this.handleGetUserMealsDateSort}>
          Get Sorted Meals
        </button>
      </div>
    );
  }

});

export default GetMealsAndSort;