import React from 'react';

const Nutr = React.createClass({
  render() {
    return (
        <p>{`${this.props.nutr[0]}: ${this.props.nutr[1]} ${this.props.nutr[2]}`}</p>
    );
  }

});

export default Nutr;
