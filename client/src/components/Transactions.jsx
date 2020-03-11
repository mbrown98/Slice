import React from "react";
import ReactDOM from "react-dom";

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description,
      amount: this.props.amount,
      category: this.props.category,
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h5>
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
          )}{" "}
          Amount:{" "}
          {this.state.clicked ? (
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          ) : (
            this.state.amount
          )}{" "}
          Category:{" "}
          {this.state.clicked ? (
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            />
          ) : (
            this.state.category
          )}{" "}
          <button onClick={this.handleClick}>Edit</button>
        </h5>
      </div>
    );
  }
}

export default Transactions;
