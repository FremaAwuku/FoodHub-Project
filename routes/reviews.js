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
//compare auth.session with the userId already in the review
restaurantRouter.get('/reviews/:id(\\d+)/edit', csrfProtection, asyncHandler(async(req, res, next) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await db.Review.findByPk(reviewId);
    // pull user id from the review
    //if user that made the post is the user editing
    if(review.userId === req.session.auth.userId) {
        res.render('review-edit', {
        title: 'Edit Review',
        review,
        csrfToken: req.csrfToken()
            }
        );
    }
    //is an else needed? if the button only appears when the user is the one that wrote the review?
}));


//GET form to add review for a specific restaurant
//is requireAuth needed?
restaurantRouter.get('/:id(\\d+)/reviews/new', csrfProtection, requireAuth, asyncHandler(async(req, res) => {
    const restaurantId = parseInt(req.params.id, 10);
    const review = await db.Review.findOne(

    );
    res.render('review-add', {
        title: 'Add Review',
        restaurantId,
        review,
        csrfToken: req.csrfToken(),
    });
}));

//POST for EDITING review
restaurantRouter.post('/:id(\\d+)/reviews', csrfProtection, requireAuth, asyncHandler(async(req, res, next) => {
    
}))

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
