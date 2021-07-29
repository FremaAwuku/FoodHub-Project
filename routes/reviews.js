const db = require("../db/models");
const { asyncHandler, csrfProtection } = require("./utils");
const restaurantRouter = require("./restaurants.js");
const router = require("./index")
const { check, validationResult } = require("express-validator");
const { requireAuth } = require("../auth")

const reviewValidators = [
    //TODO WRITE REVIEWVALIDATORS
    check('rating')
        .exists({ checkFalsey: true })
        .withMessage('Please select a rating'),
    check('text')
        .exists({ checkFalsey: true })
        .withMessage('Please include a review')
]

//GET REVIEWS
restaurantRouter.get('/:id(\\d+)/reviews', asyncHandler(async (req, res) => {
    //takes the id from the URL
    const restaurantId = req.params.id
    //find all reviews that have restaurantId as their restaurant_id
    const restaurantReviews = await db.Review.findAll({
        where: {
            restaurantId,
        },
    });
    //render the review.pug page
    res.render('review', { title: "Reviews", restaurantReviews });
}));

// GET EDIT-FORM
//NOTE: different router
router.get('/:id(\\d+)/edit', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {
    const reviewId = req.params.id;
    const review = await db.Review.findByPk(reviewId);
    console.log(req.session.auth.userId);
    // pull user id from the review
    //if user that made the post is the user editing
    if (review.userId === req.session.auth.userId) {
        res.render('review-edit', {
            title: 'Edit Review',
            review,
            reviewId,
            csrfToken: req.csrfToken()
        }
        );
    }
}));

// POST EDIT-FORM
//NOTE: different router
router.post('/:id(\\d+)', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const reviewToUpdate = await db.Review.findByPk(reviewId);
    const userId = reviewToUpdate.userId;
    const restaurantId = reviewToUpdate.restaurantId;

    const {
        rating,
        text,
    } = req.body;

    const review = {
        rating,
        text,
        userId,
        restaurantId,
    };

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        await reviewToUpdate.update(review);
        res.redirect(`/restaurants/${restaurantId}`);
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('review-edit', {
            title: 'Edit Review',
            review,
            errors,
            csrfToken: req.csrfToken(),
        });
    }
}));

//GET ADD-FORM
restaurantRouter.get('/:id(\\d+)/reviews/new', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    const restaurantId = req.params.id;
    const review = db.Review.build();
    res.render('review-add', {
        title: 'Add Review',
        restaurantId,
        review,
        csrfToken: req.csrfToken(),
    });
}));

//POST ADD-FORM
restaurantRouter.post('/:id(\\d+)/reviews', csrfProtection, requireAuth, reviewValidators, asyncHandler(async (req, res, next) => {
    // pulling restaurant id from url
    const restaurantId = req.params.id;

    //grab restrant by id
    const restaurant = await db.Restaurant.findByPk(restaurantId);

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
        //increment number of reviews
        await restaurant.increment('numberOfReviews', { by: 1 });
        res.redirect(`/restaurants/${restaurantId}`);
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

//GET form to DELETE specific review
router.get('/:id(\\d+)/delete', asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const review = await db.Review.findByPk(reviewId);
    const restaurant = await db.Restaurant.findByPk(review.restaurantId)
    res.render('review-delete', {
        title: 'Delete Review',
        review,
        reviewId,
        restaurant,
    });
}));

//POST to DELETE review
//TODO increment # of reviews
router.post('/:id(\\d+)/delete', asyncHandler(async (req, res) => {
    const reviewId = req.params.id;
    const review = await db.Review.findByPk(reviewId);
    const restaurant = await db.Restaurant.findByPk(review.restaurantId)
    await restaurant.decrement('numberOfReviews', { by: 1 })
    await review.destroy();
    //TODO where should this redirect
    res.redirect('/')
}));

module.exports = router;
