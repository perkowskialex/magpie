let express = require('express')
let router = express.Router();
let expensesCtrl = require('../controllers/expenses')

router.get('/expenses/index', expensesCtrl.index)
router.get('/expenses/:id/new', expensesCtrl.new)
router.get('/expenses/:id', expensesCtrl.show)
router.post('/budgets/:budgetid', expensesCtrl.create)

module.exports = router