import React from 'react';
import TableElm from './TableElm';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  sumNutr() {
    this.props.sumNutr();
  }

  render() {
    const tableArr = this.props.nutrit.filter((elm) => {
       if (this.props.nutrs[elm]) {
         if (this.props.nutrs[elm][0] > 0) {
           return elm;
         }
       }
     }).map((elm, index) => {
       return <TableElm
         key={index}
         name={elm}
         amount={this.props.nutrs[elm]}
       />;
     });

    return (
      <div className="container table-container">
        <h4>Nutritional Facts</h4>
        <table className="center">
          <tbody>
            {tableArr}
          </tbody>
        </table>
        <button onClick={this.sumNutr.bind(this)}>Sum</button>
      </div>
    );
  }
}
