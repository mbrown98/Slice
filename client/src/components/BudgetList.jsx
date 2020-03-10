import React from "react";
import ReactDOM from "react-dom";
import BudgetRow from "./BudgetRow.jsx";

class BudgetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.budgets.map(budget => {
          return (
            <BudgetRow
              name={budget.name}
              budget={budget.budget}
              description={budget.description}
              transactions={budget.transactions}
            />
          );
        })}
      </div>
    );
  }
}

export default BudgetList;
