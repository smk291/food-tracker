import React from 'react';

const Search = React.createClass({
  searchForMeal(e) {
    this.props.searchForMeal(e);
  },

  render() {
    return (
      <div>
        <input
          placeholder="Search for food/ingredients"
          name="search"
          ref="mealSearch"
          value={this.props.searchString}
          onChange={this.props.handleChange.bind(null, 'searchString')}/>

        <button
          name="searchButton" 
          id="searchInput"
          type="text"
          onClick={this.searchForMeal}
        >Search
        </button>
      </div>
    )
  }
});

export default Search;