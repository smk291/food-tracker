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
    let change = {};
    change[e.target.name] = e.target.value;
    if (e.target.name === 'qty' && e.target.value < 1) {
      change[e.target.name] = 1;
    }
    this.setState(change);
  }

  recalculate(e){
    e.preventDefault()
    this.props.recalculate(this.props.idx, this.state.qty);
    this.props.sumNutr();
  }

  deleteItem(){
    this.props.deleteItem(this.props.idx);
  }

  render() {
    const calories = this.props.calories;
    const protein = this.props.protein;
    const totalFat = this.props.totalFat;
    const totalCarb = this.props.totalCarb;

    return (
      <div className="one-third column item">
        <div className="image-div">
          <img src={this.props.thumb}/>
        </div>
        <h4>{this.props.foodItem}</h4>
        <table className="u-full-width">
          <tbody>
            <tr>
              <td>Calories:</td>
              <td>{calories.toFixed(2)}kcal</td>
            </tr>
            <tr>
              <td>Protein:</td>
              <td>{protein.toFixed(2)}g</td>
            </tr>
            <tr>
              <td>Fat:</td>
              <td>{totalFat.toFixed(2)}g</td>
            </tr>
            <tr>
              <td>Carbohydrates:</td>
              <td>{totalCarb.toFixed(2)}g</td>
            </tr>
            <tr>
              <td>Serving:</td>
              <td>{this.props.serving_qty} {this.props.serving_unit}</td>
            </tr>
          </tbody>
        </table>

        <p>
          Change quantity:
          <input
            type="number"
            min="1"
            value={this.state.qty}
            name="qty"
            onChange={this.handleChange}
          />
        </p>

          <button
            className="recalculate"
            type="text"
            onClick={this.recalculate}
          >
            Recalculate
          </button>

          <button
            className="delete"
            type="text"
            onClick={this.deleteItem}
          >
            Remove
          </button>

      </div>
    );
  }
}
