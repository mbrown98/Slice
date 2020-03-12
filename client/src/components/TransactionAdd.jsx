import React from "react";
import ReactDOM from "react-dom";

class TransactionAdd extends React.Component {
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
  }
  render() {
    return (
      <div>
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
            onClick={this.handleClick}
          >
            Add New
          </button>
        </h5>
      </div>
    );
  }
}

export default TransactionAdd;
