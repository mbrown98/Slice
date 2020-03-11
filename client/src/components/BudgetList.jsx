import React from 'react';
import ReactDOM from 'react-dom';
import BudgetRow from './BudgetRow.jsx';

class BudgetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.budgets.map(budget => (
          <BudgetRow key={budget._id} budget={budget} />
        ))}
      </div>
    );
  }
}

export default BudgetList;
