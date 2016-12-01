import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

export default class MealItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    e.preventDefault();
    const transition = ReactDOM.findDOMNode(this.refs.trans);
    transition.classList.toggle('three');
    transition.classList.toggle('columns');
    transition.classList.toggle('twelve');
    transition.classList.toggle('columns');
  }

  render() {
    return (
      <a ref="trans" href="" className="three columns meal-item" onClick={this.handleClick.bind(this)}>
        <div>
          <div className="date-display">
            <div>{this.props.day}</div>
            <div>{this.props.year}/{this.props.month}/{this.props.date}</div>
          </div>
          {/* <div>
            l
          </div> */}
        </div>
      </a>
    );
  }
}
