const express = require('express');
const router = express.Router()
const userRouter = require('./users.js')
const restaurantRouter = require('./restaurants')
const { check, validationResult } = require('express-validator')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const {requireAuth} = require("../auth")

//Gets specific users list
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

router.get('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {
    const restaurantId = req.params.id
    const userId = req.session.auth.userId

    res.render('edit-entry-list', {
        title: 'Edit User Entry',
        restaurantId,
        csrfToken: req.csrfToken()
    })

}))

router.post('/:id(\\d+)/edit', csrfProtection, asyncHandler(async (req, res) => {

    const restaurantId = req.params.id
    const userId = req.session.auth.userId

    const list = await db.UserRestaurantList.findAll({
        where: { userId, restaurantId }
    })

    const {
        hasVisited
    } = req.body


    const validatorErrors = validationResult(req)

    if (validatorErrors.isEmpty()) {

        await list[0].update({hasVisited})

        res.redirect(`/lists/${userId}`)
    } else {
        const errors = validatorErrors.array().map((error) => error.msg)
        res.render('edit-entry-list', {
            title: 'Edit List Entry',
            entry: req.body,
            errors,
            csrfToken: req.csrfToken()
        })
    }

}))

// Gets add to list form for a specific restaurant 
router.get('/:id(\\d+)/add', csrfProtection, asyncHandler(async (req, res) => {
    const restaurantId = req.params.id
    const {hasVisited} =req.body
      res.render('add-to-list', {
      title: "Personal Restaurant List Add",
        restaurantId,
        hasVisited,
        csrfToken: req.csrfToken()
    })
}))
// Adds thats that resaurant to the list with the userId and restaurantId 
router.post('/:id(\\d+)/add', requireAuth, asyncHandler(async (req, res) => {
    const restaurantId = req.params.id
    const userId = req.session.auth.userId
    const listEntry = await db.UserRestaurantList.findOne({
        where: { userId, restaurantId }
    })
    if (listEntry) {
        await listEntry.destroy()
    }

    let {
        hasVisited
    } = req.body
    if (hasVisited === undefined) {
        hasVisited = false
    }

    await db.UserRestaurantList.create({
        hasVisited, restaurantId, userId
    })
    res.redirect(`/lists/${userId}`)
}))

router.get('/:id(\\d+)/delete', csrfProtection, asyncHandler(async (req, res) => {
    const restaurantId = req.params.id
    res.render('delete-list-entry', {
        title: 'Delete List Entry',
        restaurantId,
        csrfToken: req.csrfToken()
    })
}))

router.post('/:id(\\d+)/delete', requireAuth, asyncHandler(async (req, res) => {
    console.log('in post route')
    const restaurantId = req.params.id
    const userId = req.session.auth.userId
    const listEntry = await db.UserRestaurantList.findOne({
        where: {userId, restaurantId}
    })
    let {
        deleteEntry
    } = req.body

    if (deleteEntry) {
        await listEntry.destroy()
    } else if (deleteEntry === undefined) {
        deleteEntry = false 
    }

    res.redirect(`/lists/${userId}`)

}))


module.exports = router