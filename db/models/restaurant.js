'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    cuisine: DataTypes.STRING,
    // rating: DataTypes.INTEGER,
    // numberOfReviews: DataTypes.INTEGER,
    imgURL: DataTypes.STRING

  }, {});
  Restaurant.associate = function (models) {
    Restaurant.hasMany(models.Review, { foreignKey: 'restaurantId', onDelete: 'CASCADE', hooks:true })
    Restaurant.hasMany(models.UserRestaurantList, {foreignKey: 'restaurantId', onDelete: 'CASCADE', hooks:true})
  };
  return Restaurant;
};
