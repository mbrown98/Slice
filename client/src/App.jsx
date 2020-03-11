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
    this.handleDeleteBudget = this.handleDeleteBudget.bind(this);
    this.handleUpdateBudget = this.handleUpdateBudget.bind(this);
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
        this.fetchAllBudgets();
      })
      .catch(errorHanlder);
  }

  handleUpdateBudget(budget) {
    return axios
      .put(`/api/budget/${budget._id}`, budget)
      .then(data => {
        this.fetchAllBudgets();
      })
      .catch(errorHanlder);
  }

  render() {
    return (
      <div className="block">
        <CreateBudget />
        <BudgetList
          budgets={this.state.budgets}
          handleUpdate={this.handleUpdateBudget}
          handleDelete={this.handleDeleteBudget}
        />
      </div>
    );
  }
}

export default App;
