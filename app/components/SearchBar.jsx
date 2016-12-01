import React from 'react';

export default class SearchMeals extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  handleSubmit(e) {
    this.props.searchForMeal(e);
  }

  render() {
    return (
      <div className="section section-search">
        <div className="container">
          <h5 id="searchTitle">Type in here:</h5>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="row u-max-full-width">
              <input
                id="searchString"
                type="text"
                name="searchString"
                className="nine columns"
                onChange={this.handleChange}
                value={this.props.searchString}
              />
              <input
                id="searchButt"
                className="button button-primary two columns"
                type="submit"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
