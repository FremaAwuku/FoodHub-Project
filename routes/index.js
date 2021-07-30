const express = require('express');
const { loginUser } = require('../auth')
const db = require('../db/models')
const router = express.Router();
const {asyncHandler} = require('./utils')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});


module.exports = router;
