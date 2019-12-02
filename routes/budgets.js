let router = require('express').Router();
let budgetsCtrl = require('../controllers/budgets');

router.get('/', budgetsCtrl.index);
router.get('/:id', budgetsCtrl.show)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports =  router
