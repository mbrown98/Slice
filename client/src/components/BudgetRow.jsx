import React from 'react';
import ReactDOM from 'react-dom';
import Transactions from './Transactions.jsx';
import TransactionAdd from './TransactionAdd.jsx';

class BudgetRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      { isEditing: false, addTransClicked: false },
      props.budget
    );
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleEdit}>Edit</button>
        <div>
          <div>
            <h3>
              Name:{' '}
              {this.state.isEditing ? (
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
              Budget:{' '}
              {this.state.isEditing ? (
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
              Description:{' '}
              {this.state.isEditing ? (
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
          {this.state.transactions.map(trans => (
            <Transactions key={trans._id} transaction={trans} />
          ))}
        </div>
      </div>
    );
  }
}

export default BudgetRow;
