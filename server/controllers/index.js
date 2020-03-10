const Budget = require('../../database');

module.exports = {
  getAllBudgets: (req, res) => {
    Budget.find()
      .sort({ 'timestamps.createdAt': -1, 'timestamps.updatedAt': -1 })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log(`err when get all budgets... ${err}`);
        res.sendStatus(500);
      });
  },
  createBudget: (req, res) => {
    res.send('post new budget');
  }
};
