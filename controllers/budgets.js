const User = require('../models/budget')

module.exports = {
    index,
    show
}

function index(req, res, next) {
    console.log(req.query);
    User.find({}, function(err, budgets){
        res.render('budgets/index', {title:'Magpie Budget', user:req.user, budgets})
    })
}

function show(req, res) {
    User.findById({}, function(err, budgets){
    res.render('budgets/show', {title: 'My Budget', user: req.user, budgets})
})
}