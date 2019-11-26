// let request = require('request');
const User = require('../models/budget')

module.exports = {
    index
}

function index(req, res, next) {
            res.render('index', {title:'Magpie', user:req.user});
        };