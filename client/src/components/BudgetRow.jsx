import React from "react";
import ReactDOM from "react-dom";

class BudgetRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: this.props.budget,
      date: this.props.date,
      description: this.props.description,
      amount: this.props.amount
    };
  }
  render() {
    return (
      <div>
        <h1 className="name">{this.props.name}</h1>
        <h2 className="budget">Budget: {this.props.budget}</h2>
        <h4 className="description">Description: {this.props.description}</h4>
        <div className="transacations">
          {" "}
          <h4>Transactions</h4>
          {this.props.transactions.map(trans => {
            return (
              <div>
                <p>
                  Date: {trans.date} Description: {trans.description} Amount:{" "}
                  {trans.amount} Category: {trans.category}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BudgetRow;
