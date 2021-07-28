const db = require("../db/models");
const { asyncHandler, csrfProtection } = require("./utils");
const cookieParser = require('cookie-parser');
const restaurantRouter = require("./restaurants.js");
const { check, validationResult } = require("express-validator");
const {requireAuth} = require("../auth")

const reviewValidators = [
    //TODO WRITE REVIEWVALIDATORS
    check('rating')
        .exists({checkFalsey: true})
        .withMessage('Please select a rating'),
    check('text')
        .exists({checkFalsey: true})
        .withMessage('Please include a review')
]

//GET collection of reviews written for a specific restaurant
restaurantRouter.get('/:id(\\d+)/reviews', asyncHandler(async (req, res) => {
    //takes the id for the URL and turns it from a string into an int
    const restaurantId = parseInt(req.params.id, 10);
    //find all reviews that have restaurantId as their restaurant_id
    const restaurantReviews = await db.Review.findAll({
        where: {
            restaurantId,
        },
    });
    //render the review.pug page
    res.render('review', { title: "Reviews", restaurantReviews });
}));

// route for editing a specific review
restaurantRouter.get('/reviews/:id(\\d+)/edit', csrfProtection, asyncHandler(async(req, res, next) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await db.Review.findByPk(reviewId);
    res.render('review-edit', {

    });
}));


//GET form to add review for a specific restaurant
restaurantRouter.get('/:id(\\d+)/reviews/new', csrfProtection, asyncHandler(async(req, res) => {
    const restaurantId = parseInt(req.params.id, 10);
    const review = db.Review.build();
    res.render('review-add', {
        title: 'Add Review',
        restaurantId,
        review,
        csrfToken: req.csrfToken(),
    });
}));

//POST to add review for a specific restaurant
restaurantRouter.post('/:id(\\d+)/reviews', csrfProtection, requireAuth, reviewValidators, asyncHandler(async(req,res,next) => {
    // pulling restaurant id from url
    const restaurantId = parseInt(req.params.id, 10);
    //grabbing user id from session
    const userId = req.session.auth.userId;
    const {
        rating,
        text,
    } = req.body;

    const review = db.Review.build({
        rating,
        text,
        userId,
        restaurantId,
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await review.save();
        //TODO - WHERE TO REDIRECT AFTER POSTING REVIEW???
        res.redirect('/');
      } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('review-add', {
          title: 'Add Review',
          review,
          errors,
          csrfToken: req.csrfToken(),
        });
      }
}));


module.exports = restaurantRouter;
