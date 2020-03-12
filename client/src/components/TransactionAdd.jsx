import React from "react";
import ReactDOM from "react-dom";

class TransactionAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: null,
      amount: null,
      category: null,
      clicked: true
    };
    this.addNewTransaction = this.addNewTransaction.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  addNewTransaction() {
    // this.props.budgetMoney(this.state.amount);
    this.setState({ clicked: false });
    let obj = {
      category: this.state.category,
      description: this.state.description,
      amount: Number(this.state.amount)
    };
    this.props.addNewTrans(obj);
  }

  render() {
    return (
      <div>
        {this.state.clicked && (
          <h5>
            Description:{" "}
            <input
              className="input is-info"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            Amount:{" "}
            <input
              className="input is-info"
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
            Category:{" "}
            <input
              className="input is-info"
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button
              className="button is-primary is-info"
              onClick={this.addNewTransaction}
            >
              Slice It
            </button>
          </h5>
        )}
      </div>
    );
  }
}

export default TransactionAdd;
