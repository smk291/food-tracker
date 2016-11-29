import React from 'react';
import Login from './Login';
import Search from './Search';
import Search_Results from './Search_Results';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Login
          email={this.props.email}
          password={this.props.password}
          meal={this.props.meal}
          login={this.props.login}
          updateEmail={this.props.updateEmail}
          updatePassword={this.props.updatePassword}
        />
        <Search
          searchString={this.props.searchString}
          searchForMeal={this.props.searchForMeal}
          updateSearchString={this.props.updateSearchString}
        />
        {this.props.meal.length > 0 && this.props.meal[0].data.foods.map((obj, idx) => {
          console.log(obj);
          return <Search_Results
            key={idx}
            meal={obj.food_name}
            ndb_no={obj.ndb_no}
            nf_calories={obj.nf_}
            serving_qty={obj.serving_qty}
            serving_unit={obj.serving_unit}
            serving_weight_grams={obj.serving_weight_grams}
            nf_calories={obj.nf_calories}
            nf_total_fat={obj.nf_total_fat}
            nf_saturated_fat={obj.nf_saturated_fat}
            nf_cholesterol={obj.nf_cholesterol}
            nf_sodium={obj.nf_sodium}
            nf_total_carbohydrate={obj.nf_total_carbohydrate}
            nf_dietary_fiber={obj.nf_dietary_fiber}
            nf_sugars={obj.nf_sugars}
            nf_protein={obj.nf_protein}
            nf_potassium={obj.nf_potassium}
            nf_p={obj.nf_p}
            thumb={obj.photo.thumb}
            highres={obj.photo.highres}
          />;
        })}
      </div>
    )
  }
});

export default Main;