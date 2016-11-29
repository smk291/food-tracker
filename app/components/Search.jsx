import React from 'react';

const Search = React.createClass({
  updateSearchString (e) {
    this.props.updateSearchString(e);
  },

  searchForMeal(e) {
    this.props.searchForMeal(e);
  },

  render() {
    return (
      <div>
        <input placeholder="Search for food/ingredients" name="search" ref="mealSearch" value={this.props.searchString} onChange={this.updateSearchString}/>
        <button name="searchButton" id="searchInput" type="text" onClick={this.searchForMeal}>Log in</button>
      </div>
    )
  }
});

export default Search;