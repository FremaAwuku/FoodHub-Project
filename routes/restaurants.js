const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { csrfProtection, asyncHandler } = require('./utils');
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
router.get("/:id(\\d+)", asyncHandler(async(req,res)=>{

    const restaurantId = parseInt(req.params.id,10)
    console.log(restaurantId)
    const restaurant = await db.Restaurant.findByPk(restaurantId,{include:[db.Review]})
    console.log(restaurant)
    res.render('individual-restaurant',{
        title: restaurant.name,
        restaurant
    })
    }))


    const restaurantValidators = [
        check('name')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a input for Restaurant Name')
          .isLength({ max: 100 })
          .withMessage('Restaurant Name must not be more than 100 characters long'),
        check('address')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a value for Address')
          .isLength({ max: 100 })
          .withMessage('Address must not be more than 100 characters long')
          .custom( value =>{
              return Restaurant.findOne({where: {address:value}})
              .then(()=>{
                  return Promise.reject('Address Already Taken, Please Provide Suite Number')
              })
          }),
        check('cuisine')
          .exists({ checkFalsy: true })
          .withMessage('Please provide a value for cuisine')
          .isLength({max:30})
          .withMessage('Cuisine Type must not be more than 30 characters long'),
        check('imgURL')
          .exists({ checkFalsy: true })
          .withMessage('Please Submit Image'),
      ];
//TODO made ONLY accessible by the admin
router.get("/new", csrfProtection,asyncHandler(async(req,res)=>{
    const restaurant = await db.Restaurant.build()
    res.render('create-new-restaurant',{
        title:"Create A New Restaurant",
        restaurant,
        csrfToken: req.csrfToken()
    })
    }))

router.post("/new", csrfProtection,restaurantValidators, asyncHandler(async(req,res)=>{


    
}))


module.exports=router
