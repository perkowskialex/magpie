var express = require('express');
var router = express.Router();
let passport = require('passport');
let indexCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', indexCtrl.index)

//google auth login
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/budgets',
    failureRedirect : '/'
  }
));

 // OAuth logout route
 router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
