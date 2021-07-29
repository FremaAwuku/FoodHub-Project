const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models');
const { loginUser } = require('../auth')

//GET all restaurant
router.get("/", asyncHandler(async(req,res)=>{
const restaurants = await db.Restaurant.findOne()
// res.send(restaurants)
res.render('restaurants',{
    title:"Restaurants",
    restaurants
})

}))
//GET individual restaurant
router.get("/:id(\\d+)", asyncHandler(async(req,res)=>{

    const restaurantId = req.params.id

    const restaurant = await db.Restaurant.findByPk(restaurantId,{include:[db.Review]})

    res.render('individual-restaurant',{
        title: restaurant.name,
        restaurant,
        restaurantId
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
              return db.Restaurant.findOne({where: {address:value}})
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
router.get("/new", csrfProtection ,asyncHandler(async(req,res)=>{
    const restaurant = await db.Restaurant.build()
    res.render('create-new-restaurant',{
        title:"Create A New Restaurant",
        restaurant,
        csrfToken: req.csrfToken()
    })
    }))


router.post("/new", csrfProtection,restaurantValidators, asyncHandler(async(req,res)=>{
    const{
        name,
        address,
        cuisine,
        imgURL
    }=req.body

    const restaurant = await db.Restaurant.build({
        name,
        address,
        cuisine,
        imgURL
    });

    const validationErrors = validationResult(req);

    if(validationErrors.isEmpty()){
        // await restaurant.save(()=>res.redirect('/'));
        await restaurant.save()
        res.redirect('/')
    }else{
        const errors = validationErrors.array().map((error)=> error.msg);

        res.render('create-new-restaurant',{
            title:"Create A New Restaurant",
            restaurant,
            csrfToken: req.csrfToken(),
            errors
        });
    }
}));

router.get("/:id(\\d+)/edit",csrfProtection, asyncHandler(async(req,res)=>{
    const restaurantId = req.params.id

    const restaurant = await db.Restaurant.findByPk(restaurantId)

  res.render('restaurant-edit',{
      title: `Edit ${restaurant.name}`,
      restaurant,
      restaurantId,
      csrfToken: req.csrfToken()
  })

}))
const restaurantValidators2 = [
    check('name')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a input for Restaurant Name')
      .isLength({ max: 100 })
      .withMessage('Restaurant Name must not be more than 100 characters long'),
    check('address')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for Address')
      .isLength({ max: 100 })
      .withMessage('Address must not be more than 100 characters long'),
    check('cuisine')
      .exists({ checkFalsy: true })
      .withMessage('Please provide a value for cuisine')
      .isLength({max:30})
      .withMessage('Cuisine Type must not be more than 30 characters long'),
    check('imgURL')
      .exists({ checkFalsy: true })
      .withMessage('Please Submit Image'),
  ];

router.post("/:id(\\d+)/edit", csrfProtection,restaurantValidators2,asyncHandler(async(req,res)=>{

    const restaurantId = req.params.id

    const restaurantInDB = await db.Restaurant.findByPk(restaurantId)

    const{
        name,
        address,
        cuisine,
        imgURL
    }=req.body

    const restaurant={
        name,
        address,
        cuisine,
        imgURL
    }

    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()){
        await restaurantInDB.update(restaurant)
        res.redirect(`/restaurants/${restaurantId}`)
    }else{
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('restaurant-edit',{
            title: `Edit ${restaurant.name}`,
            restaurant: {...restaurant},
            restaurantId,
            errors,
            csrfToken: req.csrfToken()
        });
    }
}));


module.exports=router
