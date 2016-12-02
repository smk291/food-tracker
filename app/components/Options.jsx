import React from 'react';

export default class Options extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <option value={this.props.value}>{this.props.string}</option>
    );
  }
}
