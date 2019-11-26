var router = require('express').Router();
var budgetsCtrl = require('../controllers/budgets');

router.get('/', budgetsCtrl.index);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports =  router
