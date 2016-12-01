import React from 'react';
import SearchItem from './SearchItem';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.recalculate = this.recalculate.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  recalculate(idx, qty){
    let recalcMeal = this.props.meal;
    let fullNutrs = recalcMeal[0].data.foods[idx].full_nutrients

    for (let i = 0; i < fullNutrs.length; i++){
      fullNutrs[i].value = (fullNutrs[i].value / recalcMeal[0].data.foods[idx].serving_qty) * qty;
    }

    const keys = [
      'nf_calories',
      'nf_cholesterol',
      'nf_dietary_fiber',
      'nf_p',
      'nf_potassium',
      'nf_protein',
      'nf_saturated_fat',
      'nf_sodium',
      'nf_sugars',
      'nf_total_carbohydrate',
      'nf_total_fat'
    ];

    for (let i = 0; i < keys.length; i++) {
      recalcMeal[0].data.foods[idx][keys[i]] = (recalcMeal[0].data.foods[idx][keys[i]] / recalcMeal[0].data.foods[idx].serving_qty) * qty;
    };

    recalcMeal[0].data.foods[idx].serving_qty = qty;

    this.setState({meal: recalcMeal})

    console.log(this.props.name);
    const mealName = recalcMeal[0].data.foods.reduce((acc, food, i, arr) => {
      if (idx < arr.length - 1) {
        return acc += `${food.food_name} (${food.serving_qty} ${food.serving_unit}), `;
      } else {
        return acc += `${food.food_name} (${food.serving_qty}  ${food.serving_unit})`;
      }
    }, ``);

    console.log(mealName);
    this.props.setName(mealName)
  }

  deleteItem(idx) {
    let updateMeal = this.props.meal;
    console.log(updateMeal);
    console.log(updateMeal[0].data.foods);

    updateMeal[0].data.foods.splice(idx, 1)


    this.setState({meal: updateMeal});

    const mealName = recalcMeal[0].data.foods.reduce((acc, food, i, arr) => {
      if (idx < arr.length - 1) {
        return acc += `${food.food_name} (${food.serving_qty} ${food.serving_unit}), `;
      } else {
        return acc += `${food.food_name} (${food.serving_qty}  ${food.serving_unit})`;
      }
    }, ``);

    this.props.setName(mealName)
  }

  render() {
    // console.log(this.props.meal);
    return (
      <div className="items container">
        {this.props.meal.length > 0 && this.props.meal[0].data.foods.map((obj, idx) => {
          return <SearchItem
            key={idx}
            idx={idx}
            meal={obj}
            thumb={obj.photo.thumb}
            foodItem={obj.food_name}
            calories={obj.nf_calories}
            protein={obj.nf_protein}
            totalFat={obj.nf_total_fat}
            totalCarb={obj.nf_total_carbohydrate}
            serving_qty={obj.serving_qty}
            serving_unit={obj.serving_unit}
            handleChange={this.props.handleChange}
            recalculate={this.recalculate}
            deleteItem={this.deleteItem}
            name={this.props.name}
          />
        })}
      </div>
    );
  }
}
