const User = require('../models/budget')

module.exports = {
    index
}

function index(req, res, next) {
    console.log(req.query)
            res.render('budgets/index')};