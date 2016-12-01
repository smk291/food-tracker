import React from 'react';
import SearchItem from './SearchItem';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="items container">
        {this.props.meal.length > 0 && this.props.meal[0].data.foods.map((obj, idx) => {
          return <SearchItem
            key={idx}
            thumb={obj.photo.thumb}
            foodItem={obj.food_name}
            calories={obj.nf_calories}
            protein={obj.nf_protein}
            totalFat={obj.nf_total_fat}
            totalCarb={obj.nf_total_carbohydrate}
          />
        })}
      </div>
    );
  }
}
