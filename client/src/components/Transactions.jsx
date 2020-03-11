import React from 'react';
import ReactDOM from 'react-dom';

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({ isEditing: false }, props.transaction);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <h5>
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
          )}{' '}
          Amount:{' '}
          {this.state.isEditing ? (
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          ) : (
            this.state.amount
          )}{' '}
          Category:{' '}
          {this.state.isEditing ? (
            <input
              type="text"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            />
          ) : (
            this.state.category
          )}{' '}
          <button onClick={this.handleEdit}>Edit</button>
        </h5>
      </div>
    );
  }
}

export default Transactions;
