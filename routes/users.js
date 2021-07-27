const express = require('express');
const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = userRouter;
