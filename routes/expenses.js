let express = require('express')
let router = express.Router();
let expensesCtrl = require('../controllers/expenses')

router.get('/', expensesCtrl.index)
router.get('/:id/new', expensesCtrl.new)
router.get('/:id/', expensesCtrl.show)
router.post('/budgets/:budgetid', expensesCtrl.create)

module.exports = router