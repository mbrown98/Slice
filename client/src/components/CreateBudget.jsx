import React from "react";

class CreateBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      budget: null,
      description: null,
      amount: null,
      clicked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addBudget = this.addBudget.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleClick() {
    //will send new data to database to be inserted
    //then repopulated database and rerender
    //probably a function passed down as a prop from app.jsx
    this.setState({ clicked: !this.state.clicked });
  }

  addBudget() {
    console.log("hi");
  }
  render() {
    return (
      <div className="box">
        <h2 onClick={this.handleClick}>Create Budget</h2>
        {this.state.clicked && (
          <div>
            <h5>
              Name:{" "}
              <input
                type="text"
                name="description"
                value={this.state.name}
                onChange={this.handleChange}
              />
              Description:{" "}
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              Amount:{" "}
              <input
                type="text"
                name="amount"
                value={this.state.amount}
                onChange={this.handleChange}
              />
              Category:{" "}
              <input
                type="text"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
              />
              <button onClick={this.addBudget}>Add To Budget List</button>
            </h5>
          </div>
        )}
      </div>
    );
  }
}

export default CreateBudget;
