const User = require('../models/user')
const Budget = require('../models/budget')
const Expense = require('../models/expense')

module.exports = {
    create,
    new: newExpense,
    show,
    index
}

function index(req,res,next) {
    Budget.findById(req.budget._id).populate('expenses').exec(function(err, budget){
        res.render('expenses/index', {
            title: 'Expense',
            budget
        })
    })
}

function create(req, res, next) {
    console.log('expenses create function')
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
      let expense = req.body;
      Budget.findById(req.params.id, function(err,budget){
          budget.expenses.push(expense);
          budget.save(function(err) {
            if (err) return res.redirect(`/budgets/show`);
            res.redirect(`budgets/show`);
          });
      });   
}

function show(req, res){
    console.log('expenses SHOW func')
    Expense.findById(req.params.id, function(err, expense){
        // console.log(expense)
        res.render(`expenses/show`, {title: `Expense`, user:req.user, expense})
    })
}

function newExpense(req, res) {
    console.log('expenses NEW func')
    Budget.findById(req.params.id, function(err, budget){
        res.render('expenses/new', {title: 'New Expense', user:req.user, budget})
    })
}