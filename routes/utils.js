const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const userValidators = [
  check('firstName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a first Name')
      .isLength({ max: 50 })
      .withMessage('First name must not be more than 50 characters long'),
  check('lastName')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a last Name')
      .isLength({ max: 50 })
      .withMessage('Last name must not be more than 50 characters long'),
  check('emailAddress')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for email address')
      .isLength({ max: 255 })
      .withMessage('Email must not be more than 255 characters long')
      .isEmail()
      .withMessage('Please provide a valid email'),
  check('password')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a password')
      .isLength({ max: 50 })
      .withMessage('Passsword must not be more than 50 characters long')
      .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/)
      .withMessage('Password is not formatted correctly'),
  check('confirmPassword')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a password confirmation')
      .isLength({ max: 50 })
      .withMessage('Passsword confirmation must not be more than 50 characters long')
      .custom(async (confirmPassword, {req}) => {
          const password = req.body.password

          if(password !== confirmPassword){
              throw new Error('Passwords must be the same')
          }
      })
      .withMessage('ConfirmPassword does not match Password'),
];

module.exports = {
  csrfProtection,
  asyncHandler,
  userValidators,
};
