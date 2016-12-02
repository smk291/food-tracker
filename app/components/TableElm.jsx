import React from 'react';

export default class TableElm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.name === 'Energy' ? 'Calories' : this.props.name}</td>
        <td>{this.props.amount[0]}{this.props.amount[1]}</td>
      </tr>
    );
  }
}
