const db = require("../db/models");
const { asyncHandler } = require("./utils");

const reviewRouter = express.Router();



//GET collection of reviews written for a specific restaurant
reviewRouter.get('/restaurants/:id(\\d+)/reivews', asyncHandler(async(req, res) => {
    //takes the id for the URL and turns it from a string into an int
    const restaurantId = parseInt(req.params.id, 10);
    const restaurant = await db.Restaurant.findByPk(restaurantId);
    res.render('review', {
        
    })
}))

module.exports = reviewRouter;
