import React from 'react';
import Nutr from './Nutr';

const DisplayMealNutr = React.createClass({
  render() {
    return (
      <div>
        {Object.keys(this.props.mealToDisplay).map((food, idx) => {
          return <div key={idx}>
            <p>{food}</p>

            {Object.keys(this.props.mealToDisplay[food]).map((nutr, idx2) => {
              return <Nutr
                key={idx2}
                nutr={this.props.mealToDisplay[food][nutr]}
              />
            })}

          </div>
          console.log(food)
        })}
      </div>
    );
  }

});

export default DisplayMealNutr;