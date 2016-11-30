import React from 'react';
import Login from './Login';
import Search from './Search';
import Search_Results from './Search_Results';
import SignUp from './SignUp';
import PostMeal from './PostMeal';
import GetUserMeals from './GetUserMeals';
import MealDetail from './MealDetail';
import Logout from './Logout';
import NutrData from './NutrData';
import DisplayMealNutr from './DisplayMealNutr';
import DisplayTotalMealNutr from './DisplayTotalMealNutr';
import GetMealsAndSort from './GetMealsAndSort';

const Main = React.createClass({
  render() {
    return (
      <div>
        <Login
          email={this.props.email}
          password={this.props.password}
          meal={this.props.meal}
          login={this.props.login}
          handleChange={this.props.handleChange}
        />
        <Logout
          logout={this.props.logout}
        />
        <SignUp
          firstName={this.props.firstName}
          lastName={this.props.lastName}
          signupEmail={this.props.signupEmail}
          signupPassword={this.props.signupPassword}
          handleChange={this.props.handleChange}
          signUp={this.props.signUp}
        />
        <Search
          searchString={this.props.searchString}
          searchForMeal={this.props.searchForMeal}
          handleChange={this.props.handleChange}
        />
        {this.props.meal.length > 0 && this.props.meal[0].data.foods.map((obj, idx) => {
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
        <PostMeal
          meal={this.props.meal}
          postMeal={this.props.postMeal}
          handleChange={this.props.handleChange}
          mealName={this.props.mealName}
          name={this.props.name}
          postDate={this.props.postDate}
          postTime={this.props.postTime}
        />
        {/* <MealDetail
          mealDetail={this.props.mealDetail}
          handleUpdateMealDetail={this.props.handleUpdateMealDetail}
        />
        <GetUserMeals
          handleGetUserMeals={this.props.handleGetUserMeals}
          usersMeals={this.props.usersMeals}
          handleGetAMeal={this.props.handleGetAMeal}
          handleDeleteMeal={this.props.handleDeleteMeal}
        />
        <NutrData
          handleGetAMeal={this.props.handleGetAMeal}
          handleGetAMealNutr={this.props.handleGetAMealNutr}
          handleChange={this.props.handleChange}
          mealId={this.props.mealId}
          nutrIds={this.props.nutrIds}
        />
        <DisplayMealNutr
          mealToDisplay={this.props.mealToDisplay}
        />
        <DisplayTotalMealNutr
          mealToDisplay={this.props.mealToDisplay}
          mealTotalNutr={this.props.mealTotalNutr}
          handleSumMeals={this.props.handleSumMeals}
        />
        <GetMealsAndSort
          handleGetUserMealsDateSort={this.props.handleGetUserMealsDateSort}
        /> */}
      </div>
    )
  }
});

export default Main;