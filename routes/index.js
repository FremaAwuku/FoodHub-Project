const express = require('express');
const { loginUser } = require('../auth')
const db = require('../db/models');
const { Review } = require('../db/models')
const router = express.Router();
const { asyncHandler } = require('./utils')


/* GET home page. */
//router.get('/', function (req, res, next) {
//  const restaurants = db.Restaurant.findAll({
//    where: {
//    rating: {min:1, max:5}
//  }})
// res.render('index', {
//   title: 'Top Rated Restaurants',
//
// });
//});

router.get('/', asyncHandler(async (req, res) => {
  // const restaurants = await db.Restaurant.findAll({
  //     rating: { min: 1, max: 5 },
  //     order: [["rating", "DESC"]],
  //     limit: 10
  // })

  const restaurants = await db.Restaurant.findAll({
    include: Review,
    limit: 10
  })
  res.render('index', {
    restaurants
  });
}));



module.exports = router;
