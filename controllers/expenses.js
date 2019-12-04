const User = require('../models/user')
const Budget = require('../models/budget')
const Expense = require('../models/expense')

module.exports = {
    create,
    new: newExpense,
    show,
    index
}

function index(req, res, next) {
    console.log('expenses index func');
    Budget.findById(req.budget._id).populate('expenses').exec(function (err, budget) {
        res.render('expenses/index', {
            title: 'Expense',
            budget,
            expense: budget.expenses
        })
    })
}

function create(req, res, next) {
    console.log('expenses CREATE function')
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    let newE = req.body;
    Budget.findById(req.params.id).exec(function (err, budget) {
        console.log('create expense budget findbyid: ' + budget)
        let expense = new Expense(newE)
        console.log('expense is: '+ expense)
        budget.expenses.push(expense._id);
        budget.save(function (err) {
            expense.save(function (err) {
                if (err) return res.redirect(`error`);
                res.redirect(`/budgets/${budget._id}`);
            });
        })
    });
}

function show(req, res) {
    console.log('expenses SHOW func')
    Expense.findById(req.params.id, function (err, expense) {
        // console.log(expense)
        res.redirect(`/budgets/show`)
    })
}

function newExpense(req, res) {
    console.log('expenses NEW func')
    console.log('req params id in new expense: ' + req.params.id)
    Budget.findById(req.params.id, function (err, budget) {
        console.log('new expense budget obj = ' + budget)
        res.render('expenses/new', {
            title: 'Add Expense',
            user: req.user,
            budget 
        })
    })
}