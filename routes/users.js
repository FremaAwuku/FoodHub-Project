const express = require('express');
const userRouter = express.Router();
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { csrfProtection, asyncHandler, userValidators } = require('./utils');
const db = require('../db/models');
const { loginUser, logoutUser } = require('../auth')

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


userRouter.get('/login', csrfProtection, (req, res) => {
  res.render('user-login', {
    title: 'Login',
    csrfToken: req.csrfToken()
  })
})

const loginValidators = [
  check('email')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a value for Email Address'),
check('password')
  .exists({ checkFalsy: true })
  .withMessage('Please provide a value for Password'),
]

userRouter.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body
  
  let errors = []
  const validatorErrors = validationResult(req)

  if (validatorErrors.isEmpty()) {
    const user = await db.User.findOne({ where: { email } })
    
    if (user !== null) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())

      if (passwordMatch) {
        //TODO log in the user
        loginUser(req, res, user)
        res.redirect('/')
      }
    }
    errors.push('Login failed please try to login again')
  } else {
    const errorArray = validatorErrors.array().map(error => error.msg)
    res.render('user-login', {
      title: 'Login',
      email,
      errorArray,
      csrfToken: req.csrfToken(),
    })
  }
}))


userRouter.post('/logout', (req, res) => {
  logoutUser(req, res)
})



module.exports = userRouter;
