let express = require('express')
let router = express.Router();
let expensesCtrl = require('../controllers/expenses')

router.post('/budgets/:id', expensesCtrl.create)

router.get('/budgets/:id/expenses', expensesCtrl.index)
router.get('/budgets/:id/expenses/new', expensesCtrl.new)
router.get('/expenses/:id', expensesCtrl.show)

module.exports = router