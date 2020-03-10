import React from "react";
import ReactDOM from "react-dom";
import BudgetList from "./components/BudgetList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets: [
        {
          name: "CHRISTMAS",
          budget: 300,
          description: "presents",
          transactions: [
            {
              date: "Today",
              description: "I want to buy a big santa",
              amount: 500,
              category: "Holidays"
            }
          ]
        },
        {
          name: "Birthday",
          budget: 200,
          description: "presents",
          transactions: []
        },
        {
          name: "Wedding",
          budget: 1000,
          description: "gifts",
          transactions: []
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Budget App</h1>
        <BudgetList budgets={this.state.budgets} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
