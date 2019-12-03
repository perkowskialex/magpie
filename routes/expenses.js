let express = require('express')
let router = express.Router();
let expensesCtrl = require('../controllers/expenses')

router.get('/budgets/:id/expenses/new', expensesCtrl.new)
router.get('/:id/:budgetid', expensesCtrl.show)
router.post('/budgets/:budgetid', expensesCtrl.create)

module.exports = router