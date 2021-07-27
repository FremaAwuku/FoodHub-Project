const express = require('express');
const userRouter = express.Router();
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { csrfProtection, asyncHandler, userValidators } = require('./utils');
const db = require('../db/models');
const { loginUser } = require('../auth')

/* GET user registration page. */
userRouter.get('/register', csrfProtection, asyncHandler(async(req, res) => {
  const user = await db.User.build()

  res.render('user-register', {
    title: "Register New User",
    user,
    csrfToken: req.csrfToken()
  });
}));

/* POST user registration. */
userRouter.post('/register', csrfProtection, userValidators, asyncHandler( async(req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  } = req.body

  const user = await db.User.build({
    firstName,
    lastName,
    email,
  });

  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()){
    const hashedPassword = await bcrypt.hash(password, 12)
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    // TODO CHANGE REDIRECT TO INDIV USER LIST PAGE
    console.log("we are hitting the if")
    res.redirect('/');
    
} else {
    const errorArray = validatorErrors.array()
      .map(error => error.msg)
    console.log("we are hitting the else")
    res.render('user-register', {
        title: "Register",
        user: user,
        errors: errorArray,
        csrfToken: req.csrfToken()
    });
     
  }
}));
module.exports = userRouter;
