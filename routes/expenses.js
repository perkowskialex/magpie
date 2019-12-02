let router = require('express').Router();
let expensesCtrl = require('../controllers/expenses')

module.exports = {
    router
}

router.get('/new', expensesCtrl.new)
router.get('/:id', expensesCtrl.show)
router.post('/', expensesCtrl.create)