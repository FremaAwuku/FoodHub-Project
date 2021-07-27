const express = require('express');
const userRouter = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db');

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
userRouter.post('/register', csrfProtection, asyncHandler( async(req, res) => {
  const {
    firstName,
    lastName,
    emailAddress,
    password,
    confirmPassword
  }

  const user = await db.User.build({
    firstName,
    lastName,
    emailAddress,
  });

  const validatorErrors = validationResult(req);

  if(validatorErrors.isEmpty()){
    const hashedPassword = await bcrypt.hash(password, 12)
    myUser.hashedPassword = hashedPassword;
    await myUser.save();
    loginUser(req, res, myUser);
    // TODO CHANGE REDIRECT TO INDIV USER LIST PAGE
    res.redirect('/');
} else {
    const errorArray = new Array(validatorErrors)[0].errors
        .map(error => error.msg)
    res.render('user-register', {
        title: "Register",
        user: myUser,
        errors: errorArray,
        csrfToken: req.csrfToken()
    });
}
  res.send('respond with a resource');

}));
module.exports = userRouter;
