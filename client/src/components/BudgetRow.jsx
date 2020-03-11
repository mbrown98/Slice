import React from "react";
import ReactDOM from "react-dom";
import Transactions from "./Transactions.jsx";
import TransactionAdd from "./TransactionAdd.jsx";

class BudgetRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      budget: this.props.budget,
      description: this.props.description,
      amount: this.props.amount,
      clicked: false,
      addTransClicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Edit</button>
        <div>
          <div>
            <h3>
              Name:{" "}
              {this.state.clicked ? (
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              ) : (
                this.state.name
              )}
            </h3>
          </div>

          <div>
            <h3>
              Budget:{" "}
              {this.state.clicked ? (
                <input
                  type="text"
                  name="budget"
                  value={this.state.budget}
                  onChange={this.handleChange}
                />
              ) : (
                this.state.budget
              )}
            </h3>
          </div>

          <div>
            <h3>
              Description:{" "}
              {this.state.clicked ? (
                <input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              ) : (
                this.state.description
              )}
            </h3>
          </div>
        </div>

        <div>
          <h4>Transactions</h4>
          <button
            onClick={() =>
              this.setState({ addTransClicked: !this.state.addTransClicked })
            }
          >
            Add Transaction
          </button>
          {this.state.addTransClicked && <TransactionAdd />}
          {this.props.transactions.map(trans => {
            return (
              <Transactions
                description={trans.description}
                amount={trans.amount}
                category={trans.category}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default BudgetRow;
