const User = require('../models/budget')

module.exports = {
    index
}

function index(req, res, next) {
    console.log(req.query);
    User.find({}, function(err, budgets){
        res.render('budgets/index', {title:'Magpie Budget', user:req.user, budgets})
    })
}