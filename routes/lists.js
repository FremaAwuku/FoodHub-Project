const express = require('express');
const router = express.Router()
const userRouter = require('./users.js')
const restaurantRouter = require('./restaurants')
const { check, validationResult } = require('express-validator')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const {requireAuth} = require("../auth")


router.get('/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const userId = req.params.id
    const userList = await db.UserRestaurantList.findAll({
        where: { userId },
        include: db.Restaurant
    })

    res.render('user-list', {
        title: "Personal Restaurant List",
        userList,
        csrfToken: req.csrfToken()
    })
}))

router.get('/:id(\\d+)/add', csrfProtection, asyncHandler(async (req, res) => {
    const restaurantId = req.params.id
      res.render('add-to-list', {
      title: "Personal Restaurant List Add",
         restaurantId,
        csrfToken: req.csrfToken()
    })
}))

router.post('/:id(\\d+)/add', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const restaurantId = req.params.id
    const userId = req.session.auth.userId

    const {
        hasVisited
    } = req.body
 
    await UserRestaurantList.create({
        hasVisited, restaurantId, userId
    })
    res.redirect(`/users/${userId}/list`)
}))


module.exports = router
