const Budget = require("../../database");
const { serverErrorHandler } = require("../../utils");

module.exports = {
  getAllBudgets: (req, res) => {
    Budget.find()
      .sort({ "timestamps.createdAt": -1, "timestamps.updatedAt": -1 })
      .then(data => {
        res.json(data);
      })
      .catch(serverErrorHandler.bind(null, res));
  },
  createBudget: (req, res) => {
    Budget.create(req.body)
      .then(data => {
        if (!data) throw data;
        else res.status(201).json(data);
      })
      .catch(serverErrorHandler.bind(null, res));
  },
  updateBudget: (req, res) => {
    const { id } = req.params;
    const updatedBudget = req.body;
    Budget.findOneAndUpdate({ _id: id }, updatedBudget)
      .then(data => {
        if (!data) throw data;
        else res.json(updatedBudget);
      })
      .catch(serverErrorHandler.bind(null, res));
  },
  deleteBudget: (req, res) => {
    const { id } = req.params;
    Budget.findOneAndRemove({ _id: id })
      .then(data => {
        if (!data) throw data;
        else res.json(req.body);
      })
      .catch(serverErrorHandler.bind(null, res));
  },
  getAllCategories: (req, res) => {
    Budget.find()
      .then(data => {
        const categorySet = new Set();
        data.forEach(budget => {
          // budget.transactions.forEach(trans => {
          //   categorySet.add(trans.category);
          // });
          categorySet.add(...budget.transactions.map(trans => trans.category));
        });
        res.json([...categorySet.keys()]);
      })
      .catch(serverErrorHandler.bind(null, res));
  }
};
