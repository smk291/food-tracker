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
        <table className="u-full-width">
          <tbody>
            <tr>
              <td>Calories:</td>
              <td>{this.props.calories}kcal</td>
            </tr>
            <tr>
              <td>Protein:</td>
              <td>{this.props.protein}g</td>
            </tr>
            <tr>
              <td>Fat:</td>
              <td>{this.props.totalFat}g</td>
            </tr>
            <tr>
              <td>Carbohydrates:</td>
              <td>{this.props.totalCarb}g</td>
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
            type="text"
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
