let express = require('express')
let router = express.Router();
let expensesCtrl = require('../controllers/expenses')

router.get('/budgets/:id/expenses/', expensesCtrl.index)
router.get('/budgets/:id/expenses/new', expensesCtrl.new)
router.get('/expenses/:id', expensesCtrl.show)
router.post('/budgets/:id/expenses', expensesCtrl.create)

module.exports = router