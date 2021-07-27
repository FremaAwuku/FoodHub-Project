const express = require('express');
const userRouter = require('./users.js')
const { check, validationResult } = require('express-validator')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');



userRouter.get('/:id(\\d+)/list', csrfProtection, asyncHandler(async (req, res) => {
    userId = parseInt(req.params.id, 10)
    const userList = await db.UserRestaurantList.findAll({
        where: {userId},
        include: [db.Restaurant,  db.User]
    })
    res.render('user-list', {
        title: "Personal Restaurant List",
        userList,
        csrfToken: req.csrfToken()
    })
}))

userRouter.post('/list', csrfProtection, asyncHandler(async (req, res) => {
 
    const validatorErrors = validationResult(req)

    if (validatorErrors.isEmpty()) {
        await list.save();
        res.redirect('/user')
    } else {
    const errorArray = validatorErrors.array()
      .map(error => error.msg)
    res.render('user-list', {
        title: "List",
        errors: errorArray,
        csrfToken: req.csrfToken()
    });
     
  }
}))


module.exports = userRouter
