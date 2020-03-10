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
              Budget:{" "}
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
