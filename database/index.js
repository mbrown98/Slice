const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/budget');

const budgetSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    budget: Number,
    transactions: [
      { date: String, description: String, amount: Number, category: String }
    ]
  },
  { timestamps: true }
);

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
