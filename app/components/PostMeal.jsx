import React from 'react';

const PostMeal = React.createClass({
  postMeal(e) {
    e.preventDefault();
    console.log(this.props.meal);
    console.log(this.props.name);
    this.props.postMeal(this.props.name, this.props.meal[0]);
  },

  render() {
    return (
      <div>
        <div>
          <form id="postMeal">
            <input
              placeholder="Name"
              ref="mealName"
              id="mealName"
              type="text"
              value={this.props.name}
              name="mealName"
              onChange={this.props.handleChange.bind(null, 'name')}
            />

            <input
              type="date"
              value={this.props.postDate}
              onChange={this.props.handleChange.bind(null, 'postDate')}
            />

            <input
              type="time"
              value={this.props.postTime}
              onChange={this.props.handleChange.bind(null, 'postTime')}
            />


            <button
              name="login"
              type="text"
              onClick={this.postMeal}>Save meal to your account
            </button>
          </form>

        </div>
      </div>
    );
  }
});

export default PostMeal;