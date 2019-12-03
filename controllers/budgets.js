const User = require('../models/user')
const Expense = require('../models/expense')
const Budget = require('../models/budget')

module.exports = {
    index,
    show,
    new: newBudget,
    create
}

function index(req, res, next) {
    res.render('budgets/index', {
        title: 'Magpie Budget',
        user: req.user,
        budgets: req.user.budgets
    });
}

function create(req, res, next) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
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

function newBudget(req, res) {
    User.findById(req.params.id, function (err, user) {
        res.render('budgets/new', {
            title: 'Create a Budget',
            user: req.user
        })
    })
}

function show(req, res) {
    User.findById(req.params.id, function (err, user) {
        // console.log(user)
        // console.log(user.budget._id)
        res.render('budgets/show', {
            title: 'My Budget',
            user: req.user,
        })
    })
}