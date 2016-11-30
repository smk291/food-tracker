import React from 'react';

export default class PostMeal extends React.Component {
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
              value={this.props.body.name}
              name="mealName"
              // onChange={this.props.handleChange.bind(null, 'mealName')}
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
}
