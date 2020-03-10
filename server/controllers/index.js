const Budget = require('../../database');

const errHandler = (res, err) => {
  // .catch((err) => errHandler(res, err))
  // ===
  // .catch(errHandler.bind(null, res));
  console.warn(`Error: ${err}`);
  res.sendStatus(500);
};

module.exports = {
  getAllBudgets: (req, res) => {
    Budget.find()
      .sort({ 'timestamps.createdAt': -1, 'timestamps.updatedAt': -1 })
      .then(data => {
        res.json(data);
      })
      .catch(errHandler.bind(null, res));
  },
  createBudget: (req, res) => {
    Budget.create(req.body)
      .then(data => {
        if (!data) throw data;
        else res.status(201).json(data);
      })
      .catch(errHandler.bind(null, res));
  },
  updateBudget: (req, res) => {},
  deleteBudget: (req, res) => {}
};
