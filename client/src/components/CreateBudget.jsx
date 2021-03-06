import React from "react";

class CreateBudget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      budget: null,
      description: null,
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
    this.setState({ clicked: !this.state.clicked });
  }
  addBudget() {
    //will send new data to database to be inserted
    //then repopulated database and rerender
    //probably a function passed down as a prop from app.jsx
    this.setState({ clicked: !this.state.clicked });
    let obj = {
      name: this.state.name,
      budget: Number(this.state.budget),
      description: this.state.description
    };
    this.props.createBudget(obj);
  }

  render() {
    return (
      <div className="box">
        <button
          className="button is-primary is-large"
          onClick={this.handleClick}
        >
          New Pie
        </button>
        {this.state.clicked && (
          <div>
            <h5>
              Name:{" "}
              <input
                className="input is-info"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              Description:{" "}
              <input
                className="input is-info"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
              Budget:{" "}
              <input
                className="input is-info"
                type="text"
                name="budget"
                value={this.state.amount}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <button className="button is-info" onClick={this.addBudget}>
                Add To Budget List
              </button>
            </h5>
          </div>
        )}
      </div>
    );
  }
}

export default CreateBudget;
