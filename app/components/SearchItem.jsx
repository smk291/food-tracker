import React from 'react';

export default class SearchItem extends React.Component {
  constructor(props) {
    super(props);
    this.recalculate = this.recalculate.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      qty: ''
    }
  }

  handleChange(e) {
    var change = {};
    console.log(this.state.qty);
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  recalculate(e){
    e.preventDefault()
    this.props.recalculate(this.props.idx, this.state.qty);
  }

  deleteItem(){
    this.props.deleteItem(this.props.idx);
  }

  render() {
    return (
      <div className="one-third column item">
        <div className="image-div">
          <img src={this.props.thumb}/>
        </div>
        <h4>{this.props.foodItem}</h4>
        <p>Calories: {this.props.calories}kcal</p>
        <p>Protein: {this.props.protein}g</p>
        <p>Fat: {this.props.totalFat}g</p>
        <p>Carbohydrate: {this.props.totalCarb}g</p>
        <p>Serving: {this.props.serving_qty} {this.props.serving_unit}</p>
        <p>
          Change quantity:
          <input
            type="text"
            value={this.state.qty}
            name="qty"
            onChange={this.handleChange}
          />
          <button
            type="text"
            onClick={this.recalculate}
            min="1"
          >
            Recalculate
          </button>

          <button
            type="text"
            onClick={this.deleteItem}
          >
            Delete This Item from Meal
          </button>

        </p>
      </div>
    );
  }
}
