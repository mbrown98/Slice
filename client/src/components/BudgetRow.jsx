import React from "react";
import Transactions from "./Transactions.jsx";
import TransactionAdd from "./TransactionAdd.jsx";

class BudgetRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      { isEditing: false, addTransClicked: false },
      { budget: props.budget }
    );
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    const currentBudget = {
      ...this.state.budget,
      [event.target.name]: event.target.value
    };
    // These two commented lines equals to the line above
    // const currentBudget = { ...this.state.budget };
    // currentBudget[event.target.name] = event.target.value;
    this.setState({ budget: currentBudget });
  }
  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
    this.props.handleUpdate(this.state.budget);
  }

  render() {
    return (
      <div id="BudgetRow" className="card box">
        <div className="card-header-title">
          <button className="button is-primary" onClick={this.handleEdit}>
            Edit
          </button>
          <button className="delete"></button>
        </div>
        <div className="card-content">
          <div>
            <div>
              <h3 className="title">
                {this.state.isEditing ? (
                  <input
                    className="input title"
                    type="text"
                    name="name"
                    value={this.state.budget.name}
                    onChange={this.handleChange}
                  />
                ) : (
                  this.state.budget.name
                )}
              </h3>
            </div>

            <div>
              <h3>
                Budget:{" "}
                {this.state.isEditing ? (
                  <input
                    className="input"
                    type="text"
                    name="budget"
                    value={this.state.budget.budget}
                    onChange={this.handleChange}
                  />
                ) : (
                  this.state.budget.budget
                )}
              </h3>
            </div>

            <div>
              <h3>
                Description:{" "}
                {this.state.isEditing ? (
                  <input
                    className="input"
                    type="text"
                    name="description"
                    value={this.state.budget.description}
                    onChange={this.handleChange}
                  />
                ) : (
                  this.state.budget.description
                )}
              </h3>
            </div>
          </div>

          <div>
            <h4>Transactions</h4>
            <button
              className="button is-primary"
              onClick={() =>
                this.setState({ addTransClicked: !this.state.addTransClicked })
              }
            >
              Add Transaction
            </button>
            {this.state.addTransClicked && <TransactionAdd />}
            <table className="table is-striped">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {this.state.budget.transactions.map(trans => (
                  <Transactions key={trans._id} transaction={trans} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BudgetRow;
