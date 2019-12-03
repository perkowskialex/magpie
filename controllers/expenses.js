const User = require('../models/user')
const Budget = require('../models/budget')
const Expense = require('../models/expense')
// console.log(Object.keys(User.schema.paths));

module.exports = {
    create,
    new: newExpense,
    show,
}

function create(req, res, next) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      let expense = req.body;
      User.findById(req.user.id, function(err,user){
          user.budgets.expenses.push(expense);
      });
      user.save(function(err) {
        if (err) return res.redirect('budgets');
        res.redirect('expenses/new/budgetid');
      });
}

function show(req, res){
    Expense.findById(req.params.id, function(err, expense){
        // console.log(expense)
        res.render(`expenses/show`, {title: 'Expense', user: req.user, expense})
    })
}

function newExpense(req, res) {
    res.render(`expenses/new/`,{title: 'Add Expense', user: req.user})
}