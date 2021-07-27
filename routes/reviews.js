const db = require("../db/models");
const { asyncHandler } = require("./utils");
const restaurantRouter = require("./restaurants.js")



//GET collection of reviews written for a specific restaurant
restaurantRouter.get('/:id(\\d+)/reviews', asyncHandler(async(req, res) => {
    //takes the id for the URL and turns it from a string into an int
    const restaurantId = parseInt(req.params.id, 10);
    //find all reviews that have restaurantId as their restaurant_id
    const restaurantReviews = await db.Review.findAll({
        where: {
            restaurantId,
        },
    });
    //render the review.pug page
    res.render('review', { title: "Reviews", restaurantReviews});
}));

module.exports = reviewRouter;
