import React from "react";
import BudgetRow from "./BudgetRow.jsx";

class BudgetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="block" id="BudgetList">
        {this.props.budgets.map(budget => (
          <BudgetRow
            key={budget._id}
            budget={budget}
            handleUpdate={this.props.handleUpdate}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default BudgetList;
