const Expense = require('../models/expense')

module.exports = {
    create,
    new: newExpense,
    show
}

function create(req, res, next) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
      }
      let expense = new Expense(req.body);
      expense.save(function(err) {
        if (err) return res.redirect('/expenses/new');
        res.redirect(`/${expense._id}`);
      });
}

function show(req, res){
    Expense.findById(req.params.id, function(err, expense){
        console.log(expense)
        res.render('/expenses/show', {title: 'Expense', user: req.user, expense})
    })
}

function newExpense(req, res) {
    res.render('/expenses/new',{title: 'Add Expense', user: req.user})
}