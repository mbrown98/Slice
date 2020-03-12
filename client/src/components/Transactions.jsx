import React from "react";

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      { isEditing: false },
      { transaction: props.transaction }
    );
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(event) {
    const currentTransaction = {
      ...this.state.transaction,
      [event.target.name]: event.target.value
    };
    this.setState({ transaction: currentTransaction });
  }

  render() {
    return (
      <tr className="is-verticaled">
        <td>
          {this.state.isEditing ? (
            <input
              className="input is-info"
              type="text"
              name="description"
              value={this.state.transaction.description}
              onChange={this.handleChange}
            />
          ) : (
            this.state.transaction.description
          )}{" "}
        </td>
        <td>
          {this.state.isEditing ? (
            <input
              className="input is-info"
              type="text"
              name="amount"
              value={this.state.transaction.amount}
              onChange={this.handleChange}
            />
          ) : (
            this.state.transaction.amount
          )}{" "}
        </td>
        <td>
          {this.state.isEditing ? (
            <input
              className="input is-info"
              type="text"
              name="category"
              value={this.state.transaction.category}
              onChange={this.handleChange}
            />
          ) : (
            this.state.transaction.category
          )}{" "}
        </td>
        <div className="buttons">
          <button className="button is-info is-small" onClick={this.handleEdit}>
            Edit
          </button>
          <button
            className="button is-danger is-small"
            onClick={() => console.log("delete button clicked")}
          >
            Delete
          </button>
        </div>
      </tr>
    );
  }
}

export default Transactions;
