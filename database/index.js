const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const budgetSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    budget: Number,
    transactions: [
      {
        isPurchased: { type: Boolean, default: false },
        description: String,
        amount: Number,
        category: { type: String, default: "General" }
      }
    ]
  },
  { timestamps: true }
);

// const sampleData = [
//   {
//     name: 'New Year Shopping...',
//     description: 'Gift for family',
//     budget: 1000,
//     transactions: [
//       {
//         date: '01/01/2020',
//         description: 'best buy',
//         amount: 199,
//         category: 'Tech'
//       }
//     ]
//   },
//   {
//     name: 'Christmas Shopping',
//     description: 'Gift for family',
//     budget: 1999,
//     transactions: [
//       {
//         date: '12/20/2019',
//         description: 'iMac',
//         amount: 1229,
//         category: 'Tech'
//       }
//     ]
//   },
//   {
//     name: 'Labor Day Shopping...',
//     description: 'Gift for family',
//     budget: 500,
//     transactions: [
//       {
//         date: '01/01/2020',
//         description: 'Some grocery item...',
//         amount: 54,
//         category: 'Grocery'
//       }
//     ]
//   }
// ];

const Budget = mongoose.model("Budget", budgetSchema);

// Budget.bulkWrite(
//   sampleData.map(data => ({
//     updateOne: {
//       filter: { name: data.name },
//       update: data,
//       upsert: true
//     }
//   }))
// )
//   .then(result => {
//     console.log(`sample data populated...`);
//   })
//   .catch(err => console.log(`err when populating sample datas... ${err}`));

module.exports = Budget;
