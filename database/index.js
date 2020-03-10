const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/budget");

var budgetSchema = new mongoose.Schema({
  name: String,
  description: String,
  budget: Number,
  transactions: [
    { date: String, description: String, amount: Number, category: String }
  ]
});

var Budget = mongoose.model("Budget", budgetSchema);

const retrieveAll = () => {
  return Budget.find({})
    .limit(10)
    .exec();
};

module.exports.retrieveAll = retrieveAll;
