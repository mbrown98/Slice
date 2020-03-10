import React from "react";
import ReactDOM from "react-dom";

class BudgetRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      budget: this.props.budget,
      date: this.props.date,
      description: this.props.description,
      amount: this.props.amount,
      clicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div className="budgetListPart">
        <h1
          className="name"
          onClick={() => {
            this.setState({ clicked: !this.state.clicked });
          }}
        >
          {this.state.name}
        </h1>
        {this.state.clicked && (
          <form onSubmit={this.handleSubmit}>
            <label>
              Edit Name{"  "}
              <input
                type="text"
                name="name"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}

        <h2 className="budget">Budget: {this.state.budget}</h2>
        <h4 className="description">Description: {this.state.description}</h4>
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
