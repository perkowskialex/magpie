let express = require('express')
let router = express.Router();
let expensesCtrl = require('../controllers/expenses')

router.get('/new', expensesCtrl.new)
router.get('/:id/:budgetid', expensesCtrl.show)
router.post('/', expensesCtrl.create)

module.exports = router