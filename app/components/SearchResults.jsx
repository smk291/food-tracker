import React from 'react';
import SearchItem from './SearchItem';
import NutritionForSearch from './NutritionForSearch';

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.recalculate = this.recalculate.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {

    };
  }

  recalculate(idx, qty){
    let recalcMeal = this.props.meal;
    let food = recalcMeal[0].data.foods[idx]
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
      food[keys[i]] = (food[keys[i]] / food.serving_qty) * qty;
    };

    food.serving_qty = qty;
    this.setState({meal: recalcMeal})

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
    updateMeal[0].data.foods.splice(idx, 1)
    this.setState({meal: updateMeal});

    const mealName = updateMeal[0].data.foods.reduce((acc, food, i, arr) => {
      if (idx < arr.length - 1) {
        return acc += `${food.food_name} (${food.serving_qty} ${food.serving_unit}), `;
      } else {
        return acc += `${food.food_name} (${food.serving_qty}  ${food.serving_unit})`;
      }
    }, ``);

    this.props.setName(mealName)
  }

  // const nutrients1 = ['Energy', 'Energy (kJ)', 'Total lipid (fat)', 'Fatty acids, total saturated', 'Fatty acids, total monounsaturated', 'Fatty acids, total polyunsaturated', 'Fatty acids, total trans', 'Fatty acids, total trans-monoenoic', 'Fatty acids, total trans-polyenoic', 'Cholesterol', 'Sodium, Na', 'Protein',}) 'Potassium, K', 'Carbohydrate, by difference', 'Fiber, total dietary', 'Sugars, total', 'Glucose (dextrose)', 'Fructose', 'Galactose', 'Lactose', 'Maltose', 'Starch', 'Sucrose']

  render() {
    console.log(this.props.mealToPost);
    console.log(this.props.nutrs);

    const liquid = ['Alcohol, ethyl', 'Caffeine', 'Water'];


    //

    // const nutrients2 = ['Vitamin A, IU', 'Vitamin A, RAE', 'Carotene, alpha', 'Carotene, beta', 'Cryptoxanthin, beta', 'Vitamin C, total ascorbic acid', 'Vitamin D', 'Vitamin D (D2 + D3)', 'Vitamin E (alpha-tocopherol)', 'Vitamin K (phylloquinone)', 'Riboflavin', 'Niacin', 'Thiamin', 'Vitamin B-6', 'Folate, DFE', 'Folate, food', 'Folate, total', 'Folic acid', 'Vitamin B-12', 'Pantothenic acid', 'Calcium, Ca', 'Iron, Fe', 'Magnesium, Mg', 'Zinc, Zn', 'Selenium, Se', 'Copper, Cu', 'Manganese, Mn', 'Phosphorus, P', 'Fluoride, F']
    //
    // const essentialAminoAcids = ['Alanine', 'Arginine', 'Aspartic acid', 'Cystine', 'Glutamic acid', 'Glycine', 'Proline', 'Serine', 'Tyrosine']
    //
    // const nonessentialAminoAcids = ['Histidine', 'Isoleucine', 'Leucine', 'Lysine', 'Methionine', 'Phenylalanine', 'Threonine', 'Tryptophan', 'Valine']
    //
    // const misc = ['Betaine', 'Choline, total', 'Lycopene', 'Phytosterols', 'Retinol', 'Theobromine']

    return (



      <div>
        <button onClick={this.sumNutr}> Sum </button>
          <table>
            <tbody>{this.props.alcohol}{this.props.caffeine}{this.props.water}{this.props.Energy}{this.props.EnergyKJ}{this.props.TotalFat}{this.props.FattyAcidsTotal}{this.props.FattyAcidsMonounsaturated}{this.props.FattyAcidsPolyunsaturated}{this.props.FattyAcidTrans}{this.props.FattyAcidsTransMono}{this.props.FattyAcidsTransP}{this.props.Cholesterol}{this.props.Na}{this.props.Protein}{this.props.Potassium}{this.props.Carb}{this.props.Fiber}{this.props.Sugars}{this.props.Glucose}{this.props.Fructose}{this.props.Galactose}{this.props.Lactose}{this.props.Maltose}{this.props.Starch}{this.props.Sucrose}</tbody>
          </table>
        <div
          className="items container">
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
      </div>
    );
  }
}
