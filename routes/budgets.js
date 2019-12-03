let router = require('express').Router();
let budgetsCtrl = require('../controllers/budgets');

router.use(isLoggedIn);

router.get('/', budgetsCtrl.index);
router.get('/new',budgetsCtrl.new)
router.get('/:id', budgetsCtrl.show)
router.post('/', budgetsCtrl.create)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
