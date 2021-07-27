const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { csrfProtection, asyncHandler, userValidators } = require('./utils');
const db = require('../db/models');
const { loginUser } = require('../auth')

router.get("/", asyncHandler(async(req,res)=>{
const restaurants = await db.Restaurant.findOne()
// res.send(restaurants)
res.render('restaurants',{
    title:"Restaurants",
    restaurants
})

}))
router.get("/:restaurantId(\\d+)", asyncHandler(async(req,res)=>{

    const id = req.params.id

    const restaurant = await db.Restaurant.findByPk(id)
     res.send(restaurant)


    }))

//TODO made ONLY accessible by the admin
router.get("/new", asyncHandler(async(req,res)=>{
    const restaurants = await db.Restaurant.findAll()

    res.render('create-new-restaurant',{
        title:"Restaurants",
        restaurants
    })

    }))


module.exports=router
