import React from "react";
import BudgetList from "./components/BudgetList.jsx";
import CreateBudget from "./components/CreateBudget";
import axios from "axios";
import { errorHanlder } from "../../utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budgets: []
    };

    this.handleBudgetCreate = this.handleBudgetCreate.bind(this);
  }

  componentDidMount() {
    this.fetchAllBudgets();
  }

  fetchAllBudgets() {
    return axios
      .get("/api/budget")
      .then(data => {
        if (data.status !== 200) throw data;
        else this.setState({ budgets: data.data });
        data.data.forEach(budget => {
          console.log(budget);
        });
      })
      .catch(errorHanlder);
  }

  handleBudgetCreate(budget) {
    return axios
      .post("/api/budget", budget)
      .then(data => {
        if (data.status !== 201) throw data;
        else this.fetchAllBudgets();
      })
      .catch(errorHanlder);
  }

  handleDeleteBudget(budget) {
    return axios
      .delete(`/api/budget/${budget._id}`)
      .then(data => {
        console.log(`${budget.name} deleted...`);
        this.fetchAllBudgets();
      })
      .catch(errorHanlder);
  }

  handleUpdateBudget(budget) {
    return axios
      .put(`/api/budget/${budget._id}`, { data: budget })
      .then(data => {
        console.log(`${budget.name} deleted...`);
        this.fetchAllBudgets();
      })
      .catch(errorHanlder);
  }

  render() {
    return (
      <div>
        <h1>Budget App</h1>
        <CreateBudget />

        <BudgetList budgets={this.state.budgets} />
      </div>
    );
  }
}

export default App;
