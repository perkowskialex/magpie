const User = require('../models/budget')
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
      User.find(req.user.id, function(err,user){
          user.budget[0].expense.push(expense);
      });
      user.save(function(err) {
        if (err) return res.redirect('budgets');
        res.redirect('expenses/new/:budgetid');
      });
}

function show(req, res){
    User.findById(req.params.id, function(err, expense){
        console.log(expense)
        res.render(`expenses/show/:budgetid`, {title: 'Expense', user: req.user, expense})
    })
}

function newExpense(req, res) {
    res.render('expenses/new/:budgetid',{title: 'Add Expense', user: req.user})
}