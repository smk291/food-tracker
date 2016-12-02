import React from 'react';

export default class SubmitMeal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postMeal(this.props.name, {"meal": this.props.mealToPost}, this.props.postDate, this.props.postTime);
  }

  render() {
    return (
      <div className="container meal-form">
        <form id="postMeal" onSubmit={this.handleSubmit}>
          <input
            className="mealName u-full-width"
            placeholder="name"
            id="name"
            type="text"
            value={this.props.name}
            name="name"
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="postDate"
            value={this.props.postDate}
            onChange={this.handleChange}
          />
          <input
            type="time"
            name="postTime"
            value={this.props.postTime}
            onChange={this.handleChange}
          />
          <input
            className="button"
            type="submit"
            value="Save Meal"
          />
        </form>
      </div>
    );
  }
}
