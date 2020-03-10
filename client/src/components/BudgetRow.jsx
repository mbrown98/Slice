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
    this.handleClick = this.handleClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  handleNameChange(event) {
    this.setState({ name: this.state.typedName });
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}></button>
        {this.state.clicked === true ? (
          <div>
            <label>
              Edit Name{"  "}
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Budget{"  "}
              <input
                type="text"
                name="budget"
                value={this.state.budget}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Description{"  "}
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </label>
          </div>
        ) : (
          <h1 className="name">{this.state.name}</h1>
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
