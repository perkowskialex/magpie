const User = require('../models/user')
const Expense = require('../models/expense')
const Budget = require('../models/budget')

module.exports = {
    index,
    show,
    new: newBudget,
    create,
    delete: deleteBudget,
    edit,
    update
}

function index(req, res, next) {
    User.findById(req.user._id)
        .populate('budgets')
        .exec(function (err, user) {
            res.render('budgets/index', {
                title: 'Magpie Budget',
                user,
            });
        })
}

function create(req, res, next) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    console.log(req.body)
    let budget = new Budget(req.body)
    let user = req.user;
    user.budgets.push(budget._id);
    user.save(function (err, user) {
        budget.save(function (err, newBudget) {
            if (err) return res.redirect('/error')
            res.redirect('/budgets')
            console.log('saved');
        })
    })
}

function edit (req, res) {
    Budget.findById(req.params.id, function(err, budget){
        res.render('budgets/edit', {
            user: req.user,
            budget,
            title: 'Edit Budget'
        })
    })
}

function update (req,res) {
    Budget.findById(req.params.id, function(err, budget) {
        budget.budgetName = req.body.budgetName
        budget.income = req.body.income
        budget.save(function(err){
            if (err) return res.render('/error');
            res.render(`budgets/`, {
                user: req.user,
                budget,
                title: 'My Budget'
            });
        })
    })
}
    

function newBudget(req, res) {
    User.findById(req.params.id, function (err, user) {
        res.render('budgets/new', {
            title: 'Create a Budget',
            user: req.user
        })
    })
}

function show(req, res) {
    Budget.findById(req.params.id).exec((err, budget) => {
        res.render('budgets/show', {
            title: 'My Budget',
            budget,
            user: req.user,
            expense: budget.expenses
        })
    })
}

function deleteBudget(req, res) {
    Budget.findByIdAndDelete(req.params.id, function (err, budget) {
            res.redirect('/budgets')
        });
}